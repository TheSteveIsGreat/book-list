import axios from 'axios'
import React, { useState } from 'react'

//Create Context Here
export const DataContext = React.createContext()

const DataProvider = (props) => {
  const [books, setBooks] = useState ([])
  const [error, setError] = useState (null)

  // Function to get books list from fake API
  const getBooks = async () => {
    try {
      let res = await axios.get('https://fakerapi.it/api/v1/books?_quantity=5')
      setBooks(res.data.data)
    } catch (err) {
      setError (alert('Error occurred getting books'))
    }
  }

  // Function to add a book to the books list
  const addBook = (newBookFromForm) => {
    let newBooksList = [newBookFromForm, ...books]
    setBooks(newBooksList)
  }

  // Function to update a book on the books list
  const updateBook = (updatedBookFromForm) => {
    let updatedBookList = books.map((b) => b.id === updatedBookFromForm.id ? updatedBookFromForm : b)
    setBooks (updatedBookList)
  }

  // Function to delete a book from the books list
  const deleteBook = (idOfBookToDelete) => {
    let filteredBooks = books.filter((book) => book.id !== idOfBookToDelete)
    setBooks (filteredBooks)
  }

  // Global Data Provider object to pass to other components
  const dp = {
    books,
    error,
    getBooks,
    addBook,
    updateBook,
    deleteBook
  }

  return (
    <DataContext.Provider value={dp}>
      {props.children}
    </DataContext.Provider>
  )

}

export default DataProvider