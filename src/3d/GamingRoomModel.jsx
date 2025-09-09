import { useGLTF } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function GamingRoom() {
    const modelRef = useRef();
    const { scene } = useGLTF('/modal/gaming_room.glb');

    useEffect(() => {
        // Floating animation
        gsap.to(modelRef.current.position, {
            y: "+=0.2",
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
    }, []);

    return (
        <primitive object={scene} ref={modelRef} scale={0.5} position={[0, -1.5, 0]} />
    );
}
