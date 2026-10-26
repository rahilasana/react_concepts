import { useEffect } from "react";
import { useState } from "react";

const App = () => {

  // React me hooks ka order bohat important hota hai.
  // Yahan problem ye hai:

// useEffect pehle aa gaya
// useState baad me

// 👉 Jab useEffect run hota hai, us waqt count define hi nahi hota 😵
// means usestate phly ayga or useeffect bad mn


  const [num1, setnum] = useState(0);
  const [num2, setnum2] = useState(10);
  const [Message, setMessage] = useState(" ");
  useEffect(function () {
    console.log("useEffect is runnig and depend upon num1");
    setMessage("useEffect is depend upon num1")
  }, [num1]); //is empty array se just one time useEffect chl rha hai
  //[] → sirf 1 dafa run
  // [value] → jab value change ho
  // no dependency → har render par run

  // function change(){
  //   setnum(num1+1)
  //   setnum2(num2+5)
  // }

  return (
    <div className="outer">
      <p>
        {/* <h3>➤ click one time for first</h3>
        <h3>➤ click double for second</h3> */}
      </p>
      <div className="inner">
        <h1>{num1}</h1>
        <button
          // onClick={() => {
          //   setnum(num1 + 1);
          // }}
          // onDoubleClick={() => {
          //   setnum2(num2 + 10);
          // }}

          onMouseOver={() => {
            setnum(num1 + 1);
          }}
          onMouseLeave={() => {
            setnum2(num2 + 10);
          }}
        >
          click
        </button>
        <h2>{num2}</h2>
        {/* <button onClick={change}>click</button> */}
      </div>
      <div className="message">{Message}</div>
    </div>
  );
};

export default App;
