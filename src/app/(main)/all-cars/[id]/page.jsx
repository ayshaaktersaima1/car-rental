import { BookingModal } from '@/components/BookingModal';
import { auth } from '@/lib/auth';
import { Button } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CgUnavailable } from 'react-icons/cg';
import { FaCar, FaCarSide, FaMoneyCheck, FaRegCalendarCheck, FaRegCheckCircle } from 'react-icons/fa';
import { MdLocationOn, MdOutlineAirlineSeatReclineNormal } from 'react-icons/md';

const Details = async ({ params }) => {
    const { id } = await params;

    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/cars/${id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const data = await res.json();
    const { _id, carName, dailyRentPrice, carType, image, seatCapacity, pickupLocation, description, availability, booking_count } = data;

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
        <div className='bg-[#f2f2f2]'>
            <div className='pt-32 pb-10 w-[90%] mx-auto '>
                <div className='grid grid-cols-3 gap-10 lg:gap-20'>

                    <div className='col-span-3 lg:col-span-1 bg-white rounded-3xl shadow-lg p-6 text-lg space-y-6 order-2 lg:order-1'>
                        <div>
                            <h1 className='capitalize text-2xl font-semibold mb-3'>{carName}</h1>
                            <hr />
                        </div>
                        <div className='flex gap-3 text-lg text-gray-600'>
                            <h1>{description}</h1>
                        </div>

                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-3 text-lg'>
                                <FaCarSide className='text-3xl' />
                                <h1>Car Type</h1>
                            </div>
                            <h1 className='capitalize'>{carType}</h1>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-3 text-lg'>
                                <MdOutlineAirlineSeatReclineNormal className='text-3xl' />
                                <h1>Seats</h1>
                            </div>
                            <h1>{seatCapacity}</h1>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-3 text-lg'>
                                <MdLocationOn className='text-3xl' />
                                <h1>Pickup Location</h1>
                            </div>
                            <h1 className='capitalize'>{pickupLocation}</h1>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-3 text-lg'>
                                <FaRegCalendarCheck className='text-3xl' />
                                <h1>Booking</h1>
                            </div>
                            <h1>{booking_count}</h1>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-3 text-lg'>
                                {
                                    isAvailable ? <><FaRegCheckCircle className='text-3xl' /></> : <><CgUnavailable className='text-3xl' /></>
                                }
                                <h1>Availability</h1>
                            </div>
                            <h1 className='capitalize'>{availability}</h1>
                        </div>

                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-3 text-lg'>
                                <FaMoneyCheck className='text-3xl' />
                                <h1>Price</h1>
                            </div>
                            <h1 className='text-2xl font-bold text-red-500'>${dailyRentPrice}<span className='text-lg font-normal'>/Per Day</span></h1>
                        </div>

                        <BookingModal data={data}></BookingModal>


                    </div>





                    <div className='col-span-3 lg:col-span-2 relative w-full h-[90vh] order-1 lg:order-2'>

                        {
                            isValid ? <> <Image src={image} alt={carName} fill className='rounded-3xl object-cover'></Image></> :
                                <><div className='flex justify-center'>
                                    <FaCar size={80} className=" text-red-500" />
                                </div></>
                        }


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;