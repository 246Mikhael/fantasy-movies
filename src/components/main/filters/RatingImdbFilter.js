import React from "react";


function RatingImdbFilter({
    ratingImdbFilter,
    getIdSelect,
    id,
    idSelect,
    resetPage
    }){

    return <select 
        id={(idSelect !== 0 && idSelect !== id) ? 
            'inactive' : 
            'active'}
        className="rating-change" 
        onChange={(event)=>{
            ratingImdbFilter(Number(event.target.value));
            getIdSelect(event.target.value ? id: 0);
            resetPage();
        }}>
        <option value=''>IMDb все</option>
        <option value='8'>IMDb выше 8</option>
        <option value='7'>IMDb выше 7</option>
        <option value='6'>IMDb выше 6</option>
    </select>
}
export default RatingImdbFilter;