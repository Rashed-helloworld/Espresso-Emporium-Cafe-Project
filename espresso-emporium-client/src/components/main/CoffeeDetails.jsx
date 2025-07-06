import React from 'react';
import { useLoaderData } from 'react-router';

const CoffeeDetails = () => {
    const { photo, name, supplier, taste, details, price, quantity } = useLoaderData();
    return (
        <div className='p-6 bg-[#999a] flex flex-col md:flex-row justify-center items-center gap-8'>
            <figure>
                <img
                    src={photo}
                    alt="coffee cup image"
                    className='min-w-[240px]'/>
            </figure>
            <section className='flex flex-col gap-6'>
                <h2 className='text-[#d91] font-semibold text-xl'>Niceties</h2>
                <div>
                    <p>Name: { name}</p>
                    <p>Supplier: { supplier}</p>
                    <p>Taste: { taste}</p>
                    <p>Extra Details: { details}</p>
                    <p>Quantity: { quantity}</p>
                    <p>Price Per Cup: { price}</p>
                </div>
            </section>
        </div>
    );
};

export default CoffeeDetails;