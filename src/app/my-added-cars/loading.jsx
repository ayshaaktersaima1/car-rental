import { Spinner } from '@heroui/react';
import React from 'react';

const loading = () => {
    return (
        <div className='flex justify-center items-center h-[30vw]'>
            <div className="flex flex-col items-center gap-2">
                <Spinner className='text-red-500' size="xl" />
                <span className="text-xs text-muted">loading</span>
            </div>
        </div>
    );
};

export default loading;