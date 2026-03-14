import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedCoaches = ({ speciality, coachId }) => {

    const { coaches } = useContext(AppContext)
    const navigate = useNavigate()

    const [relCoach, setRelCoaches] = useState([])

    useEffect(() => {
        if (coaches.length > 0 && speciality) {
            const coachData = coaches.filter((coach) => coach.speciality === speciality && coach._id !== coachId)
            setRelCoaches(coachData)
        }

    }, [coaches, speciality, coachId])


    return (
        <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
            <h1 className='text-3xl font-medium'>Similar Coaches</h1>
            <p className='sm:w-1/3 text-center text-sm'>We found some other coaches with similar skills. Check them out.</p>
            <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
                {relCoach.slice(0, 5).map((item, index) => (
                    <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} className='border border-alt border-opacity-45 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
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

export default RelatedCoaches
