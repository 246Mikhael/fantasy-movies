import React, { useState} from "react";
import NameInput from "./NameInput";
import EmailInput from "./EmailInput";
import SendDataButton from "./SendDataButton";
import TextInput from "./TextInput";
import RatingRound from "./RatingRound";


function AddCommentsForm({
  id,
  activities,
  addActivity, 
  year, 
  countries,
  description,
  poster,
  name,
  rating
}){

   const initObj = {
    id: id,
    nameOfUser:"",
    email:"",
    text:"",
    innerRating:"",
    year:"",
    countries:"",
    description:"",
    name:"",
    poster:"",
    rating:"",
    averageRating:""
   }

   const[obj, setObj] = useState(initObj);

   function handleChange(objKey, event){
     setObj({...obj, ...{[objKey]: event.target.value}})
   }
   function handleChange1(objKey,objKey1,objKey2,objKey3,objKey4,objKey5,objKey6,
     data, data1, data2, data3, data4, data5, data6){
    setObj({...obj, ...{[objKey]: data},...{[objKey1]: data1},...{[objKey2]: data2},
      ...{[objKey3]: data3},...{[objKey4]: data4},...{[objKey5]: data5},...{[objKey6]: data6}})
  }
  function handleChange2(objKey, data){
    setObj({...obj, ...{[objKey]: data}})
  }

   function handleChangeDefault(){
      setObj(initObj)
   }

   const[selectedNum, setSelectedNum] = useState(0);

   function addSelectedNum(num){
     setSelectedNum(num)
   }

   const nums = [1,2,3,4,5,6,7,8,9,10];
  const res = nums.map((num, index)=>{
    return <RatingRound
     num={num} 
     key={index} 
     handleChange2={handleChange2}
      objKey={'innerRating'}
      addSelectedNum={addSelectedNum}
      selectedNum={selectedNum}/>
  })

  let activitiesOfMovie; 
  if(activities[id] !== undefined){
    activitiesOfMovie =  activities[id].movie
  }
  console.log(activitiesOfMovie)

  function calcAverageRating(arr, lastRating){
    let sum = lastRating;
    let counter = 1;
     if(arr === undefined){
       sum = lastRating;
     }else {
    arr.map(item=>{
       sum += item.innerRating;
       counter++;
       return sum;
    }) 
  } return sum / counter;
  }

  console.log(calcAverageRating(activitiesOfMovie))

 

    return <div>
      <div className="rating-round-wrap">
        {res}
      </div>
      <div className="inputs-on-movie-page">
        <NameInput 
        handleChange={handleChange} 
        value={obj.nameOfUser}
         />
        <EmailInput
         handleChange={handleChange}
          value={obj.email} 
          />
      </div>    
        <TextInput handleChange={handleChange}
         value={obj.text}
         />
       <div> 
        <SendDataButton
         addActivity={addActivity} 
         dataOfActivity={obj}
         handleChangeDefault={handleChangeDefault}
         setSelectedNum={setSelectedNum}
         handleChange1={handleChange1}
         year={year}
         countries={countries}
         description={description}
         poster={poster}
         name={name}
         rating={rating}
         activitiesOfMovie={activitiesOfMovie}
         calcAverageRating={calcAverageRating}/>
       </div>   
    </div>
}

export default AddCommentsForm;