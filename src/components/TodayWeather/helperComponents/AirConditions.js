import React from "react";
import { farenToCelcius } from "../../../Utility/utility";

const AirConditions = ({conditions}) => {
  // console.log(conditions);
  const { feelslike, windspeed, cloudcover, humidity } = conditions;
  return (
    <div className="mb-6">
      <p className="text-center text-base font-bold">AIR CONDITIONS </p>
      <div className=" mt-4  font-semibold sm:text-base text-sm text-center grid grid-cols-4 gap-2 justify-evenly">
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
