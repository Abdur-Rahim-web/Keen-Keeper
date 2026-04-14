import React from 'react';
import Banner from '../components/home/Banner';
import BannerCard from '../components/home/BannerCard';
import Friends from '../components/home/Friends';


const Home = () => {
    return (
        <div className="bg-base-200 min-h-screen rounded-2xl">
            <Banner></Banner>
            <BannerCard></BannerCard>
            <Friends></Friends>
        </div>
    );
};

export default Home;