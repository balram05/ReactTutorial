import React, { createContext,useState } from "react";
import Child1 from "./Child1";

//********* step1:create a context gobally
export const myContext = createContext();

const Parent = () => {
  //this example is to pass the data
  // const parentData = "this value for parent";
  const [name, setName] = useState("")


  console.log("parent");
  // tis the normal way of passing the data as props
  // const listArray = "apple ";
  return (
    <div className="row">
      <div className="">
        <span>hello i am the parent component</span>
        <br/>
        <input type="text" value={name} placeholder="enter you name"
         onChange={(e)=>setName(e.target.value)}></input>
      </div>
      <div className="col">
        {/* <Child1 value={listArray} /> */}

        {/********** step2:providing the context value  
         * here must use the value attribute*/}
        <myContext.Provider value={name}>
          <Child1 />
        </myContext.Provider>
      </div>
    </div>
  );
};

export default Parent;
