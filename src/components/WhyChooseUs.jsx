import Image from "next/image";
import {
    FaCarSide,
    FaMapMarkerAlt,
    FaHeadset,
    FaShieldAlt,
} from "react-icons/fa";

import React from 'react';

const WhyChooseUs = () => {
    return (
        <div>
            <div className="pb-20 pt-10 px-5 overflow-hidden">
                <div className="w-[90%] mx-auto">
                    <div className="text-center max-w-3xl mx-auto">

                        <h2 className="text-3xl md:text-5xl font-bold leading-tight mt-0">
                            Why DriveFleet Stands Out
                        </h2>

                        <p className="text-gray-600 mt-6 leading-8 text-lg">
                            DriveFleet provides reliable, stylish, and comfortable vehicles
                            with flexible rental solutions for business trips, vacations,
                            airport transfers, and daily travel needs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center mt-20">

                        <div className="space-y-12">


                            <div className="border-b border-gray-300 pb-8">
                                <div className="flex items-start gap-4">

                                    <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center text-red-500 shrink-0">
                                        <FaCarSide size={24} />
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-semibold mb-3">
                                            Luxury & Economy Cars
                                        </h3>

                                        <p className="text-gray-600 leading-8">
                                            From premium sedans to affordable daily rides, choose the
                                            perfect vehicle for every occasion and budget.
                                        </p>
                                    </div>

                                </div>
                            </div>


                            <div className="border-b border-gray-300 pb-8">
                                <div className="flex items-start gap-4">

                                    <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center text-red-500 shrink-0">
                                        <FaHeadset size={24} />
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-semibold mb-3">
                                            24/7 Customer Support
                                        </h3>

                                        <p className="text-gray-600 leading-8">
                                            Our dedicated support team is always available to help you
                                            with bookings, assistance, and smooth travel experiences.
                                        </p>
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className="relative flex justify-center">

                            <div className="w-[320px] h-[420px] md:w-[420px] md:h-[520px] rounded-t-full overflow-hidden relative">
                                <Image
                                    src={'/assets/whychoose.jpg'}
                                    alt="city"
                                    fill
                                    className="object-cover"
                                />
                            </div>


                        </div>


                        <div className="space-y-12">


                            <div className="border-b border-gray-300 pb-8">
                                <div className="flex items-start gap-4">

                                    <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center text-red-500 shrink-0">
                                        <FaMapMarkerAlt size={24} />
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-semibold mb-3">
                                            Easy Pickup Locations
                                        </h3>

                                        <p className="text-gray-600 leading-8">
                                            Convenient pickup and drop-off points across the city make
                                            your travel experience faster and hassle-free.
                                        </p>
                                    </div>

                                </div>
                            </div>


                            <div className="border-b border-gray-300 pb-8">
                                <div className="flex items-start gap-4">

                                    <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center text-red-500 shrink-0">
                                        <FaShieldAlt size={24} />
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-semibold mb-3">
                                            Safe & Well-Maintained Vehicles
                                        </h3>

                                        <p className="text-gray-600 leading-8">
                                            Every DriveFleet vehicle is regularly inspected and serviced
                                            to ensure safety, reliability, and top performance.
                                        </p>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;