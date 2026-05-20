import BookingCard from "@/components/BookingCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";



const MyBookings = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    })

    const user = session?.user;


    const userId = user?.id;
    const res = await fetch(`http://localhost:5000/bookings/${userId}`);

    const bookings = await res.json();


    return (
        <div className='bg-[#f2f2f2]'>
            <div className="pt-32 pb-10 w-[90%] mx-auto">
                <h1 className='text-center text-5xl font-semibold mb-10'>My Bookings</h1>
                <div className="space-y-5">
                    {
                        bookings.map(booking => <BookingCard key={booking._id} booking={booking}></BookingCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyBookings;