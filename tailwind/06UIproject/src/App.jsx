import { Section } from 'lucide-react';
import Section1 from './components/section1/section1';
import Section2 from './components/section2/section2';

const App = () => {
  const users=[
    {
      img:"https://plus.unsplash.com/premium_photo-1661378616433-bff991a9a272?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:"",
      tag:"Satisfied",
      tagcolor:"blue",

    },
    {
      img:"https://plus.unsplash.com/premium_photo-1757553358506-aaefa1a2a09c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:"",
      tag:"Underbanked",
      tagcolor:"green",
    },
    {
      img:"https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:"",
      tag:"Underserved",
      tagcolor:"gray",
    },
    {
      img:"https://images.unsplash.com/photo-1587614298171-a223667e51c2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:"",
      tag:"Satisfied",
      tagcolor:"orange",
    },

  ]
  return (
    <div>
     <Section1 users={users}/> 
     <Section2/>
    </div>
  );
}

export default App;
