import React from "react";
import { useState } from "react";

function App() {
  const [heading, setHeading] = useState("");
  const [notes, setNotes] = useState("");
  const [name, setName] = useState("");
  const [task, setTask] = useState([]);

  function deletenotes(idx) {
    const copytask = [...task]; //this is another copytask
    copytask.splice(idx, 1);
    setTask(copytask);
    // console.log("deleted")
  }

  function submitted(e) {
    e.preventDefault();

    const copytask = [...task];
    copytask.push({ heading, name, notes });
    setTask(copytask);
    // console.log(task);

    // console.log("form submitted by", name);
    // console.log("thank you for submition ");
    setHeading("");
    setNotes("");
    setName("");
  }
  return (
    <div className="outer ">
      <form
        className="inner pr-4"
        onSubmit={(e) => {
          submitted(e);
        }}
      >
        <h1 className="font-bold mt-6 mb-3  ml-6 text-3xl"> Add Notes</h1>
        <input
          className="pl-3 pt-2 pb-2 text-gray-600 text-2xl"
          type="text"
          placeholder="Enter your notes Heading"
          value={heading}
          onChange={(e) => {
            setHeading(e.target.value);
          }}
        ></input>
        <input
          className="pl-3 pt-2 pb-2 text-gray-800 text-2xl"
          type="text"
          placeholder="Enter your good name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <textarea
          className="pl-3 pt-2 pb-2 text-gray-700 text-2xl"
          type="text"
          placeholder="Enter your notes here!"
          value={notes}
          onChange={(e) => {
            setNotes(e.target.value);
          }}
        ></textarea>
        <button
          id="btn1"
          className="bg-white text-black text-2xl  p-3 font-semibold mb-3 "
        >
          Add Note
        </button>
      </form>

      <div className="w-[3px] h-full bg-white"></div>
      
      <div className="lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="font-bold text-3xl ml-6">Recent Notes</h1>
        <div className=" flex flex-wrap   mt-6 h-full overflow-auto">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="notes  h-[250px]  w-[200px] relative  bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf3bUzcfjXEgpNynCGXAL2naN49al7QDepIQ&s')] bg-cover"
              >
                <div className="p-4">
                  <h3 className="leading-tight text-xl font-bold ">
                    {elem.heading}
                  </h3>
                  <div className=" leading-tight mt-3 text-2xl font-semibold">
                    {elem.name}
                  </div>
                </div>

                <textarea className="leading-tight mt-3 h-fit  ">
                  {elem.notes}
                </textarea>
                <button
                  onClick={() => {
                    deletenotes(idx);
                  }}
                  className="bg-red-500 text-white px-3 py-2 w-40  rounded-2xl ml-5 mr-5 mt-7 font-bold cursor-pointer active:scale-90 "
                >
                  Delete{" "}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
