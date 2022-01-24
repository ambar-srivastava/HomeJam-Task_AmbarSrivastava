import React from "react";
import Shows from "../Shows/Shows";
import "./UpcomingShows.css";

const UpcomingShows = () => {
  return (
    <>
      <div className="container">
        <div className="container-box">
          <div className="title">
            <h2>Upcoming Shows</h2>
            <hr />
          </div>
          <a href="#">View all</a>
        </div>
        <Shows />
      </div>
    </>
  );
};

export default UpcomingShows;
