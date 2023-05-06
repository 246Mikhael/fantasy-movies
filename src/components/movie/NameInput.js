import React from "react";

function NameInput({value, handleChange}){
 
    return <input className="input-on-movie-page1" placeholder="имя"
    value={value} 
     onChange={event=> {handleChange('nameOfUser', event)}}></input>
}

export default NameInput;