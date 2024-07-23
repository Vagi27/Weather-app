import React from "react";
import {farenToCelcius} from "../Utility/utility"
const WeekDay = ({ day }) => {
  
  //   console.log(day);
  const condition = day?.conditions.split(",")[0];

  const dayOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][new Date(day.datetime).getDay()];

  return (
    <div className="flex flex-auto m-1 border border-black rounded-md">
      <div className="p-2 m-1 w-48 flex-auto text-start">
        <div> {dayOfWeek}</div>
        <div className="text-xs"> {condition}</div>
        {/* <div> {day?.datetime}</div> */}
      </div>
      <div className="p-2 m-1 w-24 flex-auto text-sm">
        <div>{farenToCelcius(day?.temp)}°C</div>
        <div>{day?.cloudcover}%</div>
      </div>
      <div className="p-2 m-1 w-24 flex-auto text-sm">
        <div>{day?.windspeed} km/h</div>
        <div>{day?.humidity}%</div>
      </div>
    </div>
  );
};

export default WeekDay;
