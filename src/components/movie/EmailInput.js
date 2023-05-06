import React from "react";

function EmailInput({value, handleChange}){
   
    return <input className="input-on-movie-page2" placeholder="e-mail"
     value={value} 
        onChange={event=> handleChange('email', event)}></input>
}

export default EmailInput;