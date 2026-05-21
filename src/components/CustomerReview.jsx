import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const CustomerReviewSection = () => {
    return (
        <section className="w-[90%] mx-auto pb-15 md:pb-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold">
                    What Our Customers Say
                </h2>
                <p className="text-gray-600 mt-3 leading-8 text-lg">
                    Trusted by hundreds of happy renters across the city.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                <div className="bg-[#f2f2f2] rounded-3xl p-6 space-y-5">
                    <div className="flex items-center gap-4">
                        <Image
                            src="https://randomuser.me/api/portraits/men/32.jpg"
                            alt="customer"
                            width={55}
                            height={55}
                            className="rounded-full object-cover"
                        />

                        <div>
                            <h3 className="font-semibold text-lg text-black">
                                Michael Carter
                            </h3>

                            <div className="flex items-center gap-1 text-red-500 mt-1">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                    </div>

                    <p className="text-gray-700 leading-7">
                        Booking with DriveFleet was super smooth. The car was
                        clean, comfortable, and exactly what I needed for my trip.
                    </p>
                </div>

                <div className="bg-[#f2f2f2] rounded-3xl p-6 space-y-5">
                    <div className="flex items-center gap-4">
                        <Image
                            src="https://randomuser.me/api/portraits/women/44.jpg"
                            alt="customer"
                            width={55}
                            height={55}
                            className="rounded-full object-cover"
                        />

                        <div>
                            <h3 className="font-semibold text-lg text-black">
                                Sophia Lee
                            </h3>

                            <div className="flex items-center gap-1 text-red-500 mt-1">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                    </div>

                    <p className="text-gray-700 leading-7">
                        I loved how easy the booking process was. Great service,
                        affordable pricing, and friendly support team.
                    </p>
                </div>

                <div className="bg-[#f2f2f2] rounded-3xl p-6 space-y-5">
                    <div className="flex items-center gap-4">
                        <Image
                            src="https://randomuser.me/api/portraits/men/75.jpg"
                            alt="customer"
                            width={55}
                            height={55}
                            className="rounded-full object-cover"
                        />

                        <div>
                            <h3 className="font-semibold text-lg text-black">
                                Daniel Brooks
                            </h3>

                            <div className="flex items-center gap-1 text-red-500 mt-1">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                    </div>

                    <p className="text-gray-700 leading-7">
                        DriveFleet gave me a premium experience without expensive
                        prices. Definitely renting again for my next journey.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default CustomerReviewSection;