import React from 'react'
import BannerCard from '../home/BannerCard'
import DynamicText1 from './DynamicText1'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-12 py-40'>
            {/* left side */}
            <div className='md:w-1/2 space-y-8 h-full'>
                <h2 className='text-5xl font-bold leading-snug text-black'>Buy And Sell Your Books {<DynamicText1/>}</h2>
                <p className='md:w-4/5'>Welcome to The Book Inventory, your premier online destination for everything books! Whether you're an avid reader, a casual browser, or searching for that perfect gift, we've curated a diverse collection to satisfy every literary palate. At The Book Inventory, every page turns into an unforgettable adventure.</p>
                <div>
                    <input type="search" name='search' id='search' placeholder='Search a book' className='py-2 px-2 rounded-s-sm outline-none'/>
                    <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
                </div>
            </div>

            {/* right side */}
            <div>
                <BannerCard/>
            </div>
        </div>
    </div>
  )
}

export default Banner