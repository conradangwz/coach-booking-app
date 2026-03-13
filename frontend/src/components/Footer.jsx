import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                {/*Left */}
                <div className='flex flex-col md:flex-row items-start md:items-center gap-4'>
                    <img className='mb-0 w-40 flex-shrink-0' src={assets.logo} alt="Logo" />
                    <p className='w-full md:w-2/3 text-gray-800 leading-6'>Rally is a coach booking app by Table Tennis players for Table Tennis players, find your coach today and elevate your game.</p>
                </div>

                {/*Center */}
                <div>
                    <p className='text-xl font-medium mb-5'>Company</p>
                    <ul className='flex flex-col gap-2 text-gray-800'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                {/*Right */}
                <div>
                    <p className='text-xl font-medium mb-5'>Get in touch</p>
                    <ul className='flex flex-col gap-2 text-gray-800'>
                        <li>+64-123-456-7890</li>
                        <li>info@rally.com</li>
                    </ul>
                </div>
            </div>
            {/*Copyright text */}
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2026@ Rally - All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer
