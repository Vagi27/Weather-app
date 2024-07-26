import WeekDay from "./WeekDay";

const WeeklyWeather = ({ weeklyConditions }) => {
  let key=0;
  return (
    <>
      <div className="text-center text-base font-semibold ">
        <p className="text-center text-sm font-bold">
          WEEKLY FORECAST
          </p>
        {/* <p>{WeeklyConditions[0]?.datetime}</p> */}
        {weeklyConditions.filter((item, index) => index > 0 && index < 7).map(
          (forecastDay,index) => {
            return <WeekDay day={forecastDay} key={key++} />;
          }
        )}
      </div>
    </>
  );
};
export default WeeklyWeather;
