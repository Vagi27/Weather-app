import React from "react";

const WeekDay = ({ day }) => {
  const farenToCelcius = (farenheit) => {
    return (((farenheit - 32) * 5) / 9).toFixed(1);
  };
  //   console.log(day);
  const condition = day?.conditions.split(",")[0];

  const dayOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ][new Date(day.datetime).getDay()];

  return (
    <div className="flex flex-auto m-1 border border-black rounded-md">
      <div className="p-2 m-1 w-48 flex-auto text-start">
        <div> {dayOfWeek}</div>
        <div className="text-xs"> {condition}</div>
      </div>
      <div className="p-2 m-1 w-24 flex-auto text-sm">
        <div>{farenToCelcius(day?.temp)}°C</div>
        <div>{day?.cloudcover}%</div>
      </div>
      <div className="p-2 m-1 w-24 flex-auto text-sm">
        <div>{day?.windspeed} km/s</div>
        <div>{day?.humidity}%</div>
      </div>
    </div>
  );
};

export default WeekDay;
