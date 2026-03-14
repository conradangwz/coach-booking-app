import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Appointment = () => {

    const { coachId } = useParams()
    const { coaches } = useContext(AppContext)

    const [coachInfo, setCoachInfo] = useState(null)

    const fetchCoachInfo = async () => {
        const coachInfo = coaches.find(coach => coach._id === coachId)
        setCoachInfo(coachInfo)
        console.log(coachInfo)

    }

    useEffect(() => {
        fetchCoachInfo()
    }, [coaches, coachId])

    return (
        <div>

        </div>
    )
}

export default Appointment
