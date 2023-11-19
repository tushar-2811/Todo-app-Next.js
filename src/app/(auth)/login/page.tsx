import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
       <div className='h-screen flex justify-center items-center '>
         <div className='w-2/3 md:w-1/3 border-2 bg-black border-black rounded-md shadow-md mx-auto'>
            <div className='p-6' >
                <div className='flex justify-center text-white text-2xl font-mono mb-2 '> Sign In </div>

                <div className=' bg-black  rounded-md flex flex-col'>

                    <input type="text" placeholder='UserName' className='p-4 outline-none focus:border-white focus:border-2 rounded-md mt-4 mb-4 bg-black text-white' />
                    <input type="password" placeholder='Password' className='p-4 outline-none focus:border-white focus:border-2 rounded-md mb-4 bg-black text-white' />
                </div>

                <div className='mt-8'>
                    <button className='text-white border-2 px-8 py-2 rounded-md flex mx-auto hover:text-green-500'> Sign In </button>
                </div>

                <div className='text-white mt-2 '>
                    <p> New Here ? <Link className='text-green-500 hover:underline' href="/signup"> Sign Up </Link> </p>
                </div>
            </div>
        </div>
       </div>
    )
}

export default page
