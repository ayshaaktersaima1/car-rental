import React from 'react';
import ActiveNavLink from './ActiveNavLink';

const Navbar = () => {
    return (
        <div className='fixed z-10 top-0 w-full backdrop-blur-md bg-black/40 px-[5%] py-8 text-lg text-white border-b border-b-white/30'>
            <div className='flex justify-between items-center'>
                <div><ActiveNavLink href={'/'}>Logo</ActiveNavLink></div>
                <div className='flex gap-9 items-center'>
                    <div><ActiveNavLink href={'/'}>Home</ActiveNavLink></div>
                    <div><ActiveNavLink href={'/all-cars'}>Explore Cars</ActiveNavLink></div>
                    <div><ActiveNavLink href={'/add-car'}>add-car</ActiveNavLink></div>
                </div>
                <div><ActiveNavLink href={'/login'}>Login</ActiveNavLink></div>
            </div>
        </div>
    );
};

export default Navbar;