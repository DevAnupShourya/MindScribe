// ? Local Style File
import './styles/App.css';

// ? React-Router-Dom Package
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// ? Custom Components
import Navbar from "./components/Navbar";
import About from './pages/About';
import Home from './pages/Home';
import Contact from './components/Contact';
import Footer from './pages/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Alert from './pages/Alert';
import NotFound from './pages/NotFound';

// ? Note DB ContextAPI
import {NoteContextAPI} from './context/NoteContextAPI';


// ? cokies
// import { useCookies } from 'react-cookie';

export default function App() {
  // const [cookies] = useCookies(['authToken']);
  // const authToken = cookies.authToken;
  
  // ? User ALert State
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
      <NoteContextAPI>
        <div data-theme={'aqua'} className="bg-primary">
          <Alert type={alert.type} msg={alert.msg} />
          <Navbar />
          <Routes >
            <Route exact path="/" Component={Home} />
            <Route exact path="/about" Component={About} />
            <Route exact path="/contact" element={<Contact showAlert={showAlert} />} />
            <Route exact path="/signup" element={<Signup showAlert={showAlert} />} />
            <Route exact path="/login" element={<Login showAlert={showAlert} />} />
            <Route exact path="/dashboard" element={<Dashboard showAlert={showAlert} />} />
            <Route path="*" element={<NotFound/>} />
          </Routes >
          <Footer />
        </div>
      </NoteContextAPI>
    </BrowserRouter>
  )
}