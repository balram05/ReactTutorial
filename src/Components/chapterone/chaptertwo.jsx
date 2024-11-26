import React from "react";
import { useState, useEffect } from "react";

export default function Chaptertwo(props) {
  const initiallyValue = 0;
  // always defin the useState on the top level function
  const [message, setMessage] = useState("welcom to the chapterTwo");
  const [countValue, setCountValue] = useState(initiallyValue);
  //this is for the useEffect render example
  const [name, SetName] = useState("");

  const[Xcoordinates, setXcoordinates] = useState(0);
  const[Ycoordinates, setYcoordinates] = useState(0);

  //here we use the useEffect hook to display the count on the document title
  //*** useEffect will run for evey render of DOM
  //    if place the empty array [] as a dependency for the useEffect
  //    the useEffect will render the values for initially render only
  useEffect(() => {
    console.log("useEffect call for every render")
    // document.title = `count ${countValue}`;
    window.addEventListener('mousemove', logMouse)
  },[]);


  const logMouse =(e)=>{
    setXcoordinates(e.clientX);
    setYcoordinates(e.clientY);
  }

  const displayMesage = () => setMessage("done with the chapterTwo");

  // method (1) for upudate the count value
  const updateCount = () => {
    // console.log("button is clicked");
    // console.log(countValue);

    // here it is array funtion inside the setCountValue
    // this funtional approach is highly recommanded
    // then the cout+1 because state updata is asychronus
    setCountValue((countValue) => countValue + 1);
  };

  const increasFive = () => {
    setCountValue((prevCount) => prevCount + 5);
  };

  //this is the other way to
  // setMessage((prevMessage) => {
  //     return prevMessage === 'Welcome to ChapterTwo'
  //       ? 'Completed ChapterTwo'
  //       : 'Welcome to ChapterTwo';
  //   });
   // console.log("props in chapter two", props);
  return (
    <div>
      <h6>in the chapter two component</h6>
      <h4>
        {props.book} by {props.author}
      </h4>
      <h6>{message}</h6>
      <button onClick={displayMesage}>change content</button>
      <h4>counter for setState example</h4>
      <div>
        <h6>{countValue}</h6>

        {/* method(1) this is the way to increment the value using the function   */}
        <button onClick={updateCount}>increment count</button>

        {/* method(2) this is the way to increment the value using the function  this is 
        optimal way insted of method(1) without creating a funtion */}
        {/* <button onClick={() => setCountValue(countValue + 1)}>increment count</button> */}

        <button onClick={increasFive}>increaseFive</button>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => SetName(e.target.value)}
            placeholder="Enter the name"
          />
          <p>{name}</p>
          <div><p>X coordinates are:{Xcoordinates} and the Y coordinates are:{Ycoordinates}</p>
            </div>
        </div>
      </div>
    </div>
  );
}
