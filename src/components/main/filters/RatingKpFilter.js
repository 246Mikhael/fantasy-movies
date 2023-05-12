import React from "react";


function RatingKpFilter({
    ratingKpFilter,
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
            ratingKpFilter(Number(event.target.value));
            getIdSelect(event.target.value? id : 0);
            resetPage()        
        }}>
        <option value=''>КП все</option>
        <option value='8'>КП выше 8</option>
        <option value='7'>КП выше 7</option>
        <option value='6'>КП выше 6</option>
    </select>
}

export default RatingKpFilter;