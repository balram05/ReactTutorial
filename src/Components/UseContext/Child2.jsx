import React, { useContext } from "react";
import { myContext } from "./Parent";

// import {memo} from "react";
// *** This is the example of "memo" in ract where the
//     child 2 in placed in the child1, when ever the child1 is update
//     unnecessary it is render the child2 component

// const Child2 = ({data}) => {

  const Child2 = () => {
  //********* step3: consume the context value
  const data = useContext(myContext);

  // console.log("calling the child2");
  return (
    <div className="">
      <div className="">
        <span>
          hello i am the child2 component in child1 i am the last child
        </span>
        {/* <p>{data}</p> */}
        <p>valu form the parent: {data}</p>
      </div>
      <div className="col"></div>
    </div>
  );
};

// export default memo(Child2);
export default Child2;
