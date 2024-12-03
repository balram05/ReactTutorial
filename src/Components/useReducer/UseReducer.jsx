import React, { useReducer } from "react";

const UseReducer = () => {
  // the reduce takes two values ***one is state ***second one is action

  const reducer = (state, action) => {
    console.log("state", state);
    console.log("action", action);
    if (action.type === "Increment") {
      // here state is reflected on the count in useReducer
      // and action is action which is performing on the dispacth method
      return state + 1;
    }
    if (action.type === "Decrement") {
      return state - 1;
    }
  };
  // ***count is the state variable
  // ***dispatch is use to send the action to the reducer 
  //    which in turn update the state based on the action type
  //***reduces function takes two   parameter (or) argument
  //   one tis the current state and action, return new state
  //*** 0 is the initially value
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h4>{count}</h4>
          {/* here the dispacth will call the reducer method */}
          <button onClick={() => dispatch({ type: "Increment" })}>
            Increment
          </button>
          <button onClick={() => dispatch({ type: "Decrement" })}>
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
