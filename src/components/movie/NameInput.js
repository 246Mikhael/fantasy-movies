import React from "react";

function NameInput({
    value, 
    handleChange, 
    isFilling}){
 
    return <input 
        className="input-name-on-movie-page" 
        placeholder="имя*"
        id={!isFilling.name ? 
            'unfilled-field' : 
            'filled-field'}
        value={value} 
        onChange={event => {handleChange('nameOfUser', event)}}>  
    </input>
}

export default NameInput;