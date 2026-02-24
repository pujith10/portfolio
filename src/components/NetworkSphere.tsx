import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

const AnimatedSphere = () => {
    const meshRef = useRef<any>(null);

    useFrame((_, delta) => {
        meshRef.current.rotation.x += delta * 0.2;
        meshRef.current.rotation.y += delta * 0.3;
    });

    return (
        <Sphere args={[1, 100, 200]} scale={2.4} ref={meshRef}>
            <MeshDistortMaterial
                color="#3b82f6"
                attach="material"
                distort={0.5}
                speed={2}
                roughness={0}
                metalness={0.8}
                wireframe
            />
        </Sphere>
    );
};

export const NetworkSphere = () => {
    return (
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none">
            <Canvas>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <AnimatedSphere />
            </Canvas>
        </div>
    );
};
