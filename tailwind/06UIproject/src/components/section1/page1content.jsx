import React from 'react';
import Leftcontent from './leftcontent';
import Rightcontent from './rightcontent';

const Page1content = (props) => {
  return (
    <div className=' h-[90vh] flex gap-10 py-10 px-8 pb-10'>
      <Leftcontent />
      <Rightcontent users={props.users}/>
    </div>
  );
}

export default Page1content;
