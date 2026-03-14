import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
    return (
        <div>
            <div className='text-center text-2xl pt-10 text-gray-700 font-medium'>
                <h1 className='text-3xl font-medium'>ABOUT <span className='text-primary'>US</span></h1>
            </div>

            <div className='my-10 flex flex-col md:flex-row gap-12'>
                <img className='w-full md:max-w-[400px]' src={assets.about_image} alt="about-image" />
                <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-700'>
                    <p>Welcome to Rally, the only Table Tennis Coach booking service you'll ever need. We are made by TT players for TT players.</p>
                    <p>Rally is committed to improvement for the player. We have coaches for every experience level and for every speciality. Whether you are beginner just starting out, a parent looking for a mentor for their child, or a seasoned professional looking to sharpen your skills, Rally is the choice for you.</p>
                    <b className='text-gray-800 font-semibold'>Our Vision</b>
                    <p>Our vision at Rally is to foster the growth of an inclusive Table Tennis coaching environment. We take care of all the admin, so you can take care of being the best.</p>
                </div>
            </div>

            <div className='text-2xl my-8'>
                <h1 className='font-medium'>WHY <span className='text-primary font-semibold'>CHOOSE US?</span></h1>
            </div>

            <div className='flex flex-col md:flex-row mb-20'>
                <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-secondary hover:bg-opacity-80 hover:text-white transition-all duration-300 text-gray-800 cursor-pointer'>
                    <b>EFFICIENCY</b>
                    <p>Streamlined booking scheduling to fit your schedule.</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-secondary hover:bg-opacity-80 hover:text-white transition-all duration-300 text-gray-800 cursor-pointer'>
                    <b>CONVENIENCE</b>
                    <p>Access to a network of certified coaches in your area.</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-secondary hover:bg-opacity-80 hover:text-white transition-all duration-300 text-gray-800 cursor-pointer'>
                    <b>PERSONALIZATION</b>
                    <p>Structured coaching and drills to keep you at the top of your game.</p>
                </div>
            </div>

        </div>
    )
}

export default About
