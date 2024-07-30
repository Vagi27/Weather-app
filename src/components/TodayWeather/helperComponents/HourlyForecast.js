import React from "react";
import { farenToCelcius } from "../../../Utility/utility";
import { getTodayWeatherForecast } from "../../../Utility/utility";
const HourlyForecast = ({ hours }) => {
  // console.log(hours);
  let key = 101;
  const forecastHours = getTodayWeatherForecast(hours);

  const filteredForecasts = forecastHours
    .filter((item, index) => item.datetime.substring(0, 2) % 3 === 0)
    .slice(0, 4); // Limit to 4 forecasts
  return (
    <div className="text-center ">
      <p className=" text-sm font-bold">TODAY'S FORECAST </p>
      <p className="text-xs font-semibold">
        {filteredForecasts.length}-Available Forecasts
      </p>

      <div className="flex justify-evenly mt-4 font-semibold text-xs sm:text-sm">
        {filteredForecasts.map((item, index) => {
          return (
            <div className="m-2 p-2" key={key++}>
              <p>{item.datetime.substring(0, 5)}</p>
              <p className=" italic font-normal text-xs sm:text-sm">{item.conditions}</p>
              <p>{farenToCelcius(item.temp)} °C</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HourlyForecast;
