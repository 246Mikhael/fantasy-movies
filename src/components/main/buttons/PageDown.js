import React from "react";

function PageDown({ decrement, page }){

    return <button 
        className="decrement-button"
        id={page === 1 ? 'inactive' : 'active'}
        onClick={()=>decrement()}>
            назад
    </button>
}

export default PageDown;