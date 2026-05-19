import { BookingModal } from '@/components/BookingModal';
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CgUnavailable } from 'react-icons/cg';
import { FaCarSide, FaMoneyCheck, FaRegCalendarCheck, FaRegCheckCircle } from 'react-icons/fa';
import { MdLocationOn, MdOutlineAirlineSeatReclineNormal } from 'react-icons/md';

const Details = async ({ params }) => {
    const { id } = await params;

    const res = await fetch(`http://localhost:5000/cars/${id}`);
    const data = await res.json();
    const { _id, carName, dailyRentPrice, carType, image, seatCapacity, pickupLocation, description, availability, booking_count } = data;

    return (
        <div className='bg-[#f2f2f2]'>
            <div className='pt-32 pb-10 w-[90%] mx-auto '>
                <div className='grid grid-cols-3 gap-10 lg:gap-20'>

                    <div className='col-span-3 lg:col-span-1 bg-white rounded-3xl shadow-lg p-6 text-lg space-y-6 order-2 lg:order-1'>
                        <div>
                            <h1 className='text-2xl font-semibold mb-3'>{carName}</h1>
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
                            <h1>{carType}</h1>
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
                            <h1>{pickupLocation}</h1>
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
                                    availability === 'Available' ? <><FaRegCheckCircle className='text-3xl' /></> : <><CgUnavailable className='text-3xl' /></>
                                }
                                <h1>Availability</h1>
                            </div>
                            <h1>{availability}</h1>
                        </div>

                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-3 text-lg'>
                                <FaMoneyCheck className='text-3xl' />
                                <h1>Price</h1>
                            </div>
                            <h1 className='text-2xl font-bold text-red-500'>${dailyRentPrice}<span className='text-lg font-normal'>/Per Day</span></h1>
                        </div>

                        <BookingModal></BookingModal>


                    </div>





                    <div className='col-span-3 lg:col-span-2 relative w-full h-[90vh] order-1 lg:order-2'>
                        <Image src={image} alt={carName} fill className='rounded-3xl object-cover'></Image>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;