import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Blogs from './Blogs';
import Create from './Create';
import Dashboard from './Dashboard';
import Premium from './Premium';
import Register from './Register';
import Update from './Update';
import Protected from './Protected';
import './main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/create" element={<Protected Cmp = {Create} />} />
          <Route path="/dashboard" element={<Protected Cmp = {Dashboard} />} />
          <Route path="/premium" element={<Protected Cmp = {Premium} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/update" element={<Update />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
