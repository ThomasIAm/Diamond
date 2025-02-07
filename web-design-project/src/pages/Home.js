import React from 'react';
import Diamond from '../components/Diamond';

const Home = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <h1>Welcome to the Diamond Showcase</h1>
            <p>Click on the diamond below to learn more about its features and details.</p>
            <Diamond />
        </div>
    );
};

export default Home;