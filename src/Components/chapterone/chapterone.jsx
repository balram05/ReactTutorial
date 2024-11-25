import React from 'react'
// name of the component should be always captails is recommanded

//method(1)props destutureing here we use the props destutureing using the {prosnames} 
const Chapterone = ({ title, auther }) => {
  // here we can also use the other  method 
  //method(2)props destutureing here we use the props destutureing using the {prosnames} 
  // const {title,auther}= props
  //we pass the props withe the destrutures also which mean ({title,auther})
  // console.log(props)
  return (
    <div>
      {/* without props destuturing the props */}
      {/* <h5>{props.title} and {props.auther}</h5>  */}
      {/* <h6>{props.children}</h6> */}
      {/* props.children is used for the content placed in between the components
      we can see in the app.js for chapterone component   */}
      <h5>{title} and {auther}</h5>


      {/* here we use the map method to map the different content of the object  */}
    </div>

  )
}
export default Chapterone
