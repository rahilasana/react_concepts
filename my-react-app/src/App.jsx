import React from 'react';

const App = () => {
  function btnclick(){
    alert("btn clicked")
  }
    function mouseEnter(){
    alert("mouse entered")
  }

  function cityname(value){
    console.log(value)
  }
  // const scoroll = ()=>{
  //  console.log("page is scrolling......")
  // }
  function scrol(){
  console.log("page is scrolling......")
  }

  return (
    <div>
      <button className='m-6 bg-blue-600 rounded-full px-4 py-2' onClick={btnclick}>click here</button>
      <button className='m-6  bg-blue-500 rounded-full px-4 py-2' onMouseEnter={mouseEnter}>click here</button>
      <button className='m-6  bg-blue-400 rounded-full px-4 py-2' onClick={  function btnclick(){
    alert("double clicked")
  }}>click here</button>
  <input className=' border-2 m-6 py-2 px-4 ' type='text 'placeholder='Enter Your Name'
  onChange={function changing1(){
    console.log("typing.....")
  }}></input>
  {/* if we want to disply what our user basically is typing */}
    <input className=' border-2  m-6 py-2 px-4'  type='text 'placeholder='Enter Your Name'
  onChange={function changing2(elem){
    console.log(elem.target.value);
  }}></input>

  <input className=' border-2  m-6 py-2 px-4'  placeholder='Enter your city' onChange={function changing(elem){
cityname(elem.target.value);
  }}>
  </input>
  {/* <div className='bg-green-300 size-40 m-6 ' onMouseMove={function move(elem){
    console.log(elem.clientY);
  }}></div> */}
     <div className='bg-green-300 size-40 m-6 ' onMouseMove={(elem)=>{
    console.log(elem.clientY);
  }}></div>

  <div onWheel={scrol}>
    <div className='bg-gray-600 h-96 w-100%'>nnnn</div>
    <div className='bg-cyan-500 h-96 w-100%'></div>
    <div className='bg-fuchsia-500 h-96 w-100%'></div>
  </div>

  {/* deltaY display the speed of our mousemove on y axis same with deltaX */}
  <div onWheel={function delta(elem){
// console.log("page scrolling speed at Yaxis",elem.deltaY)
if(elem>0){
  console.log("page is up scrolling")
}
else{
  console.log("page is down scrolling")

}
  }}>
    <div className='bg-amber-400 h-96 w-100%'>nnnn</div>
    <div className='bg-blue-950 h-96 w-100%'></div>
    <div className='bg-fuchsia-500 h-96 w-100%'></div>
    <div className='bg-amber-950'>sana khan</div>
  </div>


      
    </div>
  );
}

export default App;
