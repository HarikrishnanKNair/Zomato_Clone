import React, { useState } from 'react';

// Components
import DeliveryCarousal from './DeliveryCarousal';
import Brand from './Brand';
import RestaurantCard from '../RestaurantCard';

const Delivery = () => {
    const [restaurantList, setRestaurantList] = useState([
        {
            _id: "123456",
            photos: ["https://b.zmtcdn.com/data/pictures/chains/8/18443088/d26f90bcacb3caeb175479a90e1eddb2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",],
            name: "Samosa Party",
            cuisine: ["Street Food", "Beverages", "Tea"],
            averageCost: 100,
            isPro: true,
            isOff: "80",
            durationOfdelivery: 47,
            restaurantReviewValue: 4.1,
        },
        {
            _id: "123456-2",
            photos: ["https://b.zmtcdn.com/data/pictures/chains/6/50036/db2271e47065db0a611237066279297b_featured_v2.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",],
            name: "Al-Bek",
            cuisine: ["Mughlai", "Arabian", "North Indian", "Chineese", "Seafood"],
            averageCost: 400,
            isPro: false,
            isOff: "80",
            durationOfdelivery: 57,
            restaurantReviewValue: 4.1,
        },
        {
            _id: "123456",
            photos: ["https://b.zmtcdn.com/data/pictures/1/19039501/b850e89389b0aa1d47acc9300390f826_o2_featured_v2.jpg?output-format=webp",],
            name: "Mumbai Xpress",
            cuisine: ["Fast Food", "North Indian", "Street Food"],
            averageCost: 100,
            isPro: false,
            isOff: "80",
            durationOfdelivery: 62,
            restaurantReviewValue: 3.8,
        },
    ]);
    return (
        <>
            <DeliveryCarousal />
            {/*<Brand />*/}
            <div className="flex flex-wrap justify-between">
                {restaurantList.map((restaurant) => (
                    <RestaurantCard {...restaurant} key={restaurant._id} />
                ))}
            </div>
        </>
    );
};

export default Delivery;