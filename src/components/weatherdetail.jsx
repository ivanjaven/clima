import { useState } from "react";
import { CiTempHigh } from "react-icons/ci";
// import "./weatherdetail.scss";

const WeatherDetail = ({ imageSource, data, description }) => {
  return (
    <div className="weatherdetail">
      {/* <img className="logo" src={require("../../img/temperature.png")} />
       */}
      <div>{imageSource}</div>
      <div className="weatherdetail_description">
        <h1>{`${data}`}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default WeatherDetail;
