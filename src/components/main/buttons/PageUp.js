import React from "react";

function PageUp({ 
     increment,
     lastPage,
     lengthOfArr,
     pages
    }){
    return <button 
        className="increment-button"
        id={lastPage >= lengthOfArr-1 ||
           lastPage >= pages ?  
           'inactive' : 'active'}
        onClick={()=>increment()}>
          вперед
     </button>
}

export default PageUp;