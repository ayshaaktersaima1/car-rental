import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';
import React from 'react';

const layout = ({ children }) => {
    return (
        <div>
            <ScrollToTop></ScrollToTop>
            <Navbar></Navbar>
            <main>
                {children}
            </main>
            <Footer></Footer>

        </div>
    );
};

export default layout;