import React from "react";


function RatingInnerFilter({
    ratingInnerFilter, 
    getIdSelect, 
    id, 
    idSelect,
    countryFilter,
    yearFilter,
    resetPage
}){
    
    return <select 
        id={(idSelect !== 0 && idSelect !== id) ?
           'inactive' :
            'active'} 
        className="rating-change" 
        onChange={(event)=>{      
             resetPage();
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