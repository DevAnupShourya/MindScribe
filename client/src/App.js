// ? Local Files
import './App.css';

// ? Components
import Navbar from "./components/partials/Navbar";
import About from './components/About';
import Home from './components/partials/Home';
import Contact from './components/Contact';

// ? React-Router-Dom Package
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/partials/Footer';
import NoteState from './context/notes/NoteState';
import Login from './components/Login';
import Signup from './components/Signup';
import Admin from './components/Admin';
import Alert from './components/partials/Alert';
import NotFound from './components/partials/NotFound';

export default function App() {
  const [alert, setAlert] = useState({ type: null, msg: null });

  function showAlert(type, msg) {
    setAlert({
      type: type,
      msg: msg
    })
    setTimeout(() => {
      setAlert({ type: null, msg: null });
    }, 4000);
  }
  return (
    <BrowserRouter>
      <NoteState>
        <div className="bg-primary">
          <Navbar />
          <Alert type={alert.type} msg={alert.msg} />
          <Routes >
            <Route exact path="/" Component={Home} />
            <Route exact path="/about" Component={About} />
            <Route exact path="/contact" element={<Contact showAlert={showAlert} />} />
            <Route exact path="/signup" element={<Signup showAlert={showAlert} />} />
            <Route exact path="/login" element={<Login showAlert={showAlert} />} />
            <Route exact path="/admin" element={<Admin showAlert={showAlert} />} />
            <Route path="*" element={<NotFound/>} />
          </Routes >
          <Footer />
        </div>
      </NoteState>
    </BrowserRouter>
  )
}
