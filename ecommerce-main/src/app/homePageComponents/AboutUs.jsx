"use client"
import Link from 'next/link';
import React from 'react'
import { FaAngleRight } from "react-icons/fa6";

export default function AboutUs() {
    const data = [
        { title: 'Weatherproof & Outdoor Enclosures', image: 'https://bchindia.com/wp-content/uploads/2016/12/Moter-Starters-Submersible-Pump-Starters-Thumb.png' },
        { title: 'Metal Enclosures & Boxes', image: '/box2.jpeg' },
        { title: 'Industrial Socket Boxes & Panels', image: '/box3.jpeg' },
        { title: 'Flooring & Specialty Boxes', image: '/box4.jpeg' },
        // { title: 'Industrial Plugs & Sockets', image: '/box4.jpeg' },
    ]
    return (
        <div className='w-[100%]'>
            <div className="max-w-[1170px] mx-auto lg:p-0 p-3 lg:my-[40px] my-[20px]">
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10">
                    {data.map((item, index) => {
                        let href = '';
                        switch (index) {
                            case 0: href = '/product-categories/1'; break;
                            case 1: href = '/product-categories/2'; break;
                            case 2: href = '/product-categories/3'; break;
                            case 3: href = '/product-categories/7'; break;
                            default: href = '/product-categories';
                        }
                        return (
                            <Link key={index} href={href}><div className='bg-[#E3E3E3] w-[100%] h-[350px] px-5 pt-5 cursor-pointer group'>
                                <div className='grid grid-cols-[95%_auto] items-center'>
                                    <h2 className='text-[18px] font-semibold group-hover:text-red-600 duration-300 uppercase'>{item.title}</h2>
                                    <p className='text-red-600 text-[18px]'><FaAngleRight /></p>
                                </div>
                                <div className='h-[70%] flex items-center'>
                                    <img src={item.image} />
                                </div>

                            </div></Link>

                        )
                    })}
                    <Link href='/product-categories'><button className='bg-red-600 text-white py-2 px-4 cursor-pointer rounded'> Explore More</button></Link>
                </div>
                <div className='grid md:grid-cols-2 items-start gap-10 lg:my-[40px] my-[20px]'>
                    <div className="">
                        <h2 className='text-red-600 text-[22px] uppercase font- mb-2'>About VULTURE</h2>
                        <p className='tracking-wide leading-[25px]'>At VULTURE, we engineer Metal Enclosures, Weatherproof Boxes, and Industrial Socket Panels built for safety, durability, and precision. Backed by decades of manufacturing expertise, our enclosures protect power in the toughest conditions — from factories and solar fields to smart infrastructure. We believe in one standard: quality that outlasts compromise.</p>
                        {/* <button className='text-red-600 flex items-center gap-2 cursor-pointer hover:underline mt-1'>know more <FaAngleRight /></button> */}
                        <img className='w-[100%] h-[300px] object-cover' src="https://bchindia.com/wp-content/uploads/2016/12/Moter-Starters-Submersible-Pump-Starters-Thumb.png" alt="" />
                    </div>
                    <div>
                        <div className="w-[100%] mb-[25px] grid md:grid-cols-[40%_45%] gap-5">
                           
                            <div className='py-[25px] px-10 bg-[#F8F8F8]'>
                                <h2 className='uppercase text-red-600 text-[18px]'>40+ years of  <br /> Legacy</h2>
                                <p>
                                    Completed 40 years of customer services in years 2024-25
                                </p>
                            </div>
                             <img className='w-[100%] h-[200px] object-cover' src="https://bchindia.com/wp-content/uploads/2016/12/Moter-Starters-Submersible-Pump-Starters-Thumb.png" alt="" />
                        </div>
                        {/* <div className="w-[100%] mb-[25px] grid md:grid-cols-[40%_45%] gap-5">
                            <img className='w-[100%] h-[180px] object-cover' src="https://bchindia.com/wp-content/uploads/2016/12/Moter-Starters-Submersible-Pump-Starters-Thumb.png" alt="" />
                            <div className='py-[25px] px-10 bg-[#F8F8F8]'>
                                <h2 className='uppercase text-red-600 text-[18px]'> 40+ years of  <br /> Legacy</h2>
                                <p>
                                    completed 50 years of customer services in years 2015-16
                                </p>
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>

        </div>
    )
}
