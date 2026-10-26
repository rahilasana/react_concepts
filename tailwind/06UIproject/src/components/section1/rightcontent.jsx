import React from 'react';
import Card1 from './Card1';

const Rightcontent = (props) => {
  return (
    <div id="right" className=' h-full w-3/4 flex flex-nowrap gap-5 overflow-x-auto  p-6'>
    {/* <div className=' rounded-2xl w-2xs h-full overflow-hidden relative'>
      <img className='h-full w-full object-cover' src='https://plus.unsplash.com/premium_photo-1674055047975-70b79b84d871?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
      <div className='bg-amber-400 w-full h-full absolute top-0 left-0 p-6 flex flex-col justify-between'>
       <h2 className='h-12 w-12  bg-white flex justify-center items-center rounded-full text-2xl '>1</h2>
       <div>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate adipisci quis quasi quisquam iusto magnam ullam odio excepturi nemo rerum?</p>
       </div>
       <div>
        <button className='bg-blue-400 rounded-full h-8 w-36 mt-4 text-white'>Satisfied</button>
        <button className='bg-blue-400 rounded-full h-10 w-10 mt-4 text-white '><i class="ri-arrow-right-line"></i></button>
       </div>
      </div>
    </div> */}
    {props.users.map(function(elems,idx){
     return <Card1 img={elems.img}
     intro={elems.intro}
     tag={elems.tag} id={idx+1}  tagcolor={elems.tagcolor}/>
        
    })}

    </div>
  );
}

export default Rightcontent;
