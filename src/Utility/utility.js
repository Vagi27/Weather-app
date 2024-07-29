export const farenToCelcius = (farenheit) => {
  return (((farenheit - 32) * 5) / 9).toFixed(1);
};

export const getTodayWeatherForecast = (hours) => {
  let dateNow = new Date();
  // console.log(dateNow)
  let timeNow = Math.floor(dateNow.getTime() / 1000);
  // console.log(timeNow);

  return hours.filter((hour) => {
    return hour.datetimeEpoch > timeNow;
  });
};