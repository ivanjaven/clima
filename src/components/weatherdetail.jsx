import { CiTempHigh } from "react-icons/ci";

const WeatherDetail = ({ imageSource, data, description }) => {
  return (
    <div className="weatherdetail">
      <div>{imageSource}</div>
      <div className="weatherdetail_description">
        <h1>{`${data}`}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default WeatherDetail;
