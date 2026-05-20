"use client";

import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function DeleteAlert({ _id, carName }) {

    const router = useRouter();


    const handleDelete = async (carId) => {
        const res = await fetch(`http://localhost:5000/added-car/${carId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })

        router.refresh();


    }
    return (
        <AlertDialog>

            <Button className="w-full bg-red-500 text-white">
                Delete
            </Button>

            <AlertDialog.Backdrop>
                <AlertDialog.Container>

                    <AlertDialog.Dialog className="sm:max-w-[400px] rounded-3xl">

                        <AlertDialog.CloseTrigger />

                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />

                            <AlertDialog.Heading>
                                Delete Car Listing?
                            </AlertDialog.Heading>
                        </AlertDialog.Header>

                        <AlertDialog.Body>
                            <p className="text-gray-600">
                                Are you sure you want to permanently delete{" "}
                                <strong>{carName}</strong>? This action cannot
                                be undone.
                            </p>
                        </AlertDialog.Body>

                        <AlertDialog.Footer>

                            <Button
                                slot="close"
                                variant="tertiary"
                            >
                                Cancel
                            </Button>

                            <Button
                                slot="close"
                                variant="danger"
                                onClick={() => handleDelete(_id)}
                            >
                                Delete Car
                            </Button>

                        </AlertDialog.Footer>

                    </AlertDialog.Dialog>

                </AlertDialog.Container>
            </AlertDialog.Backdrop>

        </AlertDialog>
    );
}