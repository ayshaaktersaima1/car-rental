import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CgUnavailable } from 'react-icons/cg';
import { FaCar, FaRegCheckCircle } from 'react-icons/fa';
import { MdOutlineAirlineSeatReclineNormal, MdOutlineEventAvailable } from 'react-icons/md';

const Card = ({ car }) => {
    const { _id, image, carName, dailyRentPrice, availability, carType, seatCapacity } = car;

    function isValidUrl(string) {
        try {
            new URL(string);
            return true;
        } catch (err) {
            return false;
        }
    }

    const isValid = isValidUrl(image);
    const isAvailable = availability?.toLowerCase() === "available";


    return (
        <div>
            <div className='h-full bg-[#f2f2f2] flex flex-col flex-1 overflow-hidden rounded-2xl shadow-md hover:-translate-y-3 transition duration-300'>
                <div className='relative w-full aspect-[4/3]'>
                    {
                        isValid ? <> <Image src={image} alt='car photo' fill className='object-cover object-center'></Image></> :
                            <><div className='flex justify-center'>
                                <FaCar size={80} className=" text-red-500" />
                            </div></>
                    }

                </div>
                <div className='px-6 py-10 flex justify-between gap-4 items-center' >
                    <div>
                        <h1 className='text-lg md:text-xl font-bold  line-clamp-1 capitalize'>{carName}</h1>
                        <p className='mb-2 capitalize text-gray-600'>({carType})</p>
                        <div className='flex flex-wrap items-center gap-4 text-gray-600'>
                            <div className='flex items-center justify-center gap-1'>
                                {
                                    isAvailable ? <><FaRegCheckCircle className='text-red-500' /></> : <><CgUnavailable className='text-red-500' /></>
                                }

                                <p className='capitalize'>{availability}</p>
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
                        <div className='flex flex-col items-end justify-end'>
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