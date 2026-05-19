import React from 'react';

const Details = async ({ params }) => {
    const { id } = await params;

    const res = await fetch(`http://localhost:5000/cars/${id}`);
    const data = await res.json();
    console.log(data)
    return (
        <div className='pt-32'>
            <h1>Car details</h1>
        </div>
    );
};

export default Details;