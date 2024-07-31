import React from "react";
import { farenToCelcius } from "../Utility/utility";

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
    <div
      className="flex  m-1  rounded-md justify-between  text-xs sm:text-sm lg:text-base  "
      style={{
        background:
          "linear-gradient(0deg, rgba(255, 255, 255, 0.05) 0%, rgba(171, 203, 222, 0.05) 100%)",
      }}
    >
      <div className="px-1 m-1 basis-1/3 text-start">
        <p> {dayOfWeek}</p>
        <p className="font-normal italic lg:text-sm"> {condition}</p>
        {/* <div> {day?.datetime}</div> */}
      </div>

      <div className="px-1 m-1  basis-1/3 text-center  ">
        <div className="flex p-1 items-center justify-center">
          <svg
            className="mr-2"
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="#e8eaed"
          >
            <path d="M479.77-96Q400-96 344-152.16 288-208.32 288-288q0-45.07 18-84.03Q324-411 360-437v-307q0-50 35-85t85-35q50 0 85 35t35 85v307q35 26 53.5 65.5T672-288q0 79.68-56.23 135.84Q559.55-96 479.77-96ZM432-528h96v-48h-48v-48h48v-48h-48v-48h48v-24q0-20.4-13.8-34.2Q500.4-792 480-792q-20.4 0-34.2 13.8Q432-764.4 432-744v216Z" />
          </svg>
          {/* <img className="w-4  mr-1 " src={temperatureIcon} alt=""></img> */}
          <p>{farenToCelcius(day?.temp)} °C</p>
        </div>
        <div className="flex px-1 items-center justify-center">
          <svg
            className="mr-2"
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="#e8eaed"
          >
            <path d="M240-192q-80.29 0-136.15-55.85Q48-303.71 48-384q0-76 51.5-131.5T227-576q23-86 93.5-139T480-768q107 0 185.5 68.5T744-528q70 0 119 49t49 119q0 69.61-49 118.81Q814-192 744-192H240Zm0-72h504q40.32 0 68.16-27.77 27.84-27.78 27.84-68Q840-400 812.16-428q-27.84-28-68.16-28h-72v-72q0-73-57.5-120.5T480-696q-62 0-111 36t-69 95q60 17 96 67.5T432-384h-72q0-49.71-35.2-84.86-35.2-35.14-85-35.14T155-468.8q-35 35.2-35 85t35.14 84.8q35.15 35 84.86 35Z" />
          </svg>
          {/* <img className="w-5 mr-1 " src={cloudIcon} alt=""></img> */}
          <p>{day?.cloudcover} % </p>
        </div>
      </div>

      <div className="px-1 m-1  basis-1/3 text-center  ">
        <div className="flex p-1 items-center justify-center">
          <svg
            className="mr-2"
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="#e8eaed"
          >
            <path d="M456-144q-50 0-85-35t-35-85h72q0 20 13.8 34t34.2 14q20.4 0 34.2-13.8Q504-243.6 504-264q0-20.4-13.8-34.2Q476.4-312 456-312H96v-72h360q50 0 85 35t35 85q0 50-35 85t-85 35ZM96-552v-72h540q25 0 42.5-17.5T696-684q0-25-17.5-42.5T636-744q-25 0-42.5 17.5T576-684h-72q0-55 38.5-93.5T636-816q55 0 93.5 38.5T768-684q0 55-38.5 93.5T636-552H96Zm636 312v-72q25 0 42.5-17.5T792-372q0-25-17.5-42.5T731.95-432H96v-72h636q55 0 93.5 38.5T864-372q0 55-38.5 93.5T732-240Z" />
          </svg>
          {/* <img className="w-4  mr-1 " src={windIcon} alt=""></img> */}
          <p>{day?.windspeed} km/h</p>
        </div>
        <div className="flex p-1 items-center justify-center">
          <svg
          className="mr-1"
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="#e8eaed"
          >
            <path d="M576-264q20 0 34-14t14-34q0-20-14-34t-34-14q-20 0-34 14t-14 34q0 20 14 34t34 14Zm-189 0 237-237-51-51-237 237 51 51Zm-3-192q20 0 34-14t14-34q0-20-14-34t-34-14q-20 0-34 14t-14 34q0 20 14 34t34 14Zm96 360q-130 0-221-91t-91-221q0-97 74.5-205T480-864q166 150 239 257t73 199.5Q792-278 701-187T480-96Zm0-72q100 0 170-70t70-169.87Q720-476 666-557T480-769Q348-638 294-557t-54 149.13Q240-308 310-238t170 70Zm0-312Z" />
          </svg>
          {/* <img className="w-4  mr-1 " src={humidityIcon} alt=""></img> */}
          <p>{day?.humidity} % </p>
        </div>
      </div>
    </div>
  );
};

export default WeekDay;
