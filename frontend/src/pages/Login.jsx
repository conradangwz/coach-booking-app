import React, { useState } from 'react'

const Login = () => {

    const [state, setState] = useState('Sign Up')

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const onSubmitHandler = async (event) => {
        event.preventDefault()
    }



    return (
        <form className='min-h=[80vh] flex items-center'>
            <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-gray-800 text-sm shadow-lg'>
                <p className='text-3xl font-medium'>{state === 'Sign Up' ? "Create Account" : "Login"}</p>
                <p className='pb-2'>Please {state === 'Sign Up' ? "sign up" : "log in"} to make a booking.</p>
                {
                    state === "Sign Up" && <div className='w-full'>
                        <p>Full Name</p>
                        <input className='border border-gray-400 rounded w-full p-2 mt-1' type="text" onChange={(e) => setName(e.target.name)} value={name} />
                    </div>
                }

                <div className='w-full'>
                    <p>Email</p>
                    <input className='border border-gray-400 rounded w-full p-2 mt-1' type="text" onChange={(e) => setEmail(e.target.email)} value={email} />
                </div>
                <div className='w-full'>
                    <p>Password</p>
                    <input className='border border-gray-400 rounded w-full p-2 mt-1' type="text" onChange={(e) => setPassword(e.target.password)} value={password} />
                </div>
                <button className='bg-primary mt-3 text-white w-full py-2 rounded-md text-base'>{state === 'Sign Up' ? "Create Account" : "Login"}</button>
                {
                    state == "Sign Up"
                        ? <p>Already have an account? <span onClick={() => setState('Login')} className='text-accent underline cursor-pointer'>Login here.</span></p>
                        : <p>Create a new account? <span onClick={() => setState('Sign Up')} className='text-accent underline cursor-pointer'>Click here.</span> </p>
                }
            </div>




        </form>
    )
}

export default Login
