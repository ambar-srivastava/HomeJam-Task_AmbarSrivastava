import React from "react";
import ReviewCards from "../ReviewCards/ReviewCards";
import "./Reviews.css";

const Reviews = () => {
  return (
    <>
      <div className="containerOfReview">
        <div className="container-box-reviews">
          <div className="reviewTitle">
            <h2>Reviews</h2>
            <hr />
          </div>
          <a href="/">View all</a>
        </div>
        <ReviewCards />
      </div>
    </>
  );
};

export default Reviews;
