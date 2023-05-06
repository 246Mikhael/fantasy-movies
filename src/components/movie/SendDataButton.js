import React from "react";

function SendDataButton({
    addActivity,
    dataOfActivity,
    handleChangeDefault, 
    setSelectedNum,
    year, 
    countries,
    description,
    poster,
    name,
    rating,
    handleChange1,
    calcAverageRating,
    activitiesOfMovie
}){

    console.log(dataOfActivity.innerRating)

  function checkFillingForm(obj){  
        if(obj.nameOfUser === '' ||
            obj.email === '' ||
            obj.text === ''||
            obj.innerRating === ''
            ){
                return;
            } else {
                return obj;
            }
    }
    return <button className="button-send-comment" onMouseDown={()=>{
        if(checkFillingForm(dataOfActivity)){
            handleChange1('year',
            'countries',
            'description',
            'poster',
            'name',
            'rating',
            'averageRating',
             year,
             countries,
             description,
             poster,
             name,
             rating,
             calcAverageRating(activitiesOfMovie, dataOfActivity.innerRating));
        }
    }}
       onMouseUp={()=>{
        if(checkFillingForm(dataOfActivity)){
         
        addActivity(dataOfActivity);
        handleChangeDefault();
        setSelectedNum(0)
        }
    }}>добавить</button>
}

export default SendDataButton;