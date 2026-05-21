import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaGithub, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-16 pb-8">

            <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                <div className="space-y-4">
                    <div>
                        <Image src={'/assets/logo.png'}
                            alt='DriveFleet'
                            height={60}
                            width={120}
                            className='object-contain w-24 md:w-32 lg:w-36 h-auto'></Image>
                    </div>

                    <p className="text-gray-400 leading-relaxed">
                        DriveFleet helps you explore, book, and manage premium
                        rental cars with ease and comfort.
                    </p>
                </div>

                <div>
                    <h1 className="text-xl font-semibold mb-5">
                        Quick Links
                    </h1>

                    <div className="flex flex-col gap-3 text-gray-400">

                        <Link href="/">
                            Home
                        </Link>

                        <Link href="/all-cars">
                            Explore Cars
                        </Link>

                        <Link href="/add-car">
                            Add Car
                        </Link>

                        <Link href="/my-bookings">
                            My Bookings
                        </Link>

                    </div>
                </div>

                <div>
                    <h1 className="text-xl font-semibold mb-5">
                        Contact Info
                    </h1>

                    <div className="space-y-4 text-gray-400">

                        <div className="flex items-center gap-3">
                            <MdEmail className="text-xl" />
                            <p>support@drivefleet.com</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <MdPhone className="text-xl" />
                            <p>+880 1234-567890</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <MdLocationOn className="text-xl" />
                            <p>Dhaka, Bangladesh</p>
                        </div>

                    </div>
                </div>

                <div>
                    <h1 className="text-xl font-semibold mb-5">
                        Follow Us
                    </h1>

                    <div className="flex items-center gap-4">

                        <Link
                            href="https://facebook.com"
                            className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-red-500 transition"
                        >
                            <FaFacebookF />
                        </Link>

                        <Link
                            href="https://github.com"
                            className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-red-500 transition"
                        >
                            <FaGithub />
                        </Link>

                        <Link
                            href="https://x.com"
                            className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-red-500 transition"
                        >
                            <FaXTwitter />
                        </Link>

                        <Link
                            href="https://instagram.com"
                            className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-red-500 transition"
                        >
                            <FaInstagram />
                        </Link>

                    </div>
                </div>

            </div>

            <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-500 text-sm">
                © 2026 DriveFleet. All Rights Reserved.
            </div>

        </footer>
    );
};

export default Footer;