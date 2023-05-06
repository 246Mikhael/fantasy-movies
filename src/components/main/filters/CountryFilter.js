import React from "react";

function CountryFilter({countryFilter, currentCountry}){


    return <input value={currentCountry} className="filter" placeholder="страна"
    onChange={(event)=>{countryFilter(event.target.value)}}></input>
}

export default CountryFilter;