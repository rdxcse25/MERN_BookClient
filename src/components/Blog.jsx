import React from 'react'
import FavBookImg from "../assets/book-fair-img.jpg"
import { Link } from 'react-router-dom'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

//import some icons
import {FaStar} from 'react-icons/fa6';
import { Avatar } from "flowbite-react";
import proPic from "../assets/profile.jpg"


const Blog = () => {
  return (
    <div>
      <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
        <div className='md:w-1/2'>
            <img src={FavBookImg} alt="" className='rounded md:w-10/12'/>
        </div>
        <div className='md:w-1/2 space-y-6'>
            <h2 className='text-5xl font-bold my-5 md:w-3/4 leading:snug'>Welcome to <span className='text-blue-700'>our BLOG!</span></h2>
            <p className='mb-10 text-lg md:w-5/6'>Explore our latest articles and insightful content on everything related to books, reading, and literature. Whether you're looking for book reviews, author interviews, literary news, or recommendations across genres, our blog is your go-to destination. Join our community of book lovers and dive into the world of storytelling with us.</p>


            <Link to="/shop" className='mt-12 block'><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Explore Books</button></Link>
        </div>
    </div>
    <div className='my-12 px-4 lg:px-24'>
        <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>

        <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>

                {/* text */}
                <div className='mt-7'>
                  <h2 className='font-bold'>The Power of Reading: How Books Transform Lives</h2>
                    <p className='mb-5'>
                    In today's fast-paced world, where technology and screens dominate our daily lives, the simple act of picking up a book might seem like a quaint pastime. Yet, behind its unassuming cover lies a world of transformative power that extends far beyond mere entertainment. Reading, in its essence, is a journey—a journey of discovery, empathy, and personal growth.
                    </p>
                    <Avatar 
                      img={proPic} 
                      alt="avatar of Jese" 
                      rounded className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Mark Ping</h5>
                    <p className='text-base'>CEO, ABC Company</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
             

                {/* text */}
                <div className='mt-7'>
                <h2 className='font-bold'>Exploring Classic Literature: Timeless Tales That Still Resonate Today</h2>
                    <p className='mb-5'>
                    Classic literature holds a special place in the literary canon, revered for its enduring themes, rich characters, and profound insights into the human condition. These timeless tales continue to captivate readers of all ages, offering glimpses into different eras, cultures, and perspectives. Let's dive into some of the most beloved classics and explore why they still resonate with readers today.
                    </p>
                    <Avatar 
                      img={proPic} 
                      alt="avatar of Jese" 
                      rounded className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Olivia Hawthorne</h5>
                    <p className='text-base'>Author</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                

                {/* text */}
                <div className='mt-7'>
                <h2 className='font-bold'>The Power of Non-Fiction: Exploring the Benefits of Reading Real-Life Stories</h2>
                    <p className='mb-5'>
                    While fiction often transports us to imaginative worlds and fantastical realms, non-fiction offers a different kind of journey—one grounded in real-life experiences, knowledge, and personal growth. From memoirs to historical accounts, self-help guides to scientific explorations, non-fiction books provide valuable insights and perspectives that can enrich our lives in profound ways.
                    </p>
                    <Avatar 
                      img={proPic} 
                      alt="avatar of Jese" 
                      rounded className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Jasper Everhart</h5>
                    <p className='text-base'>poet</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                

                {/* text */}
                <div className='mt-7'>
                <h2 className='font-bold'>Reading for Wellness: How Books Improve Mental Health</h2>
                    <p className='mb-5'>
                    In the hustle and bustle of modern life, finding moments of peace and relaxation can be challenging. Yet, amidst the chaos, there exists a simple yet powerful remedy: reading. Beyond its role as a source of entertainment, books have the remarkable ability to enhance our mental well-being and promote emotional resilience. Let's explore how reading can positively impact mental health.
                    </p>
                    <Avatar 
                      img={proPic} 
                      alt="avatar of Jese" 
                      rounded className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Maya Winterbourne</h5>
                    <p className='text-base'>Script Writer</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                

                {/* text */}
                <div className='mt-7'>
                <h2 className='font-bold'>The Magic of Reading: How Books Shape Children's Minds</h2>
                    <p className='mb-5'>
                    From the moment a child opens their first picture book, they embark on a journey of discovery and imagination that will shape their future in profound ways. Reading plays a pivotal role in children's cognitive, emotional, and social development, laying the foundation for lifelong learning and creativity. Let's explore how books enrich children's lives and brighten their future.
                    </p>
                    <Avatar 
                      img={proPic} 
                      alt="avatar of Jese" 
                      rounded className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Elliot Sterling</h5>
                    <p className='text-base'>Businessman</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                

                {/* text */}
                <div className='mt-7'>
                <h2 className='font-bold'>Finding Serenity Through Reading: The Therapeutic Benefits of Relaxing with a Book</h2>
                    <p className='mb-5'>
                    In our fast-paced world filled with constant stimulation and digital distractions, finding moments of tranquility and inner peace is essential for our well-being. One of the simplest and most effective ways to unwind and reconnect with ourselves is through the gentle embrace of a good book. Let's explore how reading can serve as a powerful tool for relaxation, mindfulness, and rejuvenation.
                    </p>
                    <Avatar 
                      img={proPic} 
                      alt="avatar of Jese" 
                      rounded className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Serena Montague</h5>
                    <p className='text-base'>CEO, ABC Company</p>
                </div>
            </div>
        </SwiperSlide>
        
        
        
      </Swiper>
        </div>
    </div>
    </div>

  )
}

export default Blog