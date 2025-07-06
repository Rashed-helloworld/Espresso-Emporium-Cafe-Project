import React from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {

    const coffees = useLoaderData();
    // console.log(coffees);

    return (
        <div>
            <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {
                    coffees.map(coffee=><CoffeeCard key={coffee._id} coffee={coffee} />)
                }
            </section>
        </div>
    );
};

export default Home;