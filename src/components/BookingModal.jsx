"use client";

import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { MdOutlineCarRental } from "react-icons/md";

export function BookingModal() {
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
                                <form className="flex flex-col gap-4">
                                    <TextField className="w-full" name="driver" type="text">
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