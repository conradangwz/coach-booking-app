import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopCoaches = () => {

    const navigate = useNavigate();
    const { coaches } = useContext(AppContext);


    return (
        <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
            <h1 className='text-3xl font-medium'>Our Top Coaches</h1>
            <p className='sm:w-1/3 text-center text-sm'>Meet our team of expert coaches, find the one that best suits your game.</p>
            <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
                {coaches.slice(0, 10).map((item, index) => (
                    <div onClick={() => navigate(`/appointment/${item._id}`)} className='border border-alt border-opacity-45 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                        <img className='bg-red-50' src={item.image} alt={item.name} />
                        <div className='p-4'>
                            <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                                <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                                <p>Available</p>
                            </div>
                            <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                            <p className='text-gray-600 text-sm'>{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={() => { navigate('/coaches'); scrollTo(0, 0) }} className='bg-primary text-white px-12 py-3 rounded-full mt-10 hover:scale-105 transition-all'>More </button>
        </div>
    )
}

export default TopCoaches
