import React from 'react'

const NutritionCard = ({image, title}) => {
    return (
        <>
            <div className="bg-white shadow rounded-md px-3 md:px-4 w-24 md:w-56 ">
                <div className="w-full h-12 md:h-36">
                    <img 
                        src={image}
                        alt="food"
                        className="w-full h-full object-cover rounded-t-md"
                    />
                </div>
                <div>
                    <h3 className="text-sm my-1 font-light text-center md:text-xl">{title}</h3>
                </div>
            </div>
        </>
    );
};

const NutritionCarousalCard = (props) => {
    return (
        <>
            <NutritionCard {...props} />
        </>
    );
};

export default NutritionCarousalCard;