import React from 'react';

export const NextArrow = (props) => {
    return (
        <div 
            className={props.className}
            style={{...props.style, backgroundColor: "#feb6c0"}}
            onClick={props.onClick}
        />
    );
};

export const PrevArrow = (props) => {
    return (
        <div 
            className={props.className}
            style={{...props.style, backgroundColor: "#feb6c0"}}
            onClick={props.onClick}
        />
    );
};