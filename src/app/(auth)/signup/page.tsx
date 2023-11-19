'use client'
// import axios from 'axios';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const page = () => {
    const[name , setName] = useState("");
    const[userName , setUserName] = useState("");
    const[password , setPassword] = useState("");

    const router = useRouter();

    const handleSubmit = async() => {
         console.log(name , userName , password);
        //  const {data} = await axios.post('/api/signup' , {name , userName , password});

        //  console.log(data.user);

        //  if(data.ok) {
        //     router.push('/login');
        //     toast.success("successful")
        //  }

    }

    return (
       <div className='h-screen flex justify-center items-center '>
         <div className='w-2/3 md:w-1/3 border-2 bg-black border-black rounded-md shadow-md mx-auto'>
            <div className='p-6' >
                <div className='flex justify-center text-white text-2xl font-mono mb-2 '> Sign Up </div>

                <div className=' bg-black  rounded-md flex flex-col'>

                    <input onChange={(e) => setName(e.target.value)} type="text" name='name' value={name} placeholder='Name' className='p-4  outline-none focus:border-white focus:border-2 rounded-md mt-4 mb-4 bg-black text-white' />
                    <input onChange={(e) => setUserName(e.target.value)} type="text" name='userName' value={userName} placeholder='UserName' className='p-4  outline-none focus:border-white focus:border-2 rounded-md mb-4 bg-black text-white' />
                    <input onChange={(e) => setPassword(e.target.value)} type="password" name='password' value={password} placeholder='Password' className='p-4  outline-none focus:border-white focus:border-2 rounded-md mb-4 bg-black text-white' />
                </div>

                <div className='mt-8'>
                    <button onClick={handleSubmit}  className='text-white border-2 px-8 py-2 rounded-md flex mx-auto hover:text-green-500'> Sign Up </button>
                </div>

                <div className='text-white mt-2 '>
                    <p> New Here ? <Link className='text-green-500 hover:underline' href="/login"> Sign In </Link> </p>
                </div>
            </div>
        </div>
       </div>
    )
}

export default page
