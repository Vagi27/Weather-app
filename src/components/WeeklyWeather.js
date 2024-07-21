const WeeklyWeather = ({ WeeklyConditions }) => {
  console.log(WeeklyConditions[0].datetime);
  return (
    <>
      <div>
        weekly weather:
        <p>{WeeklyConditions[0].datetime}</p>
      </div>
    </>
  );
};
export default WeeklyWeather;
