import './App.css';
import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="border">
      <h1>Book List App</h1>
      
      <hr />

      <Outlet />
    </div>
  );
}

export default App;
