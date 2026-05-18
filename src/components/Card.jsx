import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CgUnavailable } from 'react-icons/cg';
import { MdOutlineAirlineSeatReclineNormal, MdOutlineEventAvailable } from 'react-icons/md';

const Card = ({ car }) => {
    const { _id, image, carName, dailyRentPrice, availability, carType, seatCapacity } = car;
    return (
        <div>
            <div className='overflow-hidden rounded-2xl shadow-md hover:-translate-y-3 transition duration-300'>
                <div className='relative w-full aspect-[4/3]'>
                    <Image src={image} alt='car photo' fill className='object-cover object-center'></Image>
                </div>
                <div className='bg-[#f2f2f2] px-6 py-10 flex justify-between gap-4 items-center' >
                    <div>
                        <h1 className='text-xl font-bold mb-2 line-clamp-1'>{carName}</h1>
                        <div className='flex flex-wrap items-center gap-4 text-gray-600'>
                            <div className='flex items-center justify-center gap-1'>
                                {
                                    availability === 'Available' ? <><MdOutlineEventAvailable className='text-red-500' /></> : <><CgUnavailable className='text-red-500' /></>
                                }

                                <p>{availability}</p>
                            </div>
                            <div className='flex items-center justify-center gap-1'>
                                <MdOutlineAirlineSeatReclineNormal className='text-red-500' />
                                <p>{seatCapacity} Seats</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div>
                            <Link href={`/all-cars/${_id}`}>
                                <Button className={'bg-red-500'}>Details</Button>
                            </Link>
                        </div>
                        <div className='flex flex-col items-center justify-end'>
                            <h1 className='text-xl font-bold'>${dailyRentPrice}</h1>
                            <p className='text-gray-600'>/day</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;