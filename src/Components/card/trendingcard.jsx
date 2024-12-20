import React from "react";
import icon from "../../assets/icons/restauranticon.png";
import "./trendingcard.css";

const trendingcard = ({ restaurantdata }) => {
  const trendingrestaurant = restaurantdata.slice(0, 4);
  console.log(trendingrestaurant)
  return (
    <div className="trending">
      <div className="row">
        <div className="d-flex justify-content-between align-items-center col">
          <span className="communities">Communities</span>
          <span className="communities-seeall">
            See All
            <i className="pi pi-angle-right"></i>
          </span>
        </div>
      </div>

      <div className="row p-2">
        <div className="col d-flex gap-3">
          <div className="treding-mycard">
            {trendingrestaurant.map((restaurant) => (
            <div className="treding-mycardbody" key={restaurant.id}>
              <div className="treding-mycardcontent">
                <div className="trending-mycardcontentbody">
                  <span>{restaurant.name}</span>
                  <p className="mb-0">
                    <span>★★★★☆</span>
                    <span>{restaurant.ratings}({restaurant.ratings} Reviews)</span>
                  </p>
                  <p className="mb-0">
                    {restaurant.area}, {restaurant.city}
                  </p>
                  <p className="">
                    ₹{restaurant.value} for 2 (approx) | {restaurant.cuisine.join(", ")}
                  </p>
                </div>

                <div className="trending-icon">
                  <img src={icon} alt="resticon" className="restaurant-icon"></img>
                </div>
              </div>
              <div
                className="treding-image"
                style={{ backgroundImage: `url(${restaurant.image})` }}
              ></div>
            </div>
          ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default trendingcard;
