import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useHistory } from 'react-router-dom';

const Diamond = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push('/details');
    };

    return (
        <div onClick={handleClick} style={{ cursor: 'pointer', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <mesh>
                    <icosahedronBufferGeometry args={[1, 0]} />
                    <meshStandardMaterial color="white" />
                </mesh>
                <OrbitControls />
            </Canvas>
        </div>
    );
};

export default Diamond;