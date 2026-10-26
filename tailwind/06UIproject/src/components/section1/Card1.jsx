import React from "react";
import Card1content from "./card1content";

const Card1 = (props) => {
  return (
    <div className=" rounded-2xl w-2xs h-full overflow-hidden relative shrink-0">
      <img
        className="h-full w-full object-cover backdrop-blur-x"
        src={props.img}/>
    <Card1content tag={props.tag} id={props.id} tagcolor={props.tagcolor}/>


    </div>
  );
};

export default Card1;
