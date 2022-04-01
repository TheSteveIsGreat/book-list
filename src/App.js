import './App.css';
import { Outlet } from 'react-router-dom'

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
