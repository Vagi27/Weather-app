import React from "react";
import { farenToCelcius } from "../../../Utility/utility";


const AirConditions = ({ conditions }) => {
  // console.log(conditions);
  const { feelslike, windspeed, cloudcover, humidity } = conditions;
  return (
    <div className="mb-6 basis-1/3">
      <p className="text-center text-base font-bold">AIR CONDITIONS </p>
      <div className=" mt-4 items-center font-semibold sm:text-base text-xs text-center grid grid-cols-4 gap-2 justify-evenly">
        <div className="flex flex-col  items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="#e8eaed"
          >
            <path d="M479.77-96Q400-96 344-152.16 288-208.32 288-288q0-45.07 18-84.03Q324-411 360-437v-307q0-50 35-85t85-35q50 0 85 35t35 85v307q35 26 53.5 65.5T672-288q0 79.68-56.23 135.84Q559.55-96 479.77-96ZM432-528h96v-48h-48v-48h48v-48h-48v-48h48v-24q0-20.4-13.8-34.2Q500.4-792 480-792q-20.4 0-34.2 13.8Q432-764.4 432-744v216Z" />
          </svg>
          {/* <img className=" w-4" src={temperatureIcon} alt=""></img> */}
          <p>Feels Like</p>
          <p>{farenToCelcius(feelslike)}°C</p>
        </div>
        <div className="flex flex-col  items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="#e8eaed"
          >
            <path d="M456-144q-50 0-85-35t-35-85h72q0 20 13.8 34t34.2 14q20.4 0 34.2-13.8Q504-243.6 504-264q0-20.4-13.8-34.2Q476.4-312 456-312H96v-72h360q50 0 85 35t35 85q0 50-35 85t-85 35ZM96-552v-72h540q25 0 42.5-17.5T696-684q0-25-17.5-42.5T636-744q-25 0-42.5 17.5T576-684h-72q0-55 38.5-93.5T636-816q55 0 93.5 38.5T768-684q0 55-38.5 93.5T636-552H96Zm636 312v-72q25 0 42.5-17.5T792-372q0-25-17.5-42.5T731.95-432H96v-72h636q55 0 93.5 38.5T864-372q0 55-38.5 93.5T732-240Z" />
          </svg>
          {/* <img className="w-4 " src={windIcon} alt=""></img> */}
          <p>Wind</p>
          <p>{windspeed}Km/h</p>
        </div>
        <div className="flex flex-col  items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="#e8eaed"
          >
            <path d="M240-192q-80.29 0-136.15-55.85Q48-303.71 48-384q0-76 51.5-131.5T227-576q23-86 93.5-139T480-768q107 0 185.5 68.5T744-528q70 0 119 49t49 119q0 69.61-49 118.81Q814-192 744-192H240Zm0-72h504q40.32 0 68.16-27.77 27.84-27.78 27.84-68Q840-400 812.16-428q-27.84-28-68.16-28h-72v-72q0-73-57.5-120.5T480-696q-62 0-111 36t-69 95q60 17 96 67.5T432-384h-72q0-49.71-35.2-84.86-35.2-35.14-85-35.14T155-468.8q-35 35.2-35 85t35.14 84.8q35.15 35 84.86 35Z" />
          </svg>
          {/* <img className=" w-4" src={cloudIcon} alt=""></img> */}
          <p>Clouds</p>
          <p>{cloudcover} %</p>
        </div>
        <div className="flex flex-col  items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="#e8eaed"
          >
            <path d="M576-264q20 0 34-14t14-34q0-20-14-34t-34-14q-20 0-34 14t-14 34q0 20 14 34t34 14Zm-189 0 237-237-51-51-237 237 51 51Zm-3-192q20 0 34-14t14-34q0-20-14-34t-34-14q-20 0-34 14t-14 34q0 20 14 34t34 14Zm96 360q-130 0-221-91t-91-221q0-97 74.5-205T480-864q166 150 239 257t73 199.5Q792-278 701-187T480-96Zm0-72q100 0 170-70t70-169.87Q720-476 666-557T480-769Q348-638 294-557t-54 149.13Q240-308 310-238t170 70Zm0-312Z" />
          </svg>
          {/* <img className=" w-4" src={humidityIcon} alt=""></img> */}
          <p>Humidity</p>
          <p>{humidity} %</p>
        </div>
      </div>
    </div>
  );
};

export default AirConditions;
