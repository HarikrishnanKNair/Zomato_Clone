import React from 'react';
import { IoMdArrowDropright } from "react-icons/io";

const PictureCarousalCard = () => {
    return (
        <>
            <div className="w-full h-64 relative px-4 overflow-hidden">
                <div className="w-full h-full relative">
                    <img
                        src="https://b.zmtcdn.com/data/pictures/chains/8/50708/c946933ad4b71137b9724ec8b26186a9_featured_v2.jpg?output-format=webp"
                        alt="food"
                        className="w-full h-full object-cover transition duration-700 ease-in-out rounded-lg"
                    />
                    <div
                        className="w-full h-full absolute inset-0 rounded-lg"
                        style={{
                            background: "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)",
                        }}
                    />
                </div>
                <div className="absolute w-full left-8 bottom-2 text-white">
                    <h4 className="z-10">Brilliant Biryanis</h4>
                    <h6 className="z-10 flex items-center">15 places <IoMdArrowDropright /></h6>
                </div>
            </div>
        </>
    );
};

export default PictureCarousalCard;