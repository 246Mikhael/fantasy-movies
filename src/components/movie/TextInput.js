import React from "react";

function TextInput({value, handleChange}){

    return <textarea 
    placeholder="комментарий"
    className="textarea-comment"
    value={value} 
     onChange={event=>handleChange('text', event)}>
        <p>{value}</p>s
     </textarea>
}

export default TextInput;