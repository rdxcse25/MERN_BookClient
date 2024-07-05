import React from 'react'
import FavBookImg from "../assets/favoritebook.jpg"
import { Link } from 'react-router-dom'
import DynamicText2 from './DynamicText2'

const FavBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
        <div className='md:w-1/2'>
            <img src={FavBookImg} alt="" className='rounded md:w-10/12'/>
        </div>
        <div className='md:w-1/2 space-y-6'>
            <h2 className='text-5xl font-bold my-5 md:w-3/4 leading:snug'>Find Your Favorite {<DynamicText2/>}</h2>
            <p className='mb-10 text-lg md:w-5/6'>Discover the books that everyone is talking about! Our bestseller collection features captivating stories, insightful non-fiction, and captivating reads that have captured the hearts and minds of readers worldwide. From thrilling mysteries to heartwarming romances, each book in our bestseller list promises an unforgettable journey. Find your next favorite book and join countless readers who have fallen in love with these compelling tales.</p>

            {/* stats */}
            <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                <div>
                    <h3 className='text-3xl font-bold'>800+</h3>
                    <p className='text-base'>Book Listing</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>550+</h3>
                    <p className='text-base'>Registered Users</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>1200+</h3>
                    <p className='text-base'>PDF Downloads</p>
                </div>
            </div>

            <Link to="/shop" className='mt-12 block'><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Explore More</button></Link>
        </div>
    </div>
  )
}

export default FavBook