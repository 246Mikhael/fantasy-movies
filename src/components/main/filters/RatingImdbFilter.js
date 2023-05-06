import React from "react";


function RatingImdbFilter({
    ratingImdbFilter,
    getIdSelect,
    id,
    idSelect,
    resetPage
    }){

    
    let style;

    if(idSelect !== 0 && idSelect !== id ){
    style ={
        pointerEvents: 'none',
        opacity: 0.5,
    }
    if(idSelect === id){
       style = {
        opacity: 1
       } 
    }
}
   
    return <select style={style} className="rating-change" onChange={(event)=>{
    
        ratingImdbFilter(Number(event.target.value));
        getIdSelect(event.target.value? id: 0);
        resetPage();
        }}>
        <option value=''>IMDb все</option>
        <option value='8'>IMDb выше 8</option>
        <option value='7'>IMDb выше 7</option>
        <option value='6'>IMDb выше 6</option>
    </select>
}
export default RatingImdbFilter;