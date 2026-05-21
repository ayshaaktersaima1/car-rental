import React from "react";

const CustomerReviewSection = () => {
    return (
        <section className="py-16 px-[5%] bg-gray-50">
            {/* Heading */}
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold">What Our Customers Say</h2>
                <p className="text-gray-500 mt-2">
                    Real feedback from our happy users
                </p>
            </div>

            {/* Reviews Grid */}
            <div className="grid md:grid-cols-3 gap-6">

                {/* Review 1 */}
                <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                    <p className="text-gray-600 mb-4">
                        “Amazing experience! The booking process was smooth and the car was in perfect condition.”
                    </p>
                    <div className="border-t pt-4">
                        <h4 className="font-semibold">John Doe</h4>
                        <p className="text-sm text-gray-500">Traveler</p>
                    </div>
                </div>

                {/* Review 2 */}
                <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                    <p className="text-gray-600 mb-4">
                        “Very reliable service. I use it regularly for my business trips. Highly recommended!”
                    </p>
                    <div className="border-t pt-4">
                        <h4 className="font-semibold">Sarah Khan</h4>
                        <p className="text-sm text-gray-500">Business Owner</p>
                    </div>
                </div>

                {/* Review 3 */}
                <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                    <p className="text-gray-600 mb-4">
                        “Great prices and excellent customer support. Will definitely use again.”
                    </p>
                    <div className="border-t pt-4">
                        <h4 className="font-semibold">Michael Lee</h4>
                        <p className="text-sm text-gray-500">Tourist</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CustomerReviewSection;