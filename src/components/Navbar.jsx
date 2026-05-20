'use client'
import React from 'react';
import ActiveNavLink from './ActiveNavLink';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { Button } from '@heroui/react';
import UserProfileOnNav from './UserProfileOnNav';

const Navbar = () => {

    const {
        data: session,
    } = authClient.useSession()

    const user = session?.user;


    return (
        <div className='fixed z-10 top-0 w-full backdrop-blur-md bg-black/40 px-[5%] py-8 text-lg text-white border-b border-b-white/30'>
            <div className='flex justify-between items-center'>
                <div><ActiveNavLink href={'/'}>Logo</ActiveNavLink></div>
                <div className='flex gap-9 items-center'>
                    <div><ActiveNavLink href={'/'}>Home</ActiveNavLink></div>
                    <div><ActiveNavLink href={'/all-cars'}>Explore Cars</ActiveNavLink></div>
                    <div><ActiveNavLink href={'/add-car'}>add-car</ActiveNavLink></div>
                </div>

                {
                    user ? <><div className='flex items-center gap-4'>

                        <div>
                            <UserProfileOnNav user={user}></UserProfileOnNav>
                        </div>
                    </div></>


                        : <><div><Link href={'/login'}>
                            <Button className={'bg-red-500'}>Login</Button></Link></div></>
                }

            </div>
        </div>
    );
};

export default Navbar;