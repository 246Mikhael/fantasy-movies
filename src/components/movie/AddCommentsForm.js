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
       nameOfUser: "",
       email: "",
       text: "",
       innerRating: "",
       year: "",
       countries: "",
       description: "",
       name: "",
       poster: "",
       rating: "",
       averageRating:""
    }

const[obj, setObj] = useState(initObj);

function handleChange(objKey, event){
    setObj({...obj, ...{[objKey]: event.target.value}})
    }
   
function handleChange1(data, data1, data2, data3, data4, data5, data6){
    setObj({...obj,...{year: data,
                       countries: data1,
                       escription: data2,
                       poster: data3,
                       name: data4, 
                       rating: data5,
                       averageRating: data6}})
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

const[isFilling, setIsFilling] = useState({
    name: true, 
    email: true, 
    text: true, 
    innerRating: true});

function addIsFilling(data1, data2, data3, data4){
    setIsFilling({
        'name': data1, 
        'email': data2, 
        'text': data3, 
        'innerRating': data4})
    }

const nums = [1,2,3,4,5,6,7,8,9,10];

const res = nums.map((num, index)=>{
    return <RatingRound
        num={num} 
        key={index} 
        handleChange2={handleChange2}
        objKey={'innerRating'}
        addSelectedNum={addSelectedNum}
        selectedNum={selectedNum}
        isFilling={isFilling}
      />
  })

let activitiesOfMovie;

if(activities[id] !== undefined){
    activitiesOfMovie = activities[id].movie;
  }

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
    } 
    return sum / counter;
}
    return <div>
              <div 
                  className="rating-round-wrap" 
                  id={!isFilling.innerRating ? 
                  'unfilled-field' : 
                  'filled-field'}>
                      {res}
              </div>
              <div className="inputs-on-movie-page">
                  <NameInput 
                      handleChange={handleChange} 
                      value={obj.nameOfUser}
                      isFilling={isFilling}
                  />
                  <EmailInput
                      handleChange={handleChange}
                      value={obj.email}
                      isFilling={isFilling} 
                  />
              </div>    
              <TextInput 
                  handleChange={handleChange}
                  value={obj.text}
                  isFilling={isFilling}
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
                      calcAverageRating={calcAverageRating}
                      addIsFilling={addIsFilling}
                      isFilling={isFilling}/>

<div className="remind-filling"
                   id={!isFilling.innerRating || 
                      !isFilling.name || 
                      !isFilling.email ||
                      !isFilling.text ? 
                      'red-remind-rating' : 
                      'white-remind-rating'}>
                         *Заполните все поля и поставьте рейтинг
              </div>
              </div> 
                
         </div>
}

export default AddCommentsForm;