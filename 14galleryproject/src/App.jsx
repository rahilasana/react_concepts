import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
const App = () => {
  const [first, setfirst] = useState([])
  const [index, setindex] = useState(1)
  async function data(){
     const response= await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=20`)
    // console.log(response)
    setfirst(response.data)
    // console.log(response)
    
  }
  let userdata=<h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>Loading...</h1>
  if(first.length>0){
    userdata=first.map(function(elem,idx){
      return<div key={idx}>
        <a href={elem.url} target='_blank'>
                         <div className='bg-white  h-40 w-44 rounded-xl '>
        <img className='h-full   object-cover' src={elem.download_url} ></img>
        <h2>{elem.author}</h2>
      </div>
        </a>

            </div>
    })
  }
  useEffect(function () {
    data()
  },[index])
  return (
   <>

    <div className='bg-black text-white h-screen overflow-auto pt-10 '>
      {/* <button onClick={data} className='bg-gray-800 p-4 ml-5 mt-5 text-white rounded-2xl active:scale-90'>Getdata</button> */}
    {/* <img src='https://picsum.photos/id/10/2500/1667'></img> */}
    <div className='flex  flex-wrap gap-4 gap-y-6 p-4  '>
        {userdata}
    </div>
    <div className='flex justify-center items-center gap-6 mt-6 p-4'>
      <button className='bg-amber-600 p-5 rounded-2xl cursor-pointer active:scale-95 text-2xl mr-48 '
      style={{opacity:index==1? 0.6:1}}
      onClick={()=>{
        if(index>1)
     setindex(index-1)
    setfirst([])
      }}
      >prev</button>
          <h4 className='bg-white  fixed rounded-2xl px-2 py-1 mt-2 ml-2 text-black '>page no {index}</h4>

      <button className='bg-amber-600 p-5 rounded-2xl cursor-pointer active:scale-95 text-2xl '
      onClick={()=>{
      setindex(index+1)
      setfirst([])
      }}>next</button>
    </div>
    </div> 
  
   </>
  


    
  );
}

export default App;


//target mn kiya rkhny se kiya hoga
// | Value     | Kahan open hota hai |
// | --------- | ------------------- |
// | `_self`   | Same tab            |
// | `_blank`  | New tab             |
// | `_parent` | Parent frame        |
// | `_top`    | Full window         |

