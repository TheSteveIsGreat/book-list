import { useContext, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { DataContext } from "../providers/DataProvider"

const BookForm = () => {
  const [title, setTitle] = useState ('')
  const [author, setAuthor] = useState ('')
  const navigate = useNavigate()
  const data = useContext (DataContext)
  const params = useParams()

  const handleSubmit = (e)=>{
    e.preventDefault()
    let newBook = {id: Math.random(), title, author}
    console.log(newBook)
    // have values from form, also the addUser func working what do I do
    data.addBook(newBook)
    // want to go back to users page?
    navigate('/')
}

  return (
    <>
    <h1>{params.id ? 'Edit Book' : 'New Book'}</h1>
    <form onSubmit={handleSubmit}>
      <p>Title</p>
      <input value={title} onChange={(e) => setTitle(e.target.value)}/>
      <p>Author</p>
      <input value={author} onChange={(e) => setAuthor(e.target.value)}/>
      <br/>
      <button style={{margin: '10px'}}>{params.id ? 'Submit' : 'Add'}</button>
    </form>
    </>
  )
}

export default BookForm