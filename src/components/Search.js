import { useState } from "react";

const Search=()=>{
    const [location,setLocation]=useState('');
    return(
        <div>
            <input placeholder="Enter Location..."/> 
        </div>
    );
}
export default Search;