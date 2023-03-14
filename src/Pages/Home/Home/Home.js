import React from 'react';
import Banner from '../Banner/Banner';
import BestSell from '../BestSell/BestSell';
import Inventories from '../Inventories/Inventories';
import NewArrival from '../NewArrival/NewArrival';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <BestSell></BestSell>
            <NewArrival></NewArrival>
        </div>
    );
};

export default Home;