"use client"
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export default function BannerSlider() {

    const sliderData = [
        { image: '/slide1.png' },
        { image: '/slide2.png' },
        { image: '/slide3.png' },
    ]

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
    };

    return (
        <div className='w-[100%] h-[100%]  overflow-hidden'>
            <Slider {...settings}>
                {sliderData.map((item, index) => {
                    return (
                        <div key={index}>
                            <div style={{ backgroundImage: `url(${item.image})` }} className='w-[100%] lg:h-[60vh] h-[40vh] bg-no-repeat bg-cover bg-center'></div>
                        </div>
                    )
                })}

            </Slider>
        </div>
    )
}
