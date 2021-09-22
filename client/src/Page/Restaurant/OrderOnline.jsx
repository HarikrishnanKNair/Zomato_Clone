import React from "react";
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

//components
import FloatMenuBtn from "../../Components/restaurant/Order-Online/FloatMenuBtn";
import MenuListContainer from "../../Components/restaurant/Order-Online/MenuListContainer";
import FoodItem from "../../Components/restaurant/Order-Online/FoodItem";

const OrderOnline = () => {
    return (
        <>
            <div className="w-full flex">
                <aside className="hidden md:flex flex-col gap-3 border-r overflow-y-scroll border-gray-200 h-screen w-1/4">
                    <MenuListContainer />
                    <MenuListContainer />
                </aside>
                <div className="w-full md:w-3/4">
                    <h2 className="text-xl font-semibold">Order Online</h2>
                    <h4 className="flex items-center gap-2 fomt-light text-gray-500">
                        <AiOutlineCompass /> Live Track Your Order | <BiTimeFive /> 45 min
                    </h4>
                    <section>
                        <FoodItem 
                            image="https://b.zmtcdn.com/data/dish_photos/df2/fdcba915279cc1f7bd53422584b94df2.jpg"
                            price="1000"
                            rating="3"
                            description="Dig in this mildly spiced aromatic dish, every long grain of rice is infused with the flavours of mutton, ghee and fried onions. Served with Sala & Raita"
                            title="Hyderabadi Dum Mutton Biryani"
                        />
                    </section>
                </div>
            </div>
            <FloatMenuBtn />
        </>
    );
};

export default OrderOnline;