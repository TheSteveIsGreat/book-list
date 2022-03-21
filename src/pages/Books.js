import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../providers/DataProvider";

const Books = () => {

  const data = useContext(DataContext)
  const navigate = useNavigate()

  return (
    <div className="border">
      <h2>Books Page</h2>
      <button onClick={()=>navigate('/new_book')}>Create New Book</button>

      {data.books.map ((b) => {
        return (
          <div className="border" key={b.id}>
            <img src={b.image} />
            <h3>{b.title}</h3>
            <h5>Author: {b.author}</h5>
            <h5>Genre: {b.genre}</h5>
            <p>{b.description}</p>
            <Link to={`/books/${u.id}`} state={u}>Show</Link>
          </div>
        )
      })}

      <br/>
      <button onClick={data.getBooks}>Get Books</button>
      <hr />
      {/* {JSON.stringify(data)} */}
    </div>
  )
}

export default Books