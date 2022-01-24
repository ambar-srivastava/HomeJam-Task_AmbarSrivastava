import React from "react";
import NavBar from "../NavBar/NavBar";
import Reviews from "../Reviews/Reviews";
import UpcomingShows from "../UpcomingShows/UpcomingShows";
import Updates from "../Updates/Updates";
import "./Background.css";

const Background = () => {
  return (
    <>
      <div className="upperBack">
        <div className="overlay">
          <NavBar />
          <div className="text">
            <h1>Cari Cari</h1>
            <p>
              Live from their sofa to yours. Get closer to your favorite 
              artists, and never miss out.
            </p>
          </div>
          <Updates />
        </div>
      </div>
      <div className="lowerBack">
        <UpcomingShows />
        <Reviews />
      </div>
    </>
  );
};

export default Background;
