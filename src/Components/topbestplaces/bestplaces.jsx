import React from "react";
import "./bestplaces.css";

const bestplaces = ({ restaurantdata }) => {
  console.log(restaurantdata);
  const bestrestaurants = restaurantdata.slice(0, 3);

  return (
    <div className="row">
      <div className="d-flex flex-direction-column col-lg-4 best-places gap-1">
        {bestrestaurants.map((restaurant) => (
          <>
            <div className="image-div" key={restaurant.id}>
              <img src={restaurant.image} alt="" className="bestplces-image" />
            </div>
            <div className="restaurant-content">
              <span className="restaurant-name">{restaurant.name}</span>
              <p className="mb-0">
                <span>★★★★☆</span>
                <span>{restaurant.ratings}(260 Reviews)</span>
              </p>
              <p className="mb-0">
                {restaurant.area}, {restaurant.city}
              </p>
              <p className="">
                ₹{restaurant.value}for 2 (approx) |{" "}
                {restaurant.cuisine.join(", ")}
              </p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default bestplaces;
