import React from "react";

const App = () => {
  //local storage is basically used to store some local data
  //when we press f12 then goto applications there will be our local data in localstorage option
  localStorage.setItem("user", "Rahila Sana khan"); //setItem is basically used to set data in local storage in "key value" pairs
  localStorage.setItem("age", 22); //getitem method is used to get data
  localStorage.setItem("profession" ,"developer");
  const data = localStorage.getItem("user");
  //  console.log(data)
  //  localStorage.removeItem('user') //remove is used to remove  key value
  // localStorage.clear()//it is used to clear evrthing from localstorage

  const user = {
    name: "Rshila Sana",
    age: "22",
    profession: "developer",
  };
  console.log(user);
  return (
    <div>
      <h1 className="font-bold">Concept of LocalStorage</h1>
      <p className="m-6 font-bold text-6xl">
        There are basically just 4 methods which are used in Localstorage
        <ul style={{ listStyleType: "disc" }}>
          <li className="font-semibold text-5xl mt-6">localStorage.setItem()</li>
          <li className="font-semibold text-5xl">localStorage.getItem()</li>
          <li className="font-semibold text-5xl">localStorage.remove()</li>
          <li className="font-semibold text-5xl">localStorage.clear()</li>
        </ul>
      </p>

      <ul className="pl-5">
  <li className="font-semibold text-3xl">➤ Item 1</li>
  <li className="font-semibold text-3xl">➤ Item 2</li>
</ul>
    </div>
  );
};

export default App;
