import React from "react";
import "./lunch.css";

const lunch = ({ restaurantdata }) => {
    const restaurants = restaurantdata.slice(0,3)
  console.log(restaurantdata);
  return (
    <div className="row">
      <div className="col">
        {restaurants.map((restaurent) => (
          <div className="lunch-mycard" key={restaurent.id}>
            <div className="lunch-imgage-div">
              <img src={restaurent.image} alt="" className="lunch-image" />
            </div>
            <div className="lunch-mycardcontent">
              <div className="d-flex justify-content-between align-items-center">
                <span>{restaurent.name}</span>
                <span className="ratings">{restaurent.ratings}</span>
              </div>
              <span>
                <p>{restaurent.area}</p>
                <p>{restaurent.city}</p>
              </span>
              <span>
                <p>
                  <span>₹{restaurent.value}for 2 (approx)</span> |{" "}
                  <span>{restaurent.cuisine.join(", ")}</span>
                </p>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default lunch;
