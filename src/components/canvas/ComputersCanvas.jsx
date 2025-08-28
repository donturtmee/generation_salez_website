// components/canvas/ComputersCanvas.jsx
import {Canvas} from "@react-three/fiber";
import {ContactShadows, Environment, Float, Html, OrbitControls, PresentationControls} from "@react-three/drei";
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
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const mql = window.matchMedia("(max-width: 640px)");
        const onChange = (e) => setIsMobile(e.matches);
        onChange(mql);
        mql.addEventListener?.("change", onChange);
        return () => mql.removeEventListener?.("change", onChange);
    }, []);

    useEffect(() => {
        document.body.style.cursor = hovered ? "grab" : "";
        return () => { document.body.style.cursor = ""; };
    }, [hovered]);

    return (
        <Canvas
            shadows
            dpr={[1, 2]}
            camera={{ position: [0, 0.8, 3.5], fov: 35 }}
            gl={{ alpha: true }}
            style={{ background: "transparent" }}
        >
            {/* Keep OrbitControls for lock/feel, but don't rotate camera */}
            <OrbitControls
                enableZoom={false}
                enablePan={false}
                enableRotate={false}   // rotation handled by PresentationControls
            />

            {/* Lights */}
            <ambientLight intensity={0.5} />
            <directionalLight castShadow position={[4, 6, 6]} intensity={0.8} shadow-mapSize-width={2048} shadow-mapSize-height={2048} />
            <spotLight position={[-3, 5, 2]} intensity={1.2} angle={0.6} penumbra={0.9} color="#FAC308" castShadow />

            <Suspense fallback={<Loader />}>
                {/* IMPORTANT: make it local (omit global) so it only rotates when interacting with its children */}
                <PresentationControls
                    snap
                    // local controls: reacts only when cursor is over the wrapped group
                    azimuth={[-Infinity, Infinity]}
                    polar={[-Math.PI / 2, Math.PI / 2]}
                    config={{ mass: 1, tension: 170, friction: 26 }}
                >
                    <group
                        onPointerOver={(e) => { e.stopPropagation(); setHovered(true); }}
                        onPointerOut={(e)  => { e.stopPropagation(); setHovered(false); }}
                        onPointerDown={() => (document.body.style.cursor = "grabbing")}
                        onPointerUp={() => (document.body.style.cursor = "grab")}
                    >
                        <Float speed={1} rotationIntensity={0.25} floatIntensity={0.4}>
                            <Mac isMobile={isMobile} />
                        </Float>
                    </group>
                </PresentationControls>

                <ContactShadows position={[0, -1.5, 0]} opacity={0.3} scale={10} blur={2.5} far={4} />
                <Environment preset="city" />
            </Suspense>
        </Canvas>
    );
};
