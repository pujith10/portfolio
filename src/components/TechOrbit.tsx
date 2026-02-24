import { useRef, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Text, Float, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const TechItem = ({ position, text }: { position: [number, number, number]; text: string }) => {
    return (
        <Float floatIntensity={2} speed={2}>
            <Text
                position={position}
                color="#3b82f6"
                fontSize={0.4}
                anchorX="center"
                anchorY="middle"
                outlineWidth={0.02}
                outlineColor="#000000"
            >
                {text}
            </Text>
        </Float>
    );
};

const OrbitingTech = () => {
    const groupRef = useRef<THREE.Group>(null);
    const technologies = [
        "React", "Node.js", "Python", "PyTorch", "TensorFlow",
        "OpenCV", "MongoDB", "Three.js", "Tailwind", "Git",
        "GNN", "NLP", "Overleaf", "Canva", "TypeScript"
    ];

    const items = useMemo(() => {
        return technologies.map((tech, i) => {
            const phi = Math.acos(-1 + (2 * i) / technologies.length);
            const theta = Math.sqrt(technologies.length * Math.PI) * phi;
            const x = 4 * Math.cos(theta) * Math.sin(phi);
            const y = 4 * Math.sin(theta) * Math.sin(phi);
            const z = 4 * Math.cos(phi);
            return { text: tech, position: [x, y, z] as [number, number, number] };
        });
    }, []);

    return (
        <group ref={groupRef}>
            {items.map((item, index) => (
                <TechItem key={index} position={item.position} text={item.text} />
            ))}
            {/* Central Core */}
            <mesh>
                <sphereGeometry args={[1.5, 32, 32]} />
                <meshStandardMaterial color="#8b5cf6" wireframe />
            </mesh>
        </group>
    );
};

export const TechOrbit = () => {
    return (
        <Canvas camera={{ position: [0, 0, 8] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <OrbitingTech />
            <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={0.5} />
        </Canvas>
    );
};
