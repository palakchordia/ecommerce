'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { HiBars3 } from "react-icons/hi2";
import { IoCloseSharp, IoSearchOutline } from "react-icons/io5";

export default function Header() {
    let menu = [
        'Contact', 'customer care',  'blog', 
    ]
    const [mobileMenu, setMobileMenu] = useState(false)
    return (
        <header className='relative z-50'>

            {/* enquiry button */}
            <Link href={'/contact'}><button className='lg:block hidden fixed lg:top-1/2 -right-[72px] -rotate-90 uppercase hover:bg-gray-800 duration-300 px-[45px] lg:py-[11px] py-[15px] cursor-pointer text-[18px] font-semibold bg-[#D53332] text-white'>
                contact us
            </button></Link>

            <Link href={'/contact'}><button className='lg:hidden block fixed lg:top-1/2 bottom-0 right-0 lg:-rotate-90 w-full uppercase hover:bg-gray-800 duration-300 px-[45px] py-[12px] cursor-pointer text-[18px] font-semibold bg-[#D53332] text-white'>
                contact us
            </button></Link> 
            {/* header for pc */}
            <div className='w-[100%] lg:block hidden static overflow-hidden'>
                <div className='max-w-[1170px] mx-auto py-[8px] grid grid-cols-[30%_auto] items-center justify-between'>
                    {/* <Link href={'/'}><img className='w-[75px] h-[60px] border object-contain' src='/vulturelogofinal.png' alt='Vulture Logo' /></Link> */}
                    
                     <div className='flex  w-[500px] ' > <Link href={'/'}><img className='w-[100px] h-[60px]  object-contain' src='/vulturelogofinal.png' alt='Vulture Logo' /></Link>
                     <Link href={'/'}>
                    <p className=' p-[14px] text-2xl ' >Vulture Electricals Pvt. Ltd.</p></Link>
                    </div>
                    
                    <nav>
                        <ul className='flex items-center gap-5'>
                            <Link href={'/blog'}><li className='uppercase text-[15px] cursor-pointer hover:text-red-600 font-[500] tracking-widest border-b-2 border-b-transparent hover:border-b-red-600 pb-1 duration-300'>Blog</li></Link>

                            <Link href={'/sales-offices'}><li className='uppercase text-[15px] cursor-pointer hovn er:text-red-600 font-[500] tracking-widest border-b-2 border-b-transparent hover:border-b-red-600 pb-1 duration-300'>Sales office</li></Link>

                            <Link href={'/contact'}><li className='uppercase text-[15px] cursor-pointer hover:text-red-600 font-[500] tracking-widest border-b-2 border-b-transparent hover:border-b-red-600 pb-1 duration-300'>contact</li></Link>
                            
                            {/* <Link href={'/customer-care'}><li className='uppercase text-[13px] cursor-pointer hover:text-red-600 font-[500] tracking-widest border-b-2 border-b-transparent hover:border-b-red-600 pb-1 duration-300'>customer care</li></Link> */}
                            
                             {/* <Link href={'/company'}><li className='uppercase text-[13px] cursor-pointer hover:text-red-600 font-[500] tracking-widest border-b-2 border-b-transparent hover:border-b-red-600 pb-1 duration-300'>company</li></Link> */}
                            
                        </ul>
                    </nav> 
                </div>
                <div className='bg-[#D53332]'>
                    <div className='max-w-[1170px] mx-auto flex justify-between'>
                        <nav>
                            <ul className='text-white flex items-center gap-10'>
                                <Link href={'/product-categories'}><li className='uppercase hover:border-b-white border-2 border-transparent duration-500 origin-center py-[15px] font-semibold cursor-pointer tracking-widest '>Product Categories</li></Link>
                                <Link href={'/power-solutions'}><li className='uppercase hover:border-b-white border-2 border-transparent duration-500 origin-center py-[15px] font-semibold cursor-pointer tracking-widest '>Applications</li></Link>
                                <Link href={'/accessories'}><li className='uppercase hover:border-b-white border-2 border-transparent duration-500 origin-center py-[15px] font-semibold cursor-pointer tracking-widest '>Accessories</li></Link>
                                {/* <Link href={'/company'}><li className='uppercase hover:border-b-white border-2 border-transparent duration-500 origin-center py-[15px] font-semibold cursor-pointer tracking-widest '>company</li></Link> */}
                                
                            </ul>
                        </nav>
                        {/* <div className='w-[300px] flex items-center  '>
                            <input placeholder='Search here...' className='basis-[90%] focus:outline-none text-[14px] px-2 bg-white py-[8px]' type="text" />
                            <IoSearchOutline className='bg-white text-red-600 h-[37px] w-[30px] px-2' />
                        </div> */}

                    </div>

                </div>
            </div>


            {/* header for mobile */}
            <div className='lg:hidden block w-full z-50 relative'>
                <div className='p-3 flex justify-between items-center '>
                    <div className='flex' ><Link href={'/'}><img className='w-[60px] object-contain' src='/vulturelogofinal.png' alt='Vulture Logo' /></Link>
                    <Link href={'/'}><p className=' p-[14px] text-xl ' >Vulture Ele.</p></Link>
                    </div>
                    <button onClick={() => setMobileMenu(true)} className='text-[35px] text-red-600'><HiBars3 /></button>
                </div>
                {/* <div className=' p-3 m-3 bg-[#D53433] '>
                    <div className='w-full flex items-center  '>
                        <input placeholder='Search here...' className='basis-[90%] focus:outline-none text-[14px] px-2 bg-white py-[8px]' type="text" />
                        <IoSearchOutline className='bg-white text-red-600 h-[37px] w-[30px] px-2' />
                    </div>
                </div> */}

                <div className={`${mobileMenu ? 'left-0 opacity-100' : 'left-[-100%] opacity-0'} w-[100%] h-[100vh] overflow-y-scroll duration-300 bg-white fixed z-[50] transition-all top-0 ease-in-out`}>
                    <div className='p-3 flex justify-between items-center'>
                       <div className='flex' ><Link href={'/'}><img className='w-[60px] object-contain' src='/vulturelogofinal.png' alt='Vulture Logo' /></Link>
                       <Link href={'/'}><p className=' p-[14px] text-xl ' >Vulture Ele.</p></Link>
                    </div>
                        <button onClick={() => setMobileMenu(false)} className='text-[35px] text-red-600'><IoCloseSharp /></button>
                    </div>
                    {/* <div className=' p-3 m-3 bg-[#D53433] '>
                        <div className='w-full flex items-center  '>
                            <input placeholder='Search here...' className='basis-[90%] focus:outline-none text-[14px] px-2 bg-white py-[8px]' type="text" />
                            <IoSearchOutline className='bg-white text-red-600 h-[37px] w-[30px] px-2' />
                        </div>

                    </div> */}
                    <ul className='text-[17px]'>
                        <Link href={'/'}><li onClick={() => setMobileMenu(false)} className='capitalize px-3 py-[12px] border-b border-gray-300'>home</li></Link>
                        <Link href={'/product-categories'}><li onClick={() => setMobileMenu(false)} className='capitalize px-3 py-[12px] border-b border-gray-300'>Product Categories </li></Link>
                        <Link href={'/power-solutions'}><li onClick={() => setMobileMenu(false)} className='capitalize px-3 py-[12px] border-b border-gray-300'>Applications</li></Link>
                        <Link href={'/accessories'}><li onClick={() => setMobileMenu(false)} className='capitalize px-3 py-[12px] border-b border-gray-300'>accessories</li></Link>
                        <Link href={'/blog'}><li onClick={() => setMobileMenu(false)} className='capitalize px-3 py-[12px] border-b border-gray-300'>Blogs</li></Link>
                        <Link href={'/contact'}><li onClick={() => setMobileMenu(false)} className='capitalize px-3 py-[12px] border-b border-gray-300'>contact</li></Link>
                        {/* <Link href={'/enquiry'}><li onClick={() => setMobileMenu(false)} className='capitalize px-3 py-[12px] border-b border-gray-300'>enquiry</li></Link>
                        <Link href={'/customer-care'}><li onClick={() => setMobileMenu(false)} className='capitalize px-3 py-[12px] border-b border-gray-300'>customer care</li></Link> */}
                        {/* <li onClick={() => setMobileMenu(false)} className='capitalize px-3 py-[12px] border-b border-gray-300'>news & events</li>
                        <li onClick={() => setMobileMenu(false)} className='capitalize px-3 py-[12px] border-b border-gray-300'>blog</li> */}
                        <Link href={'/sales-offices'}><li onClick={() => setMobileMenu(false)} className='capitalize px-3 py-[12px] border-b border-gray-300'>sales offices</li></Link>
                        {/* <li onClick={() => setMobileMenu(false)} className='capitalize px-3 py-[12px] border-b border-gray-300'>downloads</li> */}
                        <li onClick={() => setMobileMenu(false)} className='capitalize px-3 py-[12px] bg-[#D53332] text-white text-center text-[18px]'>contact us</li>
                    </ul>
                </div>

            </div>

        </header>
    )
}
