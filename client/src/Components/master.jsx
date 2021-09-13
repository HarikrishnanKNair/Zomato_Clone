import React from 'react'
import { useParams } from 'react-router';

// Components
import Delivery from './Delivery';
import Dining from './Dining';

const Master = () => {
    const { type } = useParams();
    return (
        <>
        <div className="my-5">
            {type === "delivery" && <Delivery /> }
            {type === "dining" && <Dining />} 
        </div>
           
        </>
    );
};

export default Master;