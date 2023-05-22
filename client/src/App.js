// ? Local Files
import './App.css';

// ? Components
import Navbar from "./components/Navbar";
import About from './components/About';
import Home from './components/Home';

// ? React-Router-Dom Package
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes >
        <Route exact path="/" Component={Home}/>
        <Route exact path="/about" Component={About} />
      </Routes >
    </BrowserRouter>
  )
}

export default App;
