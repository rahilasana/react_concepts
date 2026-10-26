// import React, { useState } from "react";

// const App = () => {
//  const [num, setnum] = useState(0);
//  function increasenum(){
//     setnum(num+1);
//  }
//  function decreasenum(){
//    setnum(num-1);
//  }
//  function jumpnumby5(){
//    setnum(num+5);
//  }

//   return (
//     <div className='outer'>
//       <div className='border'>
//          <h1 id='counter'>{num}</h1>
//       </div>
//     <div>
//          <button onClick={increasenum}>increase</button>
//           <button onClick={decreasenum}>decrease</button>
//           <div id="lastbtn">
//                <button onClick={jumpnumby5}>jump by 5</button>
//           </div>

//
//     </div>

//        </div>

//   );
// }

// export default App;

// import React, { useState } from "react";

// const App = () => {
//   const [num, setnum] = useState(0); // this will map to letters

//   // Convert number to uppercase alphabet
//   const alphabet = String.fromCharCode(65 + num);

//   return (
//     <div className="outer">
//       <div className="border">
//         <h1 id="counter">{alphabet}</h1>
//       </div>
//       <div>
//         <button onClick={() => setnum(num + 1)}>Next Letter</button>
//         <button onClick={() => setnum(num - 1)}>Previous Letter</button>
//         <div id="lastbtn">
//           <button onClick={() => setnum(num + 5)}>Jump 5 Letters</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

// import { FrameIcon, HeartOff } from "lucide-react";
// import React, { useState } from "react";

// const App = () => {
// const [state, setState] = useState(0);
// const alphabet = String.fromCharCode(65 + state);
//  const [num, setnum] = useState(0);
//  function increasenum(){
//     setnum(num+1);
//     setState(state+1);
//  }
//  function decreasenum(){
//    setnum(num-1);
//    setState(state-1);
//  }
//  function jumpnumby5(){
//    setnum(num+5);
//    setState(state+5);
//  }

//   return (
//     <div className='outer'>
//       <div className='border'>
//          <h1 id='counter'>{num}{alphabet}</h1>
//       </div>
//     <div>
//          <button onClick={increasenum} >increase</button>
//           <button onClick={decreasenum}>decrease</button>
//           <div id="lastbtn">
//                <button onClick={jumpnumby5}>jump by 5</button>
//           </div>

//     </div>

//        </div>

//   );
// }

// export default App;

// import React, { useState } from "react";
// // agr ye opr wali line na ho to usestate work ni krta ,ye line "usestate" likh kr enter press krny se ati hai"

// const App = () => {
//   const [num, setnum] = useState({ user: "sana", age: 20, program: "Bscs" });
//   //  "from deconstructure we can change object values"
//   function changenum() {
//     const newnum = { ...num }; //here we created a new object called deconstructure
//     newnum.user = "rahila";
//     newnum.age = 23;
//     newnum.program = "Bs_cyberSecurity";
//     setnum(newnum);
//   }

//   return (
//     <div className="outer">
//       <div className="border">
//         <h2>Introduction</h2>
//         <h1>
//           name: {num.user}
//           <div>age: {num.age}</div>
//           program: {num.program}
//         </h1>
//       </div>
//        <button onClick={changenum}>click</button>
//     </div>
//   );
// };

// export default App;


import React, { useState } from 'react';

function App() {
  const [first, setfirst] = useState([1,2,3,4,5]) //shortcut of usestate is ="useStatesnippet"
  function change(){
  const newfirst=[...first];  //here newfirst is our new array and has the values of previous  array
    // newfirst[3]=88;   

    setfirst([22,44,66,24,77,84])
    console.log(newfirst);
  }
  function pushvalue(){
     const newfirst=[...first];
    //  newfirst.push([22,44,55,66,77,88])
      newfirst.push(77)
    setfirst(newfirst)
    console.log(newfirst);
  }
  function popvalue(){
     const newfirst=[...first];
     newfirst.pop() 
      setfirst(newfirst)
    console.log(newfirst);
  }
  return (
    <div className='outer'>
     
     <div className='border'>
      <h1>{first}</h1> 
      <button onClick={change}>change</button>
     <div><button onClick={pushvalue}>push</button></div>
     <button onClick={popvalue}>pop</button>
     </div>
     
    </div>
  );
}

export default App;
// if we want to display changes on screen in variable,array,and in objects then we have to use "usestate" ok yahn humdirect khud kuch kam nhi kr skty humy react se bolna prta hai is liye 

