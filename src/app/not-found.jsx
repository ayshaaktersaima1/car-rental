import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f2f2f2] text-black px-6">

            <div className="text-center space-y-5">

                <h1 className="text-7xl md:text-9xl font-black text-red-500">
                    404
                </h1>

                <h2 className="text-2xl md:text-4xl font-bold">
                    Page Not Found
                </h2>

                <p className="text-gray-600 max-w-md mx-auto">
                    The page you are looking for does not exist or has been moved.
                </p>

                <Link href="/">
                    <Button className="bg-red-500 text-white px-6">
                        Back To Home
                    </Button>
                </Link>

            </div>

        </div>
    );
};

export default NotFound;