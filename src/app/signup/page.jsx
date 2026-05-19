"use client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";


const Signup = () => {
    return (
        <div>
            <div className="bg-[url('/assets/banner.jpg')] bg-center bg-cover  min-h-screen flex justify-center items-center text-white">
                <div className='flex flex-col md:flex-row w-[95%] md:w-[80%] mx-auto items-center gap-0 justify-between'>
                    <div className="mt-32 md:mt-0 text-center md:text-left">
                        <h1 className='text-3xl md:text-5xl font-semibold mb-5'>Create Your DriveFleet Account</h1>
                        <p className='text-lg w-auto md:w-170'>Join DriveFleet to explore premium vehicles, manage bookings effortlessly, and enjoy a seamless car rental experience tailored to every journey.</p>
                    </div>

                    {/* form */}
                    <div className="backdrop-blur-lg bg-black/40 px-10 py-20 border border-gray-700 rounded-3xl mt-7 md:mt-22 mb-10 md:mb-0">
                        <Form className="flex w-full md:w-96 flex-col gap-4 ">
                            <h1 className="text-3xl font-bold text-center">Create Account</h1>
                            <TextField
                                isRequired
                                name="name"
                                type="text"
                            >
                                <Label className="text-white">Name</Label>
                                <Input placeholder="Enter your name" />
                                <FieldError />
                            </TextField>
                            <TextField
                                isRequired
                                name="email"
                                type="email"
                                validate={(value) => {
                                    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                        return "Please enter a valid email address";
                                    }
                                    return null;
                                }}
                            >
                                <Label className="text-white">Email</Label>
                                <Input placeholder="Enter your email" />
                                <FieldError />
                            </TextField>

                            <TextField
                                isRequired
                                name="photoUrl"
                                type="text"
                            >
                                <Label className="text-white">Photo-url</Label>
                                <Input placeholder="Enter your photo-url link" />
                                <FieldError />
                            </TextField>
                            <TextField
                                isRequired
                                minLength={8}
                                name="password"
                                type="password"
                                validate={(value) => {
                                    if (value.length < 8) {
                                        return "Password must be at least 8 characters";
                                    }
                                    if (!/[A-Z]/.test(value)) {
                                        return "Password must contain at least one uppercase letter";
                                    }
                                    if (!/[0-9]/.test(value)) {
                                        return "Password must contain at least one number";
                                    }
                                    return null;
                                }}
                            >
                                <Label className="text-white">Password</Label>
                                <Input placeholder="Enter your password" />
                                <Description className="text-white">Must be at least 8 characters with 1 uppercase and 1 number</Description>
                                <FieldError />
                            </TextField>
                            <div className="flex gap-2">
                                <Button className={'bg-red-500 w-full'} type="submit">
                                    Login
                                </Button>
                            </div>

                        </Form>
                        <p className="text-center mt-3">Already have an account? <span className="text-red-600 font-bold"><Link href={'/login'}>Register</Link></span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;