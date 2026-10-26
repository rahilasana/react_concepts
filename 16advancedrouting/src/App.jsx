import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import { Link, Route, Routes,  } from 'react-router-dom';
import Notfound from './components/pages/Notfound';
import Man from './components/pages/Man';
import Woman from './components/pages/Woman';
import Product from './Product';
import Kids from './components/pages/Kids';
import Courses from './components/pages/Courses';
import CourseDetail from './components/pages/CourseDetail';
import Navbar2 from './components/pages/Navbar2';


const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      {/* <Navbar></Navbar> */}
      <Navbar />
      <Navbar2/>




      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='product' element={<Product></Product>}>
          <Route path='man' element={<Man></Man>} />
          <Route path='woman' element={<Woman></Woman>} />
          <Route path='kids' element={<Kids></Kids>} />
        </Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>

        <Route path='/courses' element={<Courses></Courses>}/>
       <Route path='/courses/:id' element={<CourseDetail/>} />






      </Routes>
      <Footer></Footer>


    </div>
  );
}

export default App;
