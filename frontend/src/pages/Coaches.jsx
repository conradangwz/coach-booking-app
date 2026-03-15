import React, { useContext, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Coaches = () => {

    const { speciality } = useParams()
    const [filterCoach, setFilterCoach] = useState([])
    const navigate = useNavigate()

    console.log(speciality);


    const { coaches } = useContext(AppContext)

    const applyFilter = () => {
        if (speciality) {
            setFilterCoach(coaches.filter(coach => coach.speciality === speciality))
        } else {
            setFilterCoach(coaches)
        }
    }

    useEffect(() => {
        applyFilter()
    }, [coaches, speciality])

    return (
        <div>
            <p className='text-gray-800'>Browse through the coaches' specialities:</p>
            <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
                <div className='flex flex-col gap-2 text-sm text-gray-800'>
                    <p onClick={() => speciality === 'Youth Coach' ? navigate('/coaches') : navigate('/coaches/Youth Coach')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-secondary border-opacity-20 rounded transition-all cursor-pointer ${speciality === "Youth Coach" ? "bg-secondary bg-opacity-80 border-opacity-80 text-white font-medium" : ""}`}>Youth Coach</p>
                    <p onClick={() => speciality === 'Elite Coach' ? navigate('/coaches') : navigate('/coaches/Elite Coach')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-secondary border-opacity-20 rounded transition-all cursor-pointer ${speciality === "Elite Coach" ? "bg-secondary bg-opacity-80 border-opacity-80 text-white font-medium" : ""}`}>Elite Coach</p>
                    <p onClick={() => speciality === 'Offensive Coach' ? navigate('/coaches') : navigate('/coaches/Offensive Coach')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-secondary border-opacity-20 rounded transition-all cursor-pointer ${speciality === "Offensive Coach" ? "bg-secondary bg-opacity-80 border-opacity-80 text-white font-medium" : ""}`}>Offensive Coach</p>
                    <p onClick={() => speciality === 'Defensive Coach' ? navigate('/coaches') : navigate('/coaches/Defensive Coach')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-secondary border-opacity-20 rounded transition-all cursor-pointer ${speciality === "Defensive Coach" ? "bg-secondary bg-opacity-80 border-opacity-80 text-white font-medium" : ""}`}>Defensive Coach</p>
                    <p onClick={() => speciality === 'All-Round Coach' ? navigate('/coaches') : navigate('/coaches/All-Round Coach')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-secondary border-opacity-20 rounded transition-all cursor-pointer ${speciality === "All-Round Coach" ? "bg-secondary bg-opacity-80 border-opacity-80 text-white font-medium" : ""}`}>All-Round Coach</p>
                    <p onClick={() => speciality === 'Tactical Coach' ? navigate('/coaches') : navigate('/coaches/Tactical Coach')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-secondary border-opacity-20 rounded transition-all cursor-pointer ${speciality === "Tactical Coach" ? "bg-secondary bg-opacity-80 border-opacity-80 text-white font-medium" : ""}`}>Tactical Coach</p>
                </div>
                <div className='w-full grid grid-cols-auto gap-4 gap-y-6' >
                    {
                        filterCoach.map((item, index) => (
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
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Coaches
