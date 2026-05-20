'use client'
import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CgUnavailable } from 'react-icons/cg';
import { FaCarSide, FaMoneyCheck, FaRegCheckCircle } from 'react-icons/fa';
import { MdLocationOn, MdOutlineAirlineSeatReclineNormal } from 'react-icons/md';
import DeleteAlert from './DeleteAlert';

const AddedCarCard = ({ car }) => {
    const { _id, availability, carName, carType, dailyRentPrice, description, image, pickupLocation, seatCapacity, userId } = car;



    return (
        <div>
            <Card className="w-full items-stretch md:flex-row p-4 gap-5 rounded-3xl shadow-lg border border-gray-200">


                <div className="relative h-[250px] md:h-auto md:w-[320px] w-full shrink-0 overflow-hidden rounded-2xl">
                    <Image
                        fill
                        src={image}
                        alt={carName}
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>


                <div className="flex flex-1 flex-col gap-5">


                    <Card.Header className="p-0">
                        <div className="space-y-2">
                            <div className="flex flex-wrap items-center justify-between gap-3">

                                <Card.Title className="text-2xl font-bold">
                                    {carName}
                                </Card.Title>

                                <span className='flex items-center gap-2 text-sm font-medium capitalize'>

                                    {
                                        availability == 'Available' ? <><FaRegCheckCircle className='text-red-500' /></> : <><CgUnavailable className='text-red-500' /></>
                                    }

                                    {availability}

                                </span>

                            </div>

                            <Card.Description className="text-base text-gray-600 line-clamp-2">
                                {description}
                            </Card.Description>
                        </div>
                    </Card.Header>


                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm md:text-base">

                        <div className="flex items-center gap-2">
                            <FaCarSide className="text-xl" />
                            <span className='capitalize'>{carType}</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <FaMoneyCheck className="text-xl" />
                            <span>${dailyRentPrice}/Day</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <MdOutlineAirlineSeatReclineNormal className="text-xl" />
                            <span>{seatCapacity} Seats</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <MdLocationOn className="text-xl" />
                            <span className='capitalize'>{pickupLocation}</span>
                        </div>

                    </div>


                    <Card.Footer className="mt-auto p-0 pt-4 flex flex-col sm:flex-row gap-3">

                        <Link href={`/my-added-cars/update-car/${_id}`} className="w-full">
                            <Button className="w-full text-red-500 border-2 border-red-500 bg-transparent">
                                Update
                            </Button>
                        </Link>


                        <DeleteAlert _id={_id} carName={carName}></DeleteAlert>

                    </Card.Footer>

                </div>

            </Card>
        </div>
    );
};

export default AddedCarCard;