import React, { useState } from "react";

const Form = () => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const handelChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log (values)
  };
  const handelReset = (e) => {
    e.preventDefault();
    setValues({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log("submit values ");
    console.log("values", values);
  };
  // console.log("name", Password)
  return (
    <div className="container">
      <form onSubmit={handelSubmit}>
        <br />
        <div className="row ">
          <div className="col">
            {/* Now every you work withe the form, that stores the values in
            the single state like values in this example.

            must use the htmlfor for lable  and name (they must be same)  for input field*/}
            <label htmlFor="firstname">FirstName</label>
          </div>
          <div className="col">
            {/* must use the htmlfor for lable  and name for input field */}
            <input
              type="text"
              name="firstname"
              value={values.firstname}
              onChange={(e) => handelChange(e)}
            ></input>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <label htmlFor="lastname">LastName</label>
          </div>
          <div className="col">
            <input
              type="text"
              name="lastname"
              value={values.lastname}
              onChange={(e) => handelChange(e)}
            ></input>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <label htmlFor="email">Email</label>
          </div>
          <div className="col">
            <input
              type="text"
              name="email"
              value={values.email}
              onChange={(e) => handelChange(e)}
            ></input>
          </div>
        </div>
        <br />
        <div className="row ">
          <div className="col">
            <label htmlFor="password">Password</label>
          </div>
          <div className="col">
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={(e) => handelChange(e)}
            ></input>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <button type="submit">submit</button>
          </div>
          <div className="col">
            <button onClick={handelReset} type="button">
              reset
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Form;
