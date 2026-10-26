import React from "react";

const App = () => {
  function submitted(e) {
    e.preventDefault(); //"it is used to prevent the default behavior of form submitted "
    console.log("form submitted!");
  }
  return (
    
      <div className="outer">
        <form
          className="formout"
          onSubmit={(e) => {
            submitted(e);
          }}
        >
          <input type="text" placeholder="Enter Your Name?"></input>
          <input type="text" placeholder="Enter Your Father Name?"></input>
          <input type="email" placeholder="Enter Your Email?"></input>
          <input type="text" placeholder="Enter Your Qualifications?"></input>
          <input type="number" placeholder="Enter Your phone number?"></input>
          <input type="date" placeholder="Enter your Date of Birth?"></input>

          <div className="inner">
            <button>Submit</button>
          </div>
        </form>
      </div>

  );
};

export default App;
