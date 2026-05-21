import BookingCard from "@/components/BookingCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";



const MyBookings = async () => {

    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    const session = await auth.api.getSession({
        headers: await headers()
    })

    const user = session?.user;


    const userId = user?.id;
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${userId}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });

    const bookings = await res.json();


    return (
        <div className='bg-[#f2f2f2]'>
            <div className="pt-26 pb-11 md:pt-40 md:pb-22 w-[90%] mx-auto">
                <h1 className='text-center text-3xl md:text-5xl mb-7 md:mb-10 font-semibold'>My Bookings</h1>


                {
                    bookings.length == 0 ? <>
                        <div className='flex justify-center items-center h-[30vh]'>
                            <h1 className="text-base md:text-lg">You do not have any bookings yet.</h1>
                        </div>
                    </> : <>
                        <div className="space-y-5">
                            {
                                bookings.map(booking => <BookingCard key={booking._id} booking={booking}></BookingCard>)
                            }
                        </div>
                    </>
                }

            </div>
        </div>
    );
};

export default MyBookings;