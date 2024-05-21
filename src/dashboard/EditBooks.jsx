import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";
import { useLoaderData, useParams } from 'react-router-dom'

const EditBooks = () => {

  const {id} = useParams();
  const {bookTitle,authorName,imageURL,category,bookDescription,bookPDFURL} = useLoaderData();

const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Biography",
    "Autobiography",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design",
  ]

  const [selectedBookCategory,setSelectBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
    setSelectBookCategory(event.target.value);
  };

  //handle book submission
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const updateBookObj = {
      bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL
    }

    // update book data
    fetch(`http://localhost:5000/book/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateBookObj)
  })
  .then(async res => {
    if (!res.ok) {
      // Handle different response statuses
      const error = await res.json();
      throw new Error(`Error: ${res.status} ${res.statusText}, ${error.message}`);
    }
    return res.json();
  })
  .then(data => {
    alert("Book is updated successfully!");
  })
  .catch(error => {
    console.error('Error updating book:', error);
    alert(`Failed to update the book: ${error.message}`);
  });




  }

  return (
    <div className='px-4 my-12 '>
      <h2 className='mb-8 text-3xl font-bold'>Update the book data</h2>

      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* first Row */}
      <div className='flex gap-8'>

       {/* book Name */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title"/>
        </div>
        <TextInput id="bookTitle" name='bookTitle' type="text" defaultValue={bookTitle} placeholder="Book Name" required />
      </div>

      {/* authorName */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author Name" />
        </div>
        <TextInput id="authorName" name='authorName' type="text" defaultValue={authorName} placeholder="Author Name" required />
      </div>
      </div>

      {/* second Row */}
      <div className='flex gap-8'>

       {/* Image Url */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Book Image URL" />
        </div>
        <TextInput id="imageURL" name='imageURL' type="text" defaultValue={imageURL} placeholder="Book Image URL" required />
      </div>

      {/* Category */}
      <div className='lg:w-1/2'>
      <div className="mb-2 block">
          <Label htmlFor="inputState" value="Book Category" />
      </div>

      <select id="inputState" name='categoryName' className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
        {
          bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
        }
      </select>
      </div>



      </div>

      {/* Book Description */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description" />
        </div>
        <Textarea id="bookDescription" name='bookDescription' defaultValue = {bookDescription} placeholder="Write your book description..." required rows={6} className='w-full'/>
        </div>

      {/* book pdf link */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPDFURL" value="Book PDF URL" />
        </div>
        <TextInput id="bookPDFURL" name='bookPDFURL' type="text" defaultValue = {bookPDFURL} placeholder="book pdf url" required />
      </div>

      <Button type="submit" className='mt-5'>Update Book</Button>


    </form>
    </div>
  )
}

export default EditBooks