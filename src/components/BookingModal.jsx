"use client";

import { authClient } from "@/lib/auth-client";
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { MdOutlineCarRental } from "react-icons/md";
import { toast } from "react-toastify";

export function BookingModal({ data }) {

    const { _id, carName, dailyRentPrice, carType, image, seatCapacity, pickupLocation, description, availability, booking_count } = data;

    const router = useRouter();
    const {
        data: session,
    } = authClient.useSession()

    const user = session?.user;

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const bookingData = Object.fromEntries(formData.entries());
        const driverNeeded = bookingData?.driver;
        const specialNote = bookingData?.specialNote;

        const bookingInfo = {
            driver: driverNeeded,
            note: specialNote,
            carName,
            carId: _id,
            dailyRentPrice,
            image,
            seatCapacity,
            pickupLocation,
            userName: user?.name,
            userId: user?.id,
            bookingDate: new Date().toLocaleDateString("en-GB")
        }

        const { data: tokenData } = await authClient.token();

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(bookingInfo)
        })
        toast.success('Booking confirmed successfully!');
        router.push('/my-bookings')

    }


    return (
        <Modal>
            <Button className={'bg-red-500 w-full'}>Book Now</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-[#f2f2f2] h-16 w-16 rounded-full">
                                <MdOutlineCarRental className="size-10 text-red-500" />
                            </Modal.Icon>
                            <Modal.Heading>Complete Your Booking</Modal.Heading>
                            <p className="mt-1.5 text-sm leading-5 text-muted">
                                Fill in the booking details to confirm your rental request.
                            </p>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                                    <TextField className="w-full" name="driver" type="text" isRequired>
                                        <Label>Driver Needed?</Label>
                                        <Input placeholder="Yes/No" />
                                    </TextField>
                                    <TextField className="w-full" name="specialNote" type="text">
                                        <Label>Special Note</Label>
                                        <Input placeholder="Special Note" />
                                    </TextField>
                                    <Modal.Footer>
                                        <Button className={'bg-red-500'} type="submit">Confirm Booking</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}