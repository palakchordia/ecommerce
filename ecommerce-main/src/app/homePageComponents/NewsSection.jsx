"use client"
import React from 'react'
import { FaAngleRight } from "react-icons/fa6";

export default function NewsSection() {
    const data = [
        { image: 'https://bchindia.com/wp-content/uploads/2025/04/Announcement.webp', title: 'Surrender of Exemption & Dissolution of Cutler Hammer Provident Fund Trust Surrender of Exemption & Dissolution of Cutler Hammer' },
        { image: 'https://bchindia.com/wp-content/uploads/2025/04/Announcement.webp', title: 'Surrender of Exemption & Dissolution of Cutler Hammer Provident Fund Trust Surrender of Exemption & Dissolution of Cutler Hammer' },
        { image: 'https://bchindia.com/wp-content/uploads/2025/04/Announcement.webp', title: 'Surrender of Exemption & Dissolution of Cutler Hammer Provident Fund Trust Surrender of Exemption & Dissolution of Cutler Hammer' },

    ]
    return (
        <div className='w-[100%] bg-[#DDDDDD] py-[40px]'>
            <div className='max-w-[1170px] mx-auto lg:p-0 p-3 flex flex-col justify-center'>
                <h2 className='text-center text-red-600 font-semibold uppercase text-[35px]'>THE LATEST NEWS</h2>
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 items-center my-[40px]">
                    {data.map((item, index) => {
                        return (
                            <div key={index} className='w-[100%] group h-[350px] cursor-pointer'>
                                <img src={item.image} className="w-[100%] h-[55%] object-cover object-center" alt="" />
                                <div className='w-[100%] h-auto bg-white p-7'>
                                    <h2 className='line-clamp-2 text-[19px] font-semibold'>{item.title}
                                    </h2>
                                    <p className='flex items-center gap-1 group-hover:underline text-[18px] mt-5 text-red-600 uppercase'>Read the story <FaAngleRight /></p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <span className='bg-red-600 hover:bg-gray-800 duration-300 cursor-pointer text-white w-[200px] mx-auto text-center uppercase py-[10px] font-semibold'>browse all news</span>
            </div>
        </div>
    )
}
