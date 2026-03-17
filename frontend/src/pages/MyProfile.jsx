import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {

    const [userData, setUserData] = useState({
        name: "Connor Anz",
        image: assets.profile_pic,
        email: 'connor.anz@yahoo.com',
        phone: '022 777 8888',
        address: {
            line1: "67 Sixty-Seven, Laneway",
            line2: "Dry Avenue, SuperCity, Antartica"
        },
        gender: "Male",
        dob: "1994-06-07"
    })

    const [isEdit, setIsEdit] = useState(false)


    return (
        <div className='max-w-lg flex flex-col gap-2 text-sm rounded'>
            <img className='w-36 rounded' src={userData.image} alt="profile-pic" />

            {
                isEdit
                    ? <input className='bg-alt bg-opacity-15 text-3xl font-medium max-w-60 mt-4 p-2' type="text" value={userData.name} onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} />
                    : <p className='font-medium text-3xl mt-4'>{userData.name}</p>
            }

            <hr className='bg-gray-400 h-[1px] border-none' />
            <div>
                <p className='text-gray-500 underline mt-3'>CONTACT DETAILS</p>
                <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-opacity-70'>
                    <p className='font-medium'>Email:</p>
                    <p className='text-alt text-opacity-90'>{userData.email}</p>

                    <p className='font-medium'>Phone:</p>
                    {
                        isEdit
                            ? <input type="text" className='bg-alt bg-opacity-15 max-w-44 p-2' value={userData.phone} onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} />
                            : <p className='text-alt text-opacity-90'>{userData.phone}</p>
                    }
                    <p className='font-medium'>Address:</p>
                    {
                        isEdit
                            ? <p>
                                <input type="text" className='bg-alt bg-opacity-15 p-2 max-w-44' value={userData.address.line1} onChange={e => setUserData(prev => ({ ...prev.address, line1: e.target.value }))} />
                                <br />
                                <input type="text" className='bg-alt bg-opacity-15 p-2 max-w-44' value={userData.address.line2} onChange={e => setUserData(prev => ({ ...prev.address, line2: e.target.value }))} />
                            </p>
                            : <p>
                                {userData.address.line1}
                                <br />
                                {userData.address.line2}
                            </p>
                    }
                </div>
                <div >
                    <p className='text-gray-500 underline mt-3'>Basic Information</p>
                    <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-opacity-70'>
                        <p className='font-medium'>Gender:</p>
                        {
                            isEdit
                                ? <select className='max-w-44 bg-alt bg-opacity-15 p-2' onChange={e => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender}>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Non-Binary">Non-Binary</option>
                                </select>
                                : <p className='text-gray-700'>{userData.gender}</p>
                        }
                        <p>Birthday:</p>
                        {
                            isEdit
                                ? <input className='max-w-44 bg-alt bg-opacity-15 p-2' type="date" value={userData.dob} onChange={e => setUserData(prev => ({ ...prev, dob: e.target.value }))} />
                                : <p className='text-gray-700'>{userData.dob}</p>
                        }
                    </div>
                </div>
            </div>

            <div>
                {
                    isEdit
                        ? <button className='border border-secondary px-8 py-2 rounded-full mt-3 hover:bg-secondary hover:text-white transition-all duration-500' onClick={() => setIsEdit(false)}>Update Details</button>
                        : <button className='border border-secondary px-8 py-2 rounded-full mt-3 hover:bg-secondary hover:text-white transition-all duration-500' onClick={() => setIsEdit(true)}>Edit</button>
                }
            </div>
        </div>
    )
}

export default MyProfile
