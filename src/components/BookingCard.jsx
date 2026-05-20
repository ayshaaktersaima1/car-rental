import { Button, Card, CloseButton } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaCarSide, FaMoneyCheck } from "react-icons/fa";
import { MdLocationOn, MdOutlineAirlineSeatReclineNormal } from "react-icons/md";

const BookingCard = ({ booking }) => {

    const { _id, driver, note, carName, dailyRentPrice, image, seatCapacity, pickupLocation, userName, userId, carId } = booking;
    return (
        <div>
            <Card className="w-full items-stretch md:flex-row p-4 gap-5 rounded-3xl shadow-lg">


                <div className="relative h-[250px] md:h-auto md:w-[320px] w-full shrink-0 overflow-hidden rounded-2xl">
                    <Image
                        fill
                        src={image}
                        alt={carName}
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>


                <div className="flex flex-1 flex-col gap-4">

                    <Card.Header className="p-0">
                        <div className="space-y-2">
                            <Card.Title className="text-2xl font-bold">
                                {carName}
                            </Card.Title>

                            <Card.Description>
                                Note:
                                <span className="text-gray-600"> {note}</span>
                            </Card.Description>
                        </div>
                    </Card.Header>


                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm md:text-base">

                        <div className="flex items-center gap-2">
                            <FaMoneyCheck />
                            <span className="font-bold">${dailyRentPrice}</span>/Day
                        </div>

                        <div className="flex items-center gap-2">
                            <MdOutlineAirlineSeatReclineNormal />
                            <span>{seatCapacity} Seats</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <MdLocationOn />
                            <span>{pickupLocation}</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <FaCarSide />
                            <span>Driver Needed: {driver}</span>
                        </div>

                    </div>

                    <Card.Footer className="mt-auto p-0 pt-4 flex justify-between items-center">
                        <div>
                            <h1 className="text-sm text-gray-500">
                                Booked by
                            </h1>
                            <h1 className="font-semibold">
                                {userName}
                            </h1>
                        </div>

                        <Link href={`/all-cars/${carId}`}>
                            <Button className="bg-red-500 text-white">
                                View Details
                            </Button>
                        </Link>
                    </Card.Footer>

                </div>

            </Card>
        </div>
    );
};

export default BookingCard;