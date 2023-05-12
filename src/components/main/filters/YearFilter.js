import React from "react";

function YearFilter({ yearFilter, currentYear }){

    return <input 
        value={currentYear} 
        className="filter" 
        placeholder="год"
        onChange={(event)=>{yearFilter(event.target.value)}}>
    </input>
}

export default YearFilter;