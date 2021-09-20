import React from "react";

const MenuCollection = (props) => {
    return (
        <>
            <div className="w-32 h-32 flex flex-col md:w-48 md:h-48 ">
                <div className="w-full h-full rounded-lg overflow-hidden">
                    <img src={props.image} alt="menu" className="w-full h-full transform transition duration-400 rounded-lg hover:scale-110"/>
                </div>
                <div>
                    <strong>{props.menuTitle}</strong>
                    <p>{props.pages} Pages</p>
                </div>
            </div>
        </>
    );
};

export default MenuCollection;