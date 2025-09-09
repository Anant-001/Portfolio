import React from 'react'
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import ToyComputer from '../3d/ToyComputer.jsx';



const Modal = () => {
    return (
        <div style={{ width: '30vw', height: '30vh' }}>
            <Canvas camera={{ position: [0, 1.5, 4], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} />
                <Suspense fallback={null}>
                    <ToyComputer />
                </Suspense>
                <OrbitControls />
            </Canvas>
        </div>
    );
}

export default Modal
