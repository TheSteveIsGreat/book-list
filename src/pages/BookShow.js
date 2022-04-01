import { useContext, useState } from "react"
import { useParams, useLocation } from "react-router-dom"
import { DataContext } from "../providers/DataProvider"
import BookForm from './BookForm'

const BookShow = (props) => {
  // State hook to toggle form view on/off
  const [showForm, setShowForm] = useState (false)
  const params = useParams()
  const location = useLocation()
  const data = useContext (DataContext)

  const renderBook = () => {
    return (
      <div className="border">

        <img src={location.state.image} />
        <h3>{location.state.title}</h3>
        <p>Author: {location.state.author}</p>
        <p>ID: {params.id}</p>
      </div>
    )
  }

  return (
    <div>
      <button onClick={()=> setShowForm(!showForm)}>{showForm ? 'Cancel' : 'Edit Book'}</button>
      {showForm ? <BookForm {...props} setShowForm={setShowForm}/> : renderBook()}
    </div>
  )
  

  
}

export default BookShow