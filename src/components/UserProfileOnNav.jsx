"use client";


import { authClient } from "@/lib/auth-client";
import { Button, Dropdown, Header, Label } from "@heroui/react";
import Image from "next/image";
import { useState } from "react";


export default function UserProfileOnNav({ user }) {
    const [selected, setSelected] = useState(new Set(["apple"]));

    return (
        <Dropdown>
            <Button aria-label="Menu" className="flex items-center gap-3 border text-white border-gray-400 rounded-lg px-4 bg-transparent">
                <div className="h-10 w-10 shrink-0 rounded-full flex items-center">
                    <Image src={user?.image} alt="profile pic" height={32} width={32} className="rounded-full"></Image>
                </div>
                <div className="flex-1 space-y-2">
                    <h1>{user?.name}</h1>
                </div>
            </Button>
            <Dropdown.Popover className="min-w-[256px] bg-red-500">
                <Dropdown.Menu
                    selectedKeys={selected}
                    selectionMode="single"
                    onSelectionChange={setSelected}
                >
                    <Dropdown.Section>
                        <Header className="text-gray-700">My Account</Header>
                        <Dropdown.Item href="/add-car" id="addCar" textValue="addCar">
                            <Dropdown.ItemIndicator />
                            <Label>Add Car</Label>
                        </Dropdown.Item>
                        <Dropdown.Item href="/my-bookings" id="myBookings" textValue="myBookings">
                            <Dropdown.ItemIndicator />
                            <Label>My Bookings</Label>
                        </Dropdown.Item>
                        <Dropdown.Item href="/my-added-cars" id="myAddedCars" textValue="myAddedCars">
                            <Dropdown.ItemIndicator />
                            <Label>My Added Cars</Label>
                        </Dropdown.Item>
                    </Dropdown.Section>
                    <Dropdown.Item onPress={async () => await authClient.signOut()} id="Logout" textValue="Logout">
                        <Dropdown.ItemIndicator />
                        <Label>Logout</Label>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown>
    );
}