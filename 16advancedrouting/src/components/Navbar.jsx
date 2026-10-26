import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center py-8 px-4 bg-emerald-950 text-xl font-bold '>
            <h2>SaNiaz Coding School</h2>
            <div className='flex justify-between gap-5'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/product'>Product</Link>
                <Link to='/courses'>Courses</Link>



            </div>
        </div>
    );
}

export default Navbar;
