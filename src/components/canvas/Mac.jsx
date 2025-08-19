// components/canvas/Mac.jsx
import { useGLTF, Center } from "@react-three/drei";
import { useMemo } from "react";

export default function Mac({ isMobile = false }) {
    const { scene } = useGLTF("/models/mac.glb");

    const { scale, position, rotation } = useMemo(() => ({
        scale: isMobile ? 0.01 : 0.02,   // << smaller (tweak these)
        position: [0, -0.25, 0],
        rotation: [0, Math.PI / 8, 0],
    }), [isMobile]);

    return (
        <Center> {/* keep it centered */}
            <primitive object={scene} castShadow receiveShadow
                       scale={scale} position={position} rotation={rotation} />
        </Center>
    );
}

useGLTF.preload("/models/mac.glb");
