'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const ActiveNavLink = ({ href, children }) => {
    const activePath = usePathname();

    const isActive = activePath === href;


    return (
        <div>
            <Link href={href} className={`${isActive ? 'border-b border-b-red-500 text-red-500 font-bold' : ''}`}>{children}</Link>
        </div>
    );
};

export default ActiveNavLink;