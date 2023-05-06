import React from "react";


function RatingInnerFilter({
    ratingInnerFilter, 
    getIdSelect, 
    id, 
    idSelect,
    countryFilter,
    yearFilter,
    resetPage
  //  filtredMoviesIds,
    //sendFiltredMovies
}){
    
    let style;

    if(idSelect !== 0 && idSelect !== id){
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
          
      resetPage()

        if(event.target.value){
          ratingInnerFilter(Number(event.target.value));
          getIdSelect(id);
        } else{
          getIdSelect(0);
          countryFilter('');
          yearFilter('');
        }
        }}>
        <option value=''>SF все</option>
        <option value='8'>SF выше 8</option>
        <option value='7'>SF выше 7</option>
        <option value='6'>SF выше 6</option>
    </select>
}
export default RatingInnerFilter;