import { UserButton } from '@clerk/clerk-react';
import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

export default function LandingPage() {
    let navigate = useNavigate(); // This hook gives you access to the history instance that you may use to navigate.

    const goToSignUp = () => {
        navigate('/sign-up'); // Use history.push() to navigate to the desired path.
    };

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // This makes the container take the full height of the viewport
    };

    const buttonStyle = {
        backgroundColor: '#4e9af1', // A nice shade of blue.
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px',
        margin: '10px',
        textDecoration: 'none',
    };

    return (
        <div style={containerStyle}>
            <h1 className="text-7xl text-center text-blue-400">Welcome to Upgraded!</h1>
            <button onClick={goToSignUp} style={buttonStyle}>
                Sign up to get your Quick savings report!
            </button>
            <UserButton />
        </div>
    );
}
