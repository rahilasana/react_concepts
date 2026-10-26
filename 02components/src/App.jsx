 import card from './components/card'
import navbar from './components/navbar';
const App = () => {
  // jsx mn variable ki value ko {} mn print krwana hota hai
  const name='sana khan'
  const age='21'
  return (
    <div>
    <div className='design'>
      <div className="card1">
        <h1>sana khan</h1>
        <p>hello i am {name}.how are you guys? </p>
        <p>i am {age} years old</p>
      </div>
       </div>
        {navbar()}
  {card()}
 

   
    </div>
  );
};

export default App;
