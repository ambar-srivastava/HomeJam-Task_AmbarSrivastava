import React from "react";
import "./Shows.css";
import firstCardImg from "../../Assets/card1.png";
import secondCardImg from "../../Assets/card2.png";
import thirdCardImg from "../../Assets/card3.png";
import forthCardImg from "../../Assets/card4.png";

const Shows = () => {
  return (
    <>
    <div className="cardContainer">
      <div className="cards">
        <div className="showsCard">
          <img src={firstCardImg} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">Folk</h5>
            <p className="card-text">Benny Dayal</p>
            <div className="buttons">
              <a href="#">
                More Info ➡
              </a>
              <i className="ri-coupon-3-line"></i>
            </div>
          </div>
        </div>
        <div className="showsCard">
          <img src={secondCardImg} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">Bollywood</h5>
            <p className="card-text">Vijay Yesudas</p>
            <div className="buttons">
              <a href="#">
                More Info ➡
              </a>
              <i className="ri-coupon-3-line"></i>
            </div>
          </div>
        </div>
        <div className="showsCard">
          <img src={thirdCardImg} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">Folk</h5>
            <p className="card-text">Andrea Jeremiah</p>
            <div className="buttons">
              <a href="#">
                More Info ➡
              </a>
              <i className="ri-coupon-3-line"></i>
            </div>
          </div>
        </div>
        <div className="showsCard">
          <img src={forthCardImg} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">Folk</h5>
            <p className="card-text">Shilpa Rao</p>
            <div className="buttons">
              <a href="#">
                More Info ➡
              </a>
              <i className="ri-coupon-3-line"></i>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Shows;
