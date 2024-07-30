import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { fetchCities } from "../constants";
import githubIcon from "../assets/githubIcon.png";

const Search = ({ onSearchChange }) => {
  const [searchLocation, setSearchLocation] = useState("");

  const loadOptions = async (inputValue) => {
    const citiesList = await fetchCities(inputValue);

    return {
      options: citiesList.data.map((city) => {
        // console.log(city);
        return {
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name}, ${city.countryCode}`,
        };
      }),
    };
  };
  const onChangeHandler = (enteredLocation) => {
    // console.log(enteredLocation);
    setSearchLocation(enteredLocation);
    onSearchChange(enteredLocation);
  };
  return (
    <div>
      <div className="flex justify-between mb-2">
        <h3> THE WEATHER FORECASTING</h3>

        <a
          href="https://github.com/Vagi27/Weather-app"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img className="w-6 " src={githubIcon} alt="github Icon" />
        </a>
      </div>
      <div className="text-black">
        <AsyncPaginate
          placeholder="Search for cities"
          debounceTimeout={300}
          value={searchLocation}
          onChange={onChangeHandler}
          loadOptions={loadOptions}
        />
      </div>
    </div>
  );
};
export default Search;
