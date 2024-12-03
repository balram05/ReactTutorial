import React, { useState } from 'react'
import Child2 from './Child2';

//this is destruturing the props
// const Child1 = ({value}) => {

  const Child1 = () => {
  // console.log("calling form child1")
  const [count,setCount]=useState(0)
  
  // console.log(value)
  return (
    <div className='row'>
        <div className="col">
            <span>hello i am the child1 component inside parent</span>
            <br/>
            <button onClick={()=>setCount(count => count + 1)}>Button is click{count}</button>
            {/* <p>{value}</p> */}
        </div>
        <div className="col">
       {/* normal way of passing the props to component */}
            {/* <Child2 data={value} /> */}
            <Child2/>
        </div>
    </div>
  )
}

export default Child1