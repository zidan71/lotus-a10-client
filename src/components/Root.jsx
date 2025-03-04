    import React from 'react';
    import Navbar from './Navbar';
    import Footer from './Footer';
    import { Outlet } from 'react-router-dom';

    const Root = () => {
        return (
            <div className="flex flex-col min-h-screen bg-[#FAF3E0]">
                <Navbar />
                <main className="flex-grow bg-gradient-to-b from-orange-400 to-blue-900">
    <Outlet />
</main>
                <Footer />
            </div>
        );
    };

    export default Root;