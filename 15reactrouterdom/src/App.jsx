import React from 'react';
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';


const App = () => {
  return (
    <div>
      <header className='header'>
        <div><h2>Sana khan</h2></div>
        <div className='nav'>
          {/* <a href='/'> Home</a>
            <a href='/about'> About</a>
            <a href='/contact'> Contact</a>
            <a href='/product'>Product</a>  */}


          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/product'>Product</Link>


        </div>
      </header>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product' element={<Product />} />





      </Routes>
    </div>
  );
}

export default App;
