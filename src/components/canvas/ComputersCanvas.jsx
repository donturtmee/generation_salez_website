// components/canvas/ComputersCanvas.jsx
import {Canvas} from "@react-three/fiber";
import {ContactShadows, Environment, Float, Html, PresentationControls,} from "@react-three/drei";
import {Suspense, useEffect, useState} from "react";
import Mac from "./Mac";

function Loader() {
    return (
        <Html center>
            <div className="text-white/70 text-sm">Loading 3D…</div>
        </Html>
    );
}

export const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mql = window.matchMedia("(max-width: 640px)");
        const onChange = (e) => setIsMobile(e.matches);
        onChange(mql);
        mql.addEventListener?.("change", onChange);
        return () => mql.removeEventListener?.("change", onChange);
    }, []);

    return (
        <Canvas
            shadows
            dpr={[1, 2]}
            camera={{ position: [0.1, 1, 3.5], fov: 35 }}
            // 👇 important for touch rotation (prevents browser scrolling the page instead)
            style={{ touchAction: "none" }}
        >
            {/* Lights — main accent is #FAC308 */}
            <ambientLight intensity={0.5} />
            <directionalLight
                castShadow
                position={[4, 6, 6]}
                intensity={0.8}
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
            />
            <spotLight
                position={[-3, 5, 2]}
                intensity={1.2}
                angle={0.6}
                penumbra={0.9}
                color="#FAC308"
                castShadow
            />

            <Suspense fallback={<Loader />}>
                <PresentationControls
                    global
                    snap
                    // full 360° horizontal rotation
                    azimuth={[-Infinity, Infinity]}
                    // generous vertical tilt (adjust if you want more/less up-down)
                    polar={[-Math.PI / 2, Math.PI / 2]}
                    config={{ mass: 1, tension: 170, friction: 26 }}
                >
                    <Float speed={1} rotationIntensity={0.25} floatIntensity={0.4}>
                        <Mac isMobile={isMobile} />
                    </Float>
                </PresentationControls>


                {/* Subtle ground contact + environment reflections */}
                <ContactShadows
                    position={[0, -1.5, 0]}
                    opacity={0.3}
                    scale={10}
                    blur={2.5}
                    far={4}
                />
                <Environment preset="city" />
            </Suspense>
        </Canvas>
    );
};
