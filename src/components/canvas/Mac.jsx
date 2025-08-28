// components/canvas/Mac.jsx
import {Center, useGLTF, useTexture} from "@react-three/drei";
import * as THREE from "three";
import {useEffect, useMemo, useState} from "react";

export default function Mac({ isMobile = false }) {
    const { scene } = useGLTF("/models/mac.glb");

    // textures
    const screenTex    = useTexture("/textures/screen2.png");
    const keyboardTex  = useTexture("/textures/keyboard.png");
    const screen2Tex   = useTexture("/textures/logo.svg"); // <-- NEW: your extra JPG

    const [appliedToScreen, setAppliedToScreen] = useState(false);
    const [appliedToKeyboard, setAppliedToKeyboard] = useState(false);

    // Click handler (put above the return in Mac.jsx)
    // Mac.jsx (top of component, before return)
    const goToWorks = () => {
        const el = document.querySelector("#works");
        if (el) el.scrollIntoView({ behavior: "smooth" });
        else window.location.hash = "works";
    };



    // Mac.jsx
    const { scale, position, rotation } = useMemo(
        () => {
            if (isMobile) {
                return {
                    scale: 0.015,
                    position: [0, -0.2, 0],   // higher up on mobile
                    rotation: [0, -Math.PI / 8, 0],
                };
            }
            return {
                scale: 0.03,
                position: [0, -0.2, 0],    // a bit lower for desktop
                rotation: [0, -Math.PI / 8, 0],
            };
        },
        [isMobile]
    );


    const prep = (tex) => {
        if (!tex) return;
        tex.flipY = false;
        if ("colorSpace" in tex) tex.colorSpace = THREE.SRGBColorSpace;
        else tex.encoding = THREE.sRGBEncoding;
        tex.anisotropy = 8;
    };
    prep(screenTex);
    prep(keyboardTex);
    prep(screen2Tex); // <-- NEW

    // Constants for screen area (your fallback uses these)
    const SCREEN_W = 31;
    const SCREEN_H = 20;

    // Utility: fit image inside screen area without stretching
    const fitInside = (cw, ch, iw, ih) => {
        const arImg = iw / ih;
        const arBox = cw / ch;
        if (arImg > arBox) {
            // image is wider than box -> limit by width
            const w = cw;
            const h = w / arImg;
            return [w, h];
        } else {
            // image is taller than box -> limit by height
            const h = ch;
            const w = h * arImg;
            return [w, h];
        }
    };

    // compute size for keyboard fallback (uses its own AR)
    const [kbSize, setKbSize] = useState([31, 12.6]);
    useEffect(() => {
        if (keyboardTex?.image?.width) {
            const ar = keyboardTex.image.width / keyboardTex.image.height;
            const width = 29;
            const height = width / ar;
            setKbSize([width, height]);
        }
    }, [keyboardTex]);

    // compute size for screen2 overlay so it respects its aspect
    const [screen2Size, setScreen2Size] = useState([SCREEN_W, SCREEN_H]);
    useEffect(() => {
        if (screen2Tex?.image?.width) {
            const [w, h] = fitInside(
                SCREEN_W,
                SCREEN_H,
                screen2Tex.image.width,
                screen2Tex.image.height
            );
            setScreen2Size([w, h]);
        }
    }, [screen2Tex]);

    // --- apply to GLB meshes when possible ---
    useEffect(() => {
        if (!scene) return;

        if (screenTex) {
            let done = false;
            scene.traverse((o) => {
                if (done || !o.isMesh) return;
                const id = `${o.name} ${o.material?.name || ""}`;
                if (/(screen|display|monitor|lcd|panel)/i.test(id)) {
                    const mat =
                        o.material?.clone?.() ||
                        new THREE.MeshPhysicalMaterial({ roughness: 0.5, metalness: 0.1 });
                    mat.map = screenTex;
                    mat.emissive = new THREE.Color("#ffffff");
                    mat.emissiveIntensity = 0.4;
                    mat.needsUpdate = true;
                    o.material = mat;
                    done = true;
                }
            });
            setAppliedToScreen(done);
        }

        if (keyboardTex) {
            let doneKb = false;
            scene.traverse((o) => {
                if (doneKb || !o.isMesh) return;
                const id = `${o.name} ${o.material?.name || ""}`;
                if (/(keyboard|keys|keybed|topcase|deck)/i.test(id)) {
                    const mat =
                        o.material?.clone?.() ||
                        new THREE.MeshPhysicalMaterial({ roughness: 0.9, metalness: 0.15 });
                    mat.map = keyboardTex;
                    mat.needsUpdate = true;
                    o.material = mat;
                    doneKb = true;
                }
            });
            setAppliedToKeyboard(doneKb);
        }
    }, [scene, screenTex, keyboardTex]);

    return (
        <group scale={scale} position={position} rotation={rotation}>
            <Center>
                    <primitive object={scene} castShadow receiveShadow/>


                    {/* Clickable hotspot over the screen */}
                    <mesh
                        position={[0, 11, -11.66]}                     // a hair in front of your screen plane
                        onClick={goToWorks}
                        onPointerOver={() => (document.body.style.cursor = "pointer")}
                        onPointerOut={() => (document.body.style.cursor = "default")}
                    >
                        <planeGeometry args={[31, 20]}/>
                        {/* same size as your screen */}
                        <meshBasicMaterial transparent opacity={0} depthWrite={false}/>
                    </mesh>


                    {!appliedToScreen && screenTex && (
                        <mesh position={[0, 11, -11.7]} rotation={[Math.PI, 0, 0]}> {/* 180° around Y */}
                            <planeGeometry args={[SCREEN_W, SCREEN_H]}/>
                            <meshBasicMaterial
                                map={screenTex}
                                toneMapped={false}
                                side={THREE.DoubleSide}   // important for 180° flips
                            />
                        </mesh>
                    )}

                    {/* BACK-LID STICKER — on the outside of the lid */}
                    // BACK-LID STICKER — plane (slightly smaller)
                    {screen2Tex && (
                        <mesh position={[0, 11, -12.23]} rotation={[0, Math.PI, 0]}>
                            <planeGeometry args={[6.8, 6.8 * (screen2Size[1] / screen2Size[0])]}/>
                            <meshBasicMaterial
                                map={screen2Tex}
                                transparent
                                alphaTest={0.1}
                                depthWrite={false}
                                polygonOffset
                                polygonOffsetFactor={-2}
                                toneMapped={false}
                            />
                        </mesh>
                    )}


                    {/* Keyboard fallback — rotated 90° to lay flat */}
                    {!appliedToKeyboard && keyboardTex && (
                        <mesh position={[0.05, 0.2, -4.3]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                            <planeGeometry args={kbSize}/>
                            <meshBasicMaterial map={keyboardTex} toneMapped={false}/>
                        </mesh>
                    )}

            </Center>
        </group>
            );
            }

            useGLTF.preload("/models/mac.glb");
            useTexture.preload("/textures/screen2.png");
            useTexture.preload("/textures/keyboard.png");
            useTexture.preload("/textures/logo.svg"); // <-- NEW
