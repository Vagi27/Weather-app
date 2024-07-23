import React from "react";
import { farenToCelcius } from "../../../Utility/utility";

const AirConditions = ({conditions}) => {
  // console.log(conditions);
  const { feelslike, windspeed, cloudcover, humidity } = conditions;
  return (
    <div className="mb-6">
      <p className="text-center text-sm font-bold">Air Conditions </p>
      <div className=" mt-4 text-sm text-center grid grid-cols-4 gap-2">
        <div>
          <p>Feels Like</p>
          <p>{farenToCelcius(feelslike)}°C</p>
        </div>
        <div>
          <p>Wind</p>
          <p>{windspeed}Km/h</p>
        </div>
        <div>
          <p>Clouds</p>
          <p>{cloudcover} %</p>
        </div>
        <div>
          <p>Humidity</p>
          <p>{humidity} %</p>
        </div>
      </div>
    </div>
  );
};

export default AirConditions;
