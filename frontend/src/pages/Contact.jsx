import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {



    return (
        <div>
            <div className='text-center text-3xl pt-10 text-gray-700 font-medium'>
                <h1>CONTACT <span className='text-primary font-semibold'>US</span></h1>
            </div>

            <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
                <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="contact" />

                <div className='flex flex-col justify-center items-start gap-6'>
                    <p className='font-semibold text-lg text-gray-800'>OUR OFFICE</p>
                    <p className='text-gray-700'>123 Street Avenue, <br /> Place 350, Auckland, New Zealand</p>
                    <p className='text-gray-700'>Tel: (123) 456-7890  <br /> Email: info@rally.com</p>
                    <p className='font-semibold text-lg text-gray-800'>Looking to Coach?</p>
                    <p className='text-gray-700'>Learn more about our team and job openings</p>
                    <button className='border border-black px-8 py-4 text-sm hover:bg-secondary hover:text-white transition-all duration-300'>Explore Jobs</button>
                </div>
            </div>

        </div >
    )
}

export default Contact
