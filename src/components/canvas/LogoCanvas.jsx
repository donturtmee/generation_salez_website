import * as THREE from "three";
import { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
    useGLTF,
    PresentationControls,
    Environment,
    ContactShadows,
    Html,
    Bounds,
} from "@react-three/drei";
import { Suspense } from "react";

function Loader() {
    return (
        <Html center>
            <div className="text-white/70 text-sm">Loading 3D…</div>
        </Html>
    );
}

// Replace your LogoModel with this to force-fill the GLB in #FAC308

function LogoModel() {
    const { scene } = useGLTF("/models/logo.glb");

    useEffect(() => {
        scene.traverse((o) => {
            if (!o.isMesh) return;
            const srcMats = Array.isArray(o.material) ? o.material : [o.material];
            const newMats = srcMats.map((m) => {
                const mat =
                    (m && m.clone) ? m.clone() : new THREE.MeshStandardMaterial();
                mat.color = new THREE.Color("#FAC308");
                mat.metalness = 0.2;      // tweak if you want shinier
                mat.roughness = 0.6;      // tweak if you want glossier
                mat.map = null;           // remove textures for solid fill
                mat.emissive = new THREE.Color(0x000000);
                mat.needsUpdate = true;
                return mat;
            });
            o.material = Array.isArray(o.material) ? newMats : newMats[0];
        });
    }, [scene]);

    return <primitive object={scene} />;
}

export { LogoModel };


export const LogoCanvas = () => {

    // === Add these variables (inside LogoCanvas, before return) ===
    const MODEL_POSITION = [0, 0, 0];     // [x, y, z]
    const MODEL_ROTATION_DEG = [75, -5 , 20]; // [x°, y°, z°] — change this to orient the logo
    const MODEL_SCALE = 1.0;              // uniform scale

    const deg = (d) => (d * Math.PI) / 180; // helper: degrees → radians


    return (
        <Canvas
            shadows
            dpr={[1, 2]}
            camera={{ position: [0, 0.8, 3.5], fov: 35 }}
            style={{ touchAction: "none" }} // touch rotation on mobile
        >
            {/* lights */}
            <ambientLight intensity={0.6} />
            <directionalLight castShadow position={[4, 6, 6]} intensity={0.8} />
            <spotLight
                position={[-3, 10, 2]}
                intensity={1.1}
                angle={0.8}
                penumbra={0.9}
                color="#FAC308"
            />

            <Suspense fallback={<Loader />}>
                {/* 360° spin on drag; generous vertical tilt */}
                <PresentationControls
                    global
                    snap
                    azimuth={[-Infinity, Infinity]}
                    polar={[-Math.PI / 2, Math.PI / 2]}
                    config={{ mass: 1, tension: 170, friction: 26 }}
                >
                    {/* Auto-fit unknown model size */}
                    // === Use them where the model is rendered ===
                    <Bounds fit clip observe margin={1.2}>
                        <group
                            position={MODEL_POSITION}
                            rotation={[
                                deg(MODEL_ROTATION_DEG[0]),
                                deg(MODEL_ROTATION_DEG[1]),
                                deg(MODEL_ROTATION_DEG[2]),
                            ]}
                            scale={MODEL_SCALE}
                        >
                            <LogoModel />
                        </group>
                    </Bounds>

                </PresentationControls>

                <Environment preset="city" />
            </Suspense>
        </Canvas>
    );
};

useGLTF.preload("/models/logo.glb");
