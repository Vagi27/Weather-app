import React from "react";
import CurrentConditions from "./helperComponents/CurrentConditions";
import AirConditions from "./helperComponents/AirConditions";
import HourlyForecast from "./helperComponents/HourlyForecast";

const TodayWeather = ({ conditions, location }) => {
  return (
    <React.Fragment>
      <CurrentConditions location={location} todayConditions={conditions} />
      <AirConditions conditions={conditions} />
      <HourlyForecast hours={conditions?.hours} />
    </React.Fragment>
  );
};
export default TodayWeather;
