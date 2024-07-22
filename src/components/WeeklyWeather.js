import WeekDay from "./WeekDay";

const WeeklyWeather = ({ WeeklyConditions }) => {
  console.log(WeeklyConditions[0]?.datetime);
  let key=0;
  return (
    <>
      <div className="text-center text-sm ">
        <p className="text-center text-sm font-bold">
          WEEKLY FORECAST
          </p>
        {/* <p>{WeeklyConditions[0]?.datetime}</p> */}
        {WeeklyConditions.filter((item, index) => index < 7).map(
          (forecastDay,index) => {
            return <WeekDay day={forecastDay} key={key++} />;
          }
        )}
      </div>
    </>
  );
};
export default WeeklyWeather;
