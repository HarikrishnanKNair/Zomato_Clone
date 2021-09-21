import React from "react";
import { TiStarFullOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";

// Components
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar";
import ImageGrid from "../Components/restaurant/ImageGrid";
import Restaurantinfo from "../Components/restaurant/Restaurantinfo";
import InfoButtons from "../Components/restaurant/InfoButtons";
import TabContainer from "../Components/restaurant/Tabs";

const RestaurantLayout = (props) => {
    return (
        <>
            {" "}
            <RestaurantNavbar />
            <div className="container mx-auto px-4 lg:px-20">
                <ImageGrid images={[
                    "https://b.zmtcdn.com/data/pictures/2/18621252/f737723f080910e46c451c51b9bbd717.jpg?output-format=webp",
                    "https://b.zmtcdn.com/data/pictures/2/18621252/f737723f080910e46c451c51b9bbd717.jpg?output-format=webp",
                    "https://b.zmtcdn.com/data/pictures/2/18621252/f737723f080910e46c451c51b9bbd717.jpg?output-format=webp",
                    "https://b.zmtcdn.com/data/pictures/2/18621252/f737723f080910e46c451c51b9bbd717.jpg?output-format=webp",
                    "https://b.zmtcdn.com/data/pictures/2/18621252/f737723f080910e46c451c51b9bbd717.jpg?output-format=webp",
                ]}/>
                <Restaurantinfo 
                    name="Mumbai Xpress"
                    restaurantRating="4.0"
                    deliveryRating="3.5"
                    cuisine="Fast Food, North Indian, Street Food, Beverages, Chinese"
                    address="Basavanagudi, Bangalore"
                />
                <div className="my-4 flex flex-wrap gap-3">
                    <InfoButtons isActive>
                        <TiStarFullOutline /> Add Review
                    </InfoButtons>
                    <InfoButtons>
                        <RiDirectionLine /> Direction
                    </InfoButtons>
                    <InfoButtons>
                        <BiBookmarkPlus /> Bookmark
                    </InfoButtons>
                    <InfoButtons>
                        <RiShareForwardLine /> Share
                    </InfoButtons>
                </div>
                <div classname="my-10">
                    <TabContainer>
                    </TabContainer>
                </div>
                {props.children}
            </div>
        </>
    );
};

export default RestaurantLayout;