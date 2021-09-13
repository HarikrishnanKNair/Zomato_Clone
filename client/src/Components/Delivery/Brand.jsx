import React from 'react';
import { IoLogoSass } from 'react-icons/io';
import Slider from 'react-slick';

// Components
import { NextArrow, PrevArrow } from '../CarousalArrow';

const Brand = (props) => {
    const logos = [
        "https://b.zmtcdn.com/data/brand_creatives/logos/874c2b2b4554f4aed7dd3bb4e755c420_1604383019.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/2159c4a55b3ff2362678141e6a83645f_1622476257.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/878a69aaa88728f7073d1e3d13a5a047_1628324346.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/5ef673b417cd25b5a04176ce341d425a_1630505477.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/e233fa61fd1dfc0147109bd4eb0bd315_1513746862.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/3634ffea950ad64ca918cf5a8b13c33d_1629952817.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/4c0ad890a010ebed2a98520a45a1a222_1543210471.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/08da44392a73e7e9db7be1e47863f07d_1605502580.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/e58364e86ce96c4b9c798bc25c8a7c42_1629952929.png?output-format=webp",
    ];
    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <>
            <div className="my-5 mb-32">
                <Slider {...settings}>
                    {logos.map((logo) => (
                        <div className="w-24 h-24 mx-3 bg-white shadow">
                            <img src={logo} alt="brand" className="w-full h-full object-cover" />
                        </div>
                    ))}
                </Slider>
           </div>
        </>
    );
};

export default Brand;