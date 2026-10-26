import React from 'react';
import { useNavigate } from 'react-router-dom';
const Navbar2 = () => {
      let navigate = useNavigate()
    
      const clicked1 = () => {
        navigate(-1)
      }
      const clicked2 = () => {
        navigate('/')
      }
    
      const clicked3 = () => {
        navigate(+1)
      }
  return (
    <div>
            <div>
        <button onClick={clicked1} className='bg-fuchsia-900 px-3 py-2 rounded mt-4 ml-3 active:scale-105 hover:bg-amber-400 hover:text-black'>Back</button>
        <button onClick={clicked2} className='bg-fuchsia-900 px-3 py-2 rounded mt-4 ml-3 active:scale-105 hover:bg-white hover:text-fuchsia-900'>Return to Home</button>
        <button onClick={clicked3} className='bg-fuchsia-900 px-3 py-2 rounded mt-4 ml-3 active:scale-105 hover:bg-amber-400 hover:text-black'>Next</button>
      </div>
    </div>
  );
}

export default Navbar2;
