'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const ActiveNavLink = ({ href, children }) => {
    const activePath = usePathname();

    const isActive = activePath === href;


    return (
        <div>
            <Link href={href} className={`${isActive ? 'border-b border-white font-bold' : ''}`}>{children}</Link>
        </div>
    );
};

export default ActiveNavLink;