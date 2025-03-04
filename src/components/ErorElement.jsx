import React from 'react';
import { Link } from 'react-router-dom';

const ErrorElement = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-teal-500 to-cyan-500">
            <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto">
                <h1 className="text-6xl font-bold text-teal-600 mb-4">404</h1>
                <h2 className="text-2xl text-gray-700 mb-6">Oops! The page you are looking for doesn't exist.</h2>
                <p className="text-lg text-gray-500 mb-6">It seems like you've hit a dead end.</p>
                <Link 
                    to="/" 
                    className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-2 px-6 rounded-lg text-xl hover:from-cyan-500 hover:to-teal-500 transition duration-300"
                >
                    Go Back to Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorElement;
