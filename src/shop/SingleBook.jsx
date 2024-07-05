import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { Card } from "flowbite-react";

const SingleBook = () => {
    const {_id,bookTitle,imageURL,authorName} = useLoaderData();
  return (
    <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 px-10 py-10'>
        <Card>
            <img src={imageURL} alt="" className='h-96'/>
            <div className='flex flex-col'>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {bookTitle}
            </h5>
            <div className='flex justify-between flex-row '>
            <h6 className="text-2xl tracking-tight text-gray-600 dark:text-white">
              {authorName}
            </h6>
            <p>$10.00</p>
            </div>
          </div>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>

            <button className='bg-blue-700 font-semibold text-white py-2 rounded'>Buy Now</button>
            </Card>
      </div>
  )
}

export default SingleBook