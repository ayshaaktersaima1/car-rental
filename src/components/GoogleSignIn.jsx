import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import { Icon } from "@iconify/react";
import React from 'react';

const GoogleSignIn = () => {
    const signIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };
    return (
        <div>
            <Button onClick={signIn} className="w-full text-red-500" variant="tertiary">
                <Icon icon="devicon:google" />
                Sign in with Google
            </Button>
        </div>
    );
};

export default GoogleSignIn;