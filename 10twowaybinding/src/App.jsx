import React from "react";
import { useState } from "react";
const App = () => {
  // TWO way binding
  //two-way-binding means jb ap khud ni kuch krty blky "react" se bolty hain krny k liye specially input ko manage krny k liye, usy kehty hain "two-way-binding".
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    email: "",
    qualification: "",
    phone: "",
    date: "",
  });
  function submitted(e) {
    e.preventDefault(); //"it is used to prevent the default behavior of form submitted "
    console.log("form submitted by",formData.name);
    // console.log(`Form submitted by: ${formData.name}`);
    setFormData({ //used to reload the page
      name: "",
      fatherName: "",
      email: "",
      qualification: "",
      phone: "",
      date: "",
    });
  }
  return (
    <>
      <div className="outer">
        <form //this empty tag <></> is basically called "react fragment".it is used to prevent the DOM from extra div
          className="formout"
          onSubmit={(e) => {
            submitted(e);
          }}
        >
          <input
            type="text"
            // name="name"
            placeholder="Enter Your Name?"
            value={formData.name} //value means it has a value of input when user will enter his name and title intialvalue is empty
            onChange={(e) => {
              setFormData({
                ...formData,
                name: e.target.value,
              });
            }} //onchange event runs in backend when user enters anything in input            // console.log("Typping......");
            //e.target.value means that value which user enters in input
          ></input>
          <input
            type="text"
            // name="fatherName"
            placeholder="Enter Your Father Name?"
            value={formData.fatherName}
            onChange={(e) =>
              setFormData({ ...formData, fatherName: e.target.value })
            }
          ></input>
          <input
            type="email"
            // name="email"
            placeholder="Enter Your Email?"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          ></input>
          <input
            type="text"
            // name="qualification"
            placeholder="Enter Your Qualifications?"
            value={formData.qualification}
            onChange={(e) =>
              setFormData({ ...formData, qualification: e.target.value })
            }
          ></input>
          <input
            type="number"
            // name="phone"
            placeholder="Enter Your phone number?"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          ></input>
          <input
            type="date"
            // name="date"
            placeholder="Enter your Date of Birth?"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          ></input>

          <div className="inner">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default App;
