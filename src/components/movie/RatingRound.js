import React from "react";

function RatingRound({
    num, 
    handleChange2, 
    objKey, 
    addSelectedNum, 
    selectedNum, 
    isFilling}){

    return <div 
        className="rating-round" 
        id={(()=>{
            if (num <= selectedNum && num <= 4){
                  return 'red-user-rating';
            } 
            if (num <= selectedNum && 
               (num > 4 && num <= 7)){
                  return 'orange-user-rating';
           } 
            if (num <= selectedNum && 
               (num > 7 && num <= 10)) {
                  return 'green-user-rating';
            }
            if(!isFilling.innerRating){
                  return 'red-remind-rating';
            }
        })()}
        onMouseDown={() => {
            handleChange2(objKey, num);
            addSelectedNum(num)}}>
        {num}
    </div>
}

export default RatingRound;