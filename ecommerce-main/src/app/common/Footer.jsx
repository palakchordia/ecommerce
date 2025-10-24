import React from 'react'
import { FaLinkedin, FaLinkedinIn } from 'react-icons/fa6'
import { FaFacebookSquare } from "react-icons/fa";
import ContactUs from '../homePageComponents/ContactUs';
import Link from 'next/link';


export default function Footer() {
    return (
        <>
            <footer className='bg-white w-full selection:bg-transparent'>
                <ContactUs />
                <div className='w-full lg:py-[40px]  lg:p-0 p-3 py-[60px] bg-gradient-to-r from-gray-600 via-gray-700 to-black/90'>
                    <div className="max-w-[1170px] mx-auto border-b-2 border-white pb-7 text-white grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-0 gap-3">
                        <ul>
                            <li className=' w-fit lg:mb-3 uppercase text-[20px]'>Product range</li>
                            <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>industrial products</li>
                            <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>motor starter</li>
                            <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>enclosure</li>
                            <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>industrial solutions</li>
                        </ul>
                        <ul>
                            <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500  lg:mb-3 uppercase text-[20px]'>Applications</li>
                            <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>power control</li>
                            <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>motor control</li>
                            <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>detection & sensing</li>
                            <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>heavy machinery control</li>
                        </ul>
                        <ul>
                            <li className=' w-fit lg:mb-3 uppercase text-[20px]'>industries</li>
                            <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>Manufacturing & Engineering</li>
                            <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>Energy & Power</li>
                            <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>Renewable & Solar</li>
                            <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>Construction & Infrastructure</li>
                            <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>Transportation & Metro Projects</li>
                            <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>Commercial & Industrial Buildings</li>
                            <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>Oil, Gas & Utilities</li>
                            <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>Automation & Control Systems</li>

                        </ul>
                        {/* <ul>
                            <li className='  w-fit lg:mb-3 uppercase text-[20px]'>other links</li>
                            <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>download</li>
                            <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>download enclosure drawings</li>
                            <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>blog</li>
                            <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>news & events</li>
                            <Link href={'/enquiry'}><li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>enquiry</li></Link>
                            <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>resources</li>
                            <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>privacy policy</li>
                            <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>FAQs</li>
                        </ul> */}
                        <ul>
                            <li className='border-b border-transparent w-fit lg:mb-3 uppercase text-[20px]'>company</li>
                            <Link href={'/company'}><li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>overview</li></Link>
                            {/* <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>sales and distribution</li> */}
                            {/* <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>R&D and quality</li>
                            <li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>manufacturing</li> */}
                            <Link href={'/contact'}><li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>contact</li></Link>
                            <Link href={'/customer-care'}><li className=' cursor-pointer border-b border-transparent   w-fit hover:border-red-600 duration-500 capitalize my-[10px] text-gray-400 hover:text-white '>CUSTOMER CARE</li></Link>
                        </ul>
                    </div>
                    <p className='max-w-[1170px] mx-auto flex justify-between mt-5 text-white'>

                        <p>© 1985 Vulture Electricals Pvt. Ltd.| All right reserved |E-Powered by – CODECREATER</p>
                        <div className='flex items-center gap-3'>
                            <button className='text-[25px] cursor-pointer hover:text-red-600 duration-500'><FaFacebookSquare /></button>
                            <button className='text-[25px] cursor-pointer hover:text-red-600 duration-500'><FaLinkedin /></button>
                        </div>
                    </p>
                </div>
            </footer>
        </>

    )
}
