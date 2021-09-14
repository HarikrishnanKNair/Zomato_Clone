import React from 'react';
import Slider from "react-slick";

// Components
import DeliveryCategory from './DeliveryCategory';
import { NextArrow, PrevArrow } from '../CarousalArrow';

const DeliveryCarousal = () => {
    const categories = [
        {
            image: "https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png",
            title: "Biriyani",
        },
        {
            image: "https://b.zmtcdn.com/data/homepage_dish_data/4/742929dcb631403d7c1c1efad2ca2700.png",
            title: "Chicken",
        },
        {
            image: "https://b.zmtcdn.com/data/dish_images/c598d69f4864f3cba4b0de2d8efc0e521612436494.png",
            title: "Pizza",
        },
        {
            image: "https://b.zmtcdn.com/data/homepage_dish_data/4/6e69685d22c94ffd42ccd7e70e246bd9.png",
            title: "Burger",
        },
        {
            image: "https://b.zmtcdn.com/data/homepage_dish_data/4/04e1dbc0ec30031e5f26d0bef922ea0c.png",
            title: "Paneer",
        },
        {
            image: "https://b.zmtcdn.com/data/homepage_dish_data/4/4de821b132e2c393f7c52bf6e41a4331.png",
            title: "Kebab",
        },
    ];

    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <>
            <h1 className="text-xl mb-4 font-semibold">Inspiration for your first order</h1>
            <div className="lg:hidden flex gap-3 lg:gap-0 flex-wrap justify-between">
                {categories.map((food) => (
                    <DeliveryCategory {...food} />
                ))}
            </div>
            <div className="hidden lg:block">
                <Slider {...settings}>
                    {categories.map((food) => (
                        <DeliveryCategory {...food} />
                    ))}
                </Slider>
            </div>
        </>
    );
};

export default DeliveryCarousal;