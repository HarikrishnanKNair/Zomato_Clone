import React from "react";
import Slider from "react-slick";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import ReactStars from "react-rating-stars-component";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

// components
import MenuCollection from "../../Components/restaurant/MenuCollection";
import MenuSimilarRestaurantCard from "../../Components/restaurant/MenuSimilarRestaurantCard";
import ReviewCard from "../../Components/restaurant/Reviews/reviewCard";
import { NextArrow, PrevArrow } from "../../Components/CarousalArrow";

const Overview = () => {
    const { id } = useParams();

    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    return (
        <>
            <div className="flex flex-col md:flex-row relative">
                <div className="w-full md:w-8/12">
                    <h2 className="font-semibold text-lg md:text-xl my-4">
                        About this place
                    </h2>
                    <div className="flex justify-between items-center">
                        <h4 className="text-lg font-medium">Menu</h4>
                        <Link to={`/restaurant/${id}/menu`}>
                            <span className="flex items-center gap-1 text-zomato-400">
                                See all menu <IoMdArrowDropright />
                            </span>
                        </Link>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <MenuCollection
                            menuTitle="Menu"
                            pages="10"
                            image="https://b.zmtcdn.com/data/menus/910/19721910/296a175b90f663b970f0fa08b7e270d6.jpg"
                        />
                    </div>
                    <h4 className="text-lg font-medium">Cuisines</h4>
                    <div className="flex flex-wrap gap-2">
                        <span className="border border-gray-500 text-blue-600 px-2 py-1 rounded-full">Street Food</span>
                        <span className="border border-gray-500 text-blue-600 px-2 py-1 rounded-full">Street Food</span>
                        <span className="border border-gray-500 text-blue-600 px-2 py-1 rounded-full">Street Food</span>
                    </div>
                    <div className="my-4">
                        <h4 className="text-lg font-medium">Average Cost</h4>
                        <h6>Rs.100 for one order (approx.)</h6>
                        <small className="text-gray-500">Exclusive of applicable taxes and charges, if any</small>
                    </div>
                    <div className="my-4">
                        <h4 className="text-lg font-medium">Similar Restaurants</h4>
                        <Slider {...settings}>
                            <MenuSimilarRestaurantCard 
                                image="https://b.zmtcdn.com/data/pictures/chains/0/50270/a5f8fec039374892bb9f938471321993_featured_v2.jpg?output-format=webp"
                                title="Noodles"
                            />
                            <MenuSimilarRestaurantCard 
                                image="https://b.zmtcdn.com/data/pictures/chains/0/50270/a5f8fec039374892bb9f938471321993_featured_v2.jpg?output-format=webp"
                                title="Noodles"
                            />
                            <MenuSimilarRestaurantCard 
                                image="https://b.zmtcdn.com/data/pictures/chains/0/50270/a5f8fec039374892bb9f938471321993_featured_v2.jpg?output-format=webp"
                                title="Noodles"
                            />
                            <MenuSimilarRestaurantCard 
                                image="https://b.zmtcdn.com/data/pictures/chains/0/50270/a5f8fec039374892bb9f938471321993_featured_v2.jpg?output-format=webp"
                                title="Noodles"
                            />
                            <MenuSimilarRestaurantCard 
                                image="https://b.zmtcdn.com/data/pictures/chains/0/50270/a5f8fec039374892bb9f938471321993_featured_v2.jpg?output-format=webp"
                                title="Noodles"
                            />
                            <MenuSimilarRestaurantCard 
                                image="https://b.zmtcdn.com/data/pictures/chains/0/50270/a5f8fec039374892bb9f938471321993_featured_v2.jpg?output-format=webp"
                                title="Noodles"
                            />
                            <MenuSimilarRestaurantCard 
                                image="https://b.zmtcdn.com/data/pictures/chains/0/50270/a5f8fec039374892bb9f938471321993_featured_v2.jpg?output-format=webp"
                                title="Noodles"
                            />
                        </Slider>
                    </div>
                    <div className="my-4">
                        <h4 className="text-lg font-medium">
                            Rate your delivery experience
                        </h4>
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            activeColor="#ffd700"
                        />
                    </div>
                    <div className="my-4 flex flex-col gap-4">
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                    </div>
                </div>
                <aside 
                    style={{ height: "fit-content" }}
                    className="hidden md:block md:w-4/12 sticky top-2 bg-white p-3 rounded-xl shadow-md"
                >
                    <div>
                        <h4 className="text-lg font-medium">Call</h4>
                        <h5 className="text-zomato-400 font-medium">+917760624268</h5>
                    </div>
                    <div>
                        <h4 className="text-lg font-medium">Direction</h4>
                        <div className="w-full h-48">
                            <MapContainer center={[12.988134202889283, 77.59405893120281]} zoom={13} scrollWheelZoom={false}>
                                <TileLayer
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={[12.988134202889283, 77.59405893120281]}>
                                    <Popup>
                                        A pretty CSS3 popup. <br /> Easily customizable.
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                    </div>
                </aside>
            </div>
        </>
    );
};

export default Overview;