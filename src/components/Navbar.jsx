'use client'
import React from 'react';
import ActiveNavLink from './ActiveNavLink';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { Button } from '@heroui/react';
import UserProfileOnNav from './UserProfileOnNav';
import Image from 'next/image';

const Navbar = () => {

    const {
        data: session,
    } = authClient.useSession()

    const user = session?.user;


    return (
        <div className='fixed z-12 top-0 w-full backdrop-blur-md bg-black/60 px-[5%] py-2 text-base md:text-lg text-white border-b border-b-white/30'>
            <div className='flex justify-between items-center'>
                <div className='hidden md:flex items-center'>
                    <Image src={'/assets/logo.png'} alt='DriveFleet' width={150} height={50}
                        className="h-22 w-auto"></Image>

                </div>
                <div className='flex gap-9 items-center'>
                    <div><ActiveNavLink href={'/'}>Home</ActiveNavLink></div>
                    <div><ActiveNavLink href={'/all-cars'}>Explore Cars</ActiveNavLink></div>
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