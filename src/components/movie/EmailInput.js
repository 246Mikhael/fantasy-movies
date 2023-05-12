import React from "react";

function EmailInput({ 
    value, 
    handleChange, 
    isFilling}){
   
    return <input 
        className="input-email-on-movie-page" 
        placeholder="e-mail*"
        id={!isFilling.email ? 
            'unfilled-field' : 
            'filled-field'}
        value={value} 
        onChange={event=> handleChange('email', event)}>
    </input>
}

export default EmailInput;