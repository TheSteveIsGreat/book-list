import { useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import BookForm from './BookForm'
const BookShow = (props) => {
  // State hook to toggle form view on/off
  const [showForm, setShowForm] = useState (false)

  const renderBook = () => {
    return (
      <div className="border">

        <img src={props.image} />
        <h3>Single Book Page</h3>
        <p>Title: {props.title}</p>
        <p>Author: {props.author}</p>
        <p>ID: {props.id}</p>
        <br />
        <button onClick={()=> props.deleteBook(props.id)}>Delete</button>
      </div>
    )
  }

  return (
    <div>
      <button onClick={()=> SetShowForm(!showForm)}>{showForm ? 'Cancel' : 'Edit Book'}</button>
      {showForm ? <BookForm {...props} setShowForm={setShowForm}/> : renderBook()}
    </div>
  )
  

  
}

export default BookShow