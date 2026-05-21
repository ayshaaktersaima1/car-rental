import React from 'react';
import Banner from './Banner';
import FeaturedCardSec from './FeaturedCardSec';
import WhyChooseUs from './WhyChooseUs';
import CustomerReviewSection from './CustomerReview';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedCardSec></FeaturedCardSec>
            <WhyChooseUs></WhyChooseUs>
            <CustomerReviewSection></CustomerReviewSection>
        </div>
    );
};

export default Homepage;