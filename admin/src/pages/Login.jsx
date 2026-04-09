import React, { useState, useContext } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { AdminContext } from '../context/AdminContext'

// currently broken need to fix - up to 6:41:44 in terms of progress
const Login = () => {

    const [state, setState] = useState('Admin')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { setAToken, backendurl } = useContext(AdminContext)

    const onSubmitHandler = async (event) => {
        event.preventDefault()

        try {
            if (state === 'Admin') {
                const { data } = await axios.post(backendurl + '/api/admin/login', {
                    email,
                    password
                })
                if (data.success) {
                    console.log(data.token);
                    setAToken(data.token);
                }

            } else {

            }

        } catch (error) {

        }
    }
    return (
        <form className='min-h-[80vh] flex items-center' onSubmit={onSubmitHandler}>
            <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5e5e5e] text-sm shadow-lg">
                <p className='text-2xl font-semibold m-auto'><span className='text-primary'>{state}</span> Login</p>
                <div className="w-full">
                    <p>Email</p>
                    <input className='border border-[#dadada] rounded w-full p-2 mt-1' type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="w-full">
                    <p>Password</p>
                    <input className='border border-[#dadada] rounded w-full p-2 mt-1' type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className='bg-primary text-white w-full py-2 px-4 rounded-md text-base hover:bg-[#a00d1a]'>Login</button>
                {
                    state === 'Admin' ? (
                        <p>Logging in as Coach? <span onClick={() => setState('Coach')} className='text-primary underline cursor-pointer'>Click Here</span></p>
                    ) : (
                        <p>Logging in as Admin? <span onClick={() => setState('Admin')} className='text-primary underline cursor-pointer'>Click Here</span></p>
                    )
                }
            </div>
        </form>
    )
}

export default Login
