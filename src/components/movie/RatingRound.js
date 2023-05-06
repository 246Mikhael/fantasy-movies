import React from "react";

function RatingRound({num, handleChange2, objKey, addSelectedNum, selectedNum}){

    let style;

    if(num <= selectedNum && num <= 4){
        style = {
           backgroundColor: 'red'
        }
    }

    if(num <= selectedNum && (num > 4 && num <= 7)){
        style = {
           backgroundColor: 'orange'
        }
    }
   
    if(num <= selectedNum && (num > 7 && num <= 10)){
        style = {
           backgroundColor: 'green'
        }
    }
   
    return <div className="rating-round" style={style}
            onMouseDown={()=>{handleChange2(objKey,num);
                addSelectedNum(num)}}
            >{num}</div>
}

export default RatingRound;