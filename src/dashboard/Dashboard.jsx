import React from 'react'
import { FaBlog } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import DynamicTextAnimation from './DynamicTextAnimation'

const Dashboard = () => {
  return (
    <div>
      {/* <Link to="/" className='text-2xl fond-bold text-blue-700 flex items-center gap-2'><FaBlog className='inline-block'/>Books</Link> */}
      <div className="flex flex-col h-screen px -4">
    <div className="text-left mt-8 md:mt-12">
        <h1 className="text-3xl md:text-4xl">This is <span className='text-blue-700'>The Book Inventory</span></h1>
        <DynamicTextAnimation/>
      </div>
      </div>

    </div>
  )
}

export default Dashboard