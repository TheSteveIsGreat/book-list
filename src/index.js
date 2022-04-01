import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DataProvider from './providers/DataProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Books from './pages/Books';
import BookShow from './pages/BookShow';
import BookForm from './pages/BookForm';

ReactDOM.render(
  <DataProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' element={<Books />} />
          <Route path='/books/:id' element={<BookShow />} />
          <Route path='/new_book' element={<BookForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </DataProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
