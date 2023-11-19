'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Header = () => {
    const path = usePathname();
  return (
    <div className='bg-black h-16 flex text-white justify-around items-center lg:w-1/2 lg:rounded-full lg:mx-auto' >
      <div>
         <h1 className='text-2xl font-mono'> T<span className='text-green-500'>o</span>d<span className='text-green-500'>o</span>-App </h1> 
      </div>

      <div className='flex gap-2'>
         <h3 className={path == '/my-todo' ? "text-green-500" : ""} >
          <Link href={"/my-todo"}> My-Todo </Link>   
        </h3>

         <h3  className={path == '/add-todo' ? "text-green-500" : ""}> 
           <Link href={"/add-todo"}> Add-Todo </Link>  
        </h3>
      </div>

      <div className= {`hidden sm:flex gap-2`} >

        <button className={`
         ${path == '/login' ? 'text-green-500' : ""}
         border-2 
         px-3 
         py-1 
         rounded-md `} >
          <Link href={"/login"}> Login  </Link>    
        </button>

        <button  className={`
         ${path == '/signup' ? 'text-green-500' : ""}
         border-2 
         px-3 
         py-1 
         rounded-md `} > 
        <Link href={"/signup"}>  SignUp   </Link> 
        </button>
      </div>

    </div>
  )
}

export default Header
