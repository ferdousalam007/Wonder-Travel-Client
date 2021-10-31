import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services'
import TopDestinations from '../TopDestinations/TopDestinations';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <TopDestinations></TopDestinations>
        </div>
    );
};

export default Home;