// ToyComputer.js
import { useGLTF } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export default function ToyComputer() {
    const modelRef = useRef();
    const { scene } = useGLTF('/modal/toy_desktop_computer.glb');

    useEffect(() => {
        // Rotate continuously
        gsap.to(modelRef.current.rotation, {
            y: Math.PI * 2,
            duration: 10,
            repeat: -1,
            ease: 'power1.inOut',
        });

        // Bob up and down
        gsap.to(modelRef.current.position, {
            y: "+=0.2",
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });
    }, []);

    return (
        <primitive object={scene} ref={modelRef} scale={1.3} position={[0, -1.2, 0]} />
    );
}
