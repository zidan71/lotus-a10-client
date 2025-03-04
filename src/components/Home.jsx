import React from 'react';
import Slider from './Slider';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';
import ForumPage from './ForumPage';
import BlogPage from './BlogPage';


const Home = () => {

    const cards = useLoaderData()

    return (
        <div>
            <Slider></Slider>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 p-6'>
        {
            cards.map(card => <Card card={card}></Card>)
        }
        </div>

       <ForumPage></ForumPage>
       <BlogPage></BlogPage>

        </div>
    );
};

export default Home;