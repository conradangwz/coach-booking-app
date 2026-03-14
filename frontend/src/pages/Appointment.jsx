import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import RelatedCoaches from '../components/RelatedCoaches'

const Appointment = () => {

    const { coachId } = useParams()
    const { coaches, currencySymbol } = useContext(AppContext)
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

    const [coachInfo, setCoachInfo] = useState(null)
    const [coachSlots, setCoachSlots] = useState([])
    const [slotIndex, setSlotIndex] = useState(0)
    const [slotTime, setSlotTime] = useState('')

    const fetchCoachInfo = async () => {
        const coachInfo = coaches.find(coach => coach._id === coachId)
        setCoachInfo(coachInfo)
    }

    const getAvailableSlots = async () => {
        setCoachSlots([])

        // get current date
        let today = new Date()

        for (let i = 0; i < 7; i++) {
            // getting date with index
            let currentDate = new Date(today)
            currentDate.setDate(today.getDate() + i)

            // set end time of date with index
            let endTime = new Date()
            endTime.setDate(today.getDate() + i)
            endTime.setHours(21, 0, 0, 0)

            // setting hrs
            if (today.getDate() === currentDate.getDate()) {
                currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
                currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
            } else {
                currentDate.setHours(10)
                currentDate.setMinutes(0)
            }

            let timeSlots = []

            while (currentDate < endTime) {
                let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

                // add slot to array
                timeSlots.push({
                    dateTime: new Date(currentDate),
                    time: formattedTime
                })

                // increment current time by 30 min
                currentDate.setMinutes(currentDate.getMinutes() + 30)
            }

            setCoachSlots(prev => ([...prev, timeSlots]))

        }
    }


    useEffect(() => {
        fetchCoachInfo()
    }, [coaches, coachId])

    useEffect(() => {
        getAvailableSlots()
    }, [coachInfo])

    useEffect(() => {
        console.log(coachSlots);

    }, [coachSlots])

    return coachInfo && (
        <div>
            {/*Coach Details */}
            <div className='flex flex-col sm:flex-row gap-4'>
                <div>
                    <img className='bg-secondary w-full sm:max-w-72 rounded-lg' src={coachInfo?.image} alt={coachInfo?.name} />
                </div>

                <div className='flex-1 border border-secondary border-opacity-30 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
                    {/* Coach Info */}
                    <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
                        {coachInfo?.name}
                        <img className='w-5' src={assets.verified_icon} alt="verified" />
                    </p>
                    <div className='flex items-center gap-2 text-sm mt-1 text-gray-700'>
                        <p>{coachInfo?.degree} - {coachInfo?.speciality}</p>
                        <button className='py-0.5 px-2 border text-xs rounded-full'>{coachInfo?.experience}</button>
                    </div>
                    {/* About Coach */}
                    <div>
                        <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>
                            About
                            <img className='ml-0.5 w-3.5' src={assets.info_icon} alt="info" />
                        </p>
                        <p className='text-sm text-gray-700 max-w-[700px] mt-1'>{coachInfo?.about}</p>
                    </div>
                    {/*Fee */}
                    <p className='font-medium text-gray-800 mt-4'>
                        Booking Fee: <span className='text-gray-900'>{currencySymbol}{coachInfo?.fees}</span>
                    </p>
                </div>
            </div>
            {/*Booking slots */}
            <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
                <p>Booking Slots</p>
                <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
                    {
                        coachSlots.length && coachSlots.map((item, index) => (
                            <div onClick={() => setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex == index ? 'bg-primary text-white' : 'border border-gray-400'}`} key={index}>
                                <p>{item[0] && daysOfWeek[item[0].dateTime.getDay()]}</p>
                                <p>{item[0] && item[0].dateTime.getDate()}</p>
                            </div>
                        ))
                    }
                </div>
                <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
                    {coachSlots.length && coachSlots[slotIndex].map((item, index) => (
                        <p onClick={() => setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time == slotTime ? 'bg-primary text-white' : 'text-gray-700 border border-gray-400'}`} key={index}>
                            {item.time.toLowerCase()}
                        </p>
                    ))}
                </div>
                <button className='bg-primary text-white text-med font-light px-14 py-3 rounded-full my-6'>Make a Booking</button>
            </div>

            {/* List related coaches */}
            <RelatedCoaches coachId={coachId} speciality={coachInfo.speciality} />
        </div>
    )
}

export default Appointment
