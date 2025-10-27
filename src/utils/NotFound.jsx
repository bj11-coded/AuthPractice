import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <section className='bg-white mx-auto px-20 flex flex-col justify-center items-center h-screen '>
        <div className='text-lime-900 text-center'>
          <h1 className='text-9xl font-extrabold spaci'> 404</h1>
          <p className='text-xl py-3 text-black'> The Requested Url / Page is not Avialable </p>

          <Link to={'/'} >
            <button className=' outline-green-800 outline text-green-800 hover:outline-none hover:bg-green-800 border-2 px-8 py-2 rounded-sm hover:text-white'>
              Go to Home
            </button>
          </Link>
        </div>
      </section>
    </>
  )
}

export default NotFound
