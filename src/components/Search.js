// import { useState } from "react";

const Search = ({ location, setLocation }) => {
  return (
    <div className="border border-black rounded-md p-2">
      <input
        className="w-4/5 outline-none"
        placeholder="Enter Location..."
        onChange={(e) => {
          setLocation(e.target.value);
        }}
      />
    </div>
  );
};
export default Search;
