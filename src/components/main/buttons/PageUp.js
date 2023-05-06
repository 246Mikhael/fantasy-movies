import React from "react";

function PageUp({increment, style}){
    return <button className="increment-button"
    style={style}
     onClick={()=>increment()}>вперед</button>
}

export default PageUp;