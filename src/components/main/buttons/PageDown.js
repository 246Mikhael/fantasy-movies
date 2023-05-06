import React from "react";

function PageDown({decrement, style}){
    return <button className="decrement-button"
    style={style}
     onClick={()=>decrement()}>назад</button>
}

export default PageDown;