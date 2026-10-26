import React from 'react';

const Card1content = (props) => {
  return (
        <div className=" w-full h-full absolute top-0 left-0 p-6 flex flex-col justify-between">
        <h2 className="h-12 w-12  bg-white flex justify-center items-center rounded-full text-2xl ">
          {props.id}
        </h2>
        <div className="font-bold text-white">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            adipisci quis quasi quisquam iusto magnam ullam odio excepturi nemo
            rerum?
          </p>
        </div>
        <div>
          <button style={{backgroundColor:props.tagcolor}}  className=" rounded-full h-8 w-36 mt-4 text-white">{props.tag}</button>
          <button style={{backgroundColor:props.tagcolor}}  className="rounded-full h-10 w-10 mt-4 text-white ">
            <i class="ri-arrow-right-line "></i>
          </button>
        </div>
      </div>
  );
}

export default Card1content;
