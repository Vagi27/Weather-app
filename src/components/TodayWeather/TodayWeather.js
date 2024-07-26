import React from "react";
import CurrentConditions from "./helperComponents/CurrentConditions";
import AirConditions from "./helperComponents/AirConditions";
import HourlyForecast from "./helperComponents/HourlyForecast";

const TodayWeather = ({ conditions, location }) => {
  return (
    <div className="flex flex-col justify-evenly">
      <CurrentConditions location={location} todayConditions={conditions} />
      <AirConditions conditions={conditions} />
      <HourlyForecast hours={conditions?.hours} />
    </div>
  );
};
export default TodayWeather;
