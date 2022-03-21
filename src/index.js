import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DataProvider from './providers/DataProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Books from './pages/Books';
import BookShow from './pages/BookShow';

ReactDOM.render(
  <DataProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/books' element={<Books />} />
          <Route path='/bookshow' element={<BookShow />} />
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
