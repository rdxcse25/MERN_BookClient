import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';
import { BASE_URL } from '../../helper';

const OtherBooks = () => {
    const [books,setBooks] = useState([]);
    useEffect(() =>{
        fetch(`${BASE_URL}/all-books`)
            .then(res => res.json()) // Invoke res.json() to parse the response as JSON
            .then(data => setBooks(data.slice(4,data.length)))
            .catch(error => console.error('Error fetching books:', error));
    },[]);
  return (
    <div>
        <BookCards books={books} headline='Other Books'/>
    </div>
  )
}

export default OtherBooks