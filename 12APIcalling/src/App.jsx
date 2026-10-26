import React from 'react';
import axios from 'axios';
import { useState } from "react";

const App = () => {
  //there aer two methods of API call 
  //1:Fetch (this is inbuilt method in javascript we find it in webAPI)
  //2:Axios(third party API)
  
    //javascript is a syncrinized but  Api calling is asyncronized 
    //mtlb k wasy to javascript ko preffer hi is liye kiya jata hai k ye smothly chlti hai
    //pr api ko call krty waqt time lgta hai api k respose mn that way promise ka issue ata hai
    //yani abhi respose ni aya hota api se or progvram agy brh jata hai is ko control kr skty hain
    //with the help of async and await k through yani hum function ko phly hi bta dyty hain
    //k ap ko wait krna pry ga response anay tk ok!  

    //{JSON} Placeholder (here we use this fake Api for tasting)


  //    async function getdata(){
  //  const respose=await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //  console.log(respose)
  // }

//   const getdata= async()=>{ //using fetch method with arrow function
//     //  const respose =await fetch('https://jsonplaceholder.typicode.com/todos')
//  const respose =await fetch('https://jsonplaceholder.typicode.com/photos')//todos k bad jo number likhy gy usi id ka data ayega agr koi number ni likhy gy to sara data ayga ok!
// //  console.log(respose)
//   // console.log(respose.json())
//   const data= await respose.json()
//   console.log(data)

//   }
const [data,setdata] = useState([])
 async function getdata(){
//  const respose= await axios.get('https://jsonplaceholder.typicode.com/todos')
//  console.log(respose.data)

//  const {data}= await axios.get('https://jsonplaceholder.typicode.com/todos')
//  console.log(data)//aisa bhi kr skty hain this is called destucturing here data is an object q k humy object ki form mn data mil rha hai
 const respose = await axios.get('https://picsum.photos/v2/list')//lorem picsum is another fake "API"
 setdata(respose.data)
console.log(respose.data)
}


  return (
    <div>

      <button className='' onClick={getdata}>Get Data</button>
      {/* <img src="https://picsum.photos/200/300?random=1"></img>
      <img src="https://picsum.photos/200/300?random=2"></img> */}
      <div>
        {data.map(function(elem,idx){//map function array pr hi apply hota hai , "tilte" jo data api se fetch kiya us mn tha ok
        return <>
        <h1>{idx} {elem.author}</h1>
        <img src={elem.url} alt="Sorry....." />
        </>
        
        
        })}
      </div>

    </div>
  );
}

export default App;
