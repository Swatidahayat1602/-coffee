import './App.css';
import React, {useEffect} from 'react'
import First from './comp/First';
import About from './comp/About'
import Contact from './comp/Contact'
import Gallery from './comp/Gallery'
import Menu from './comp/Menu'
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter,  } from 'react-router-dom';
<script src="https://cdn.tailwindcss.com"></script>
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <div className="h-full w-screen font-serif bg-gradient-to-r bg-no-repeat bg-center relative z-50 from-yellow-900 to-yellow-600">
            <div className="bg-yellow-900 h-full relative z-50 w-screen opacity-65 ">
              <div className="flex justify-center relative z-50 items-center ">
                <Link to="/"><img className="size-36 m-3" src="logg.png" alt="" /></Link>
              </div>
              <nav className="flex text-white justify-center items-center gap-10 ">
              <Link to="/">Home</Link>
              <Link to="/our_menu">Our Menu</Link>
              <Link to="/about">About</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/contact">Contact</Link>
              </nav>
            </div>
            <Routes>
              <Route path="/" index element={<First />} />
              <Route path="/about" index element={<About />} />
              <Route path="/our_menu" index element={<Menu />} />
              <Route path="/gallery" index element={<Gallery />} />
              <Route path="/contact" index element={<Contact />} />
            </Routes>
          </div></div>
      </BrowserRouter>
    </div>
  );
};

export default App;

