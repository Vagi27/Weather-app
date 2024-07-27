import React from "react";
import { farenToCelcius } from "../../../Utility/utility";
import { getTodayWeatherForecast } from "../../../Utility/utility";
const HourlyForecast = ({ hours }) => {
  // console.log(hours);
  let key=101;
  const forecastHours = getTodayWeatherForecast(hours);
  // console.log(forecastHours);
  return (
    <div className="text-center ">
      <p className=" text-sm font-bold">TODAY'S FORECAST </p>
      <p className="text-xs font-semibold">
        {(forecastHours.length / 3).toFixed(0)}-Available Forecasts
      </p>

      <div className="flex justify-evenly mt-4 font-semibold text-xs sm:text-sm">
        {forecastHours
          .filter((item, index) => item.datetime.substring(0, 2) % 3 === 0)
          .map((item) => {
            return (
              <div className="m-2 p-2" key={key++}>
                <p>{item.datetime.substring(0, 5)}</p>
                <img
                  className=" text-xs sm:text-sm"
                  src={item.icon}
                  alt={item.conditions}
                ></img>
                <p>{farenToCelcius(item.temp)} °C</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default HourlyForecast;
