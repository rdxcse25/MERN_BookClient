import React from 'react'
import BannerCard from '../home/BannerCard'
import BestSellerBooks from '../home/BestSellerBooks'

const About = () => {
  return (
    <div>
    <div className='h-screen lg:px-24 bg-teal-100 flex items-center'>
    <div className='flex flex-col md:flex-row justify-between items-center gap-12 py-10 md:py-20 px-4 md:px-0'>
    <div className='md:w-full space-y-6 md:space-y-8 h-full'>
        <h2 className='text-4xl md:text-5xl font-bold leading-tight text-gray-900'>Welcome to <span className='text-blue-700'>The Book Inventory</span></h2>
        <p className='text-lg md:text-xl text-gray-800'>At <span className='text-blue-700'>The Book Inventory</span>, we're passionate about books. Our mission is to connect book lovers with their next great read, offering a curated selection of both timeless classics and the latest bestsellers. Whether you're searching for fiction, non-fiction, or something in between, our extensive inventory caters to all interests and ages.</p>
        
        <p className='text-lg md:text-xl text-gray-800'>Founded by avid readers, <span className='text-blue-700'>The Book Inventory</span> is more than just an online bookstore. It's a community where literary enthusiasts can discover new authors, explore diverse genres, and share their love for storytelling. Our commitment to quality ensures that every book we feature is carefully selected, guaranteeing a rich and rewarding reading experience.</p>
        
        <p className='text-lg md:text-xl text-gray-800'>Join us in celebrating the written word. Whether you're a lifelong reader or just beginning your literary journey, <span className='text-blue-700'>The Book Inventory</span> is here to inspire and delight you. Explore our virtual shelves and embark on an adventure through the pages of a book today.</p>
        
    </div>
    </div>
    </div>
    <BestSellerBooks/>
    </div>



  )
}

export default About