import React from "react";

function TextInput({
   value, 
   handleChange, 
   isFilling}){

   return <textarea 
       placeholder="комментарий*"
       className="textarea-comment"
       id={!isFilling.text ? 
           'unfilled-field' : 
           'filled-field'}
       value={value} 
       onChange={event => handleChange('text', event)}>
         <p>
            {value}
         </p>
   </textarea>
}

export default TextInput;