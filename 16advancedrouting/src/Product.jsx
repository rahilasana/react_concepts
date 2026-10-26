import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Product = () => {
    return (
        <div>
            <div className='flex justify-center gap-10 py-4 '>
                <Link className='text-2xl font-semibold' to='/product/man'>Men</Link>
                <Link className='text-2xl font-semibold' to='/product/woman'>Women</Link>
                <Link className='text-2xl font-semibold' to='/product/kids'>Kids</Link>

            </div>
            {/* <h1>Product Page</h1> */}
            <Outlet />
        </div>
    );
}

export default Product;
