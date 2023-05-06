import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import PageDown from "../components/main/buttons/PageDown";
import PageUp from "../components/main/buttons/PageUp";
import { Link } from "react-router-dom";
import CountryFilter from "../components/main/filters/CountryFilter";
import YearFilter from "../components/main/filters/YearFilter";
import RatingImdbFilter from "../components/main/filters/RatingImdbFilter";
import RatingKpFilter from "../components/main/filters/RatingKpFilter";
import RatingInnerFilter from "../components/main/filters/RatingInnerFilter";

export default function Main({
  state,
  increment, 
  decrement, 
  resetPage,
  countryFilter,
  yearFilter,
  ratingImdbFilter,
  ratingKpFilter,
  ratingInnerFilter,
  currentInnerRating,
  currentYear,
  currentCountry,

}){

    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch({type:'MOVIE_PAGE', id: undefined})
      dispatch({type:'MAIN_PAGE'})
    },[dispatch])
     
     const docs = state.dataOfMovies.movies.docs;
     const pages = state.dataOfMovies.movies.pages;
     const page = state.dataOfMovies.page;
     const movieWithActivities = state.activitiesOfMovies.activities;

     const[idSelect, setIdSelect] = useState(0);

     function getIdSelect(id){
      setIdSelect(id)
     }

     function getAverageRating(obj, id){
      if(id in obj){
        return obj[id].averageRating
      } else {
        return undefined
      }
     }

   function filterMoviesByInnerRating(obj, rating){
      
     let arr = [];
      for (let key in obj){
        if(obj[key].averageRating >= rating){
          let obj1 = obj[key];
          obj1.id = key;
          arr.push(obj1)
        }
      }
      return arr;   
     }
    
   function filterByYearMoviesWithActivities(arr, year, rating){
      
      if(year  && rating > 1){
        let arr1 = [];
        for(let elem of arr){
          if(elem.year === Number(year)){
          console.log(typeof elem.year)
          console.log(typeof year)
            arr1.push(elem)
          }
        }
        return arr1;
      } else {
        return arr;
      }
       
     }

     function filterByCountryMoviesWithActivities(arr, func, country, rating){
      if(country  && rating > 1){

        let arr1 = [];
        for(let elem of arr){
          if(func(elem.countries, country)){
            arr1.push(elem)
          }
        }
        return arr1;
      } else {
        return arr;
      }
     }

     function findCountry(arr, country){
      let flag = false;
      console.log(arr)
       for(let elem of arr){
        if(elem.name === country){
          flag =  true;
        } 
       } return flag;
     }

     function getIdsOfFilteredMovies(arr){
      let arr1 = [];
      for(let elem of arr){
        arr1.push(elem.id)
      }
      return arr1;
     }

    function calcRange(numOfPage){
      const min = (numOfPage - 1) * 12;
      const max = min + 11
      return {min: min,
              max: max}
    } 

    //console.log(calcRange(page).min)

    const filtredByInnerRating = filterMoviesByInnerRating(
      movieWithActivities, currentInnerRating);

   const filtredByYear = filterByYearMoviesWithActivities(
      filtredByInnerRating, currentYear, currentInnerRating);

   const filtredByCountry = filterByCountryMoviesWithActivities(
    filtredByYear,findCountry,currentCountry, currentInnerRating
   )

   const filtredMoviesIds = getIdsOfFilteredMovies(filtredByCountry);

     let style;
     if(page === 1){
      style = {
        pointerEvents: 'none',
        opacity: 0.5,
      } 
     }

     let style1;
     const arr = [];
     

     let result;

     if(docs !== undefined && idSelect !== 3){
     result = docs.map(doc=>{
     const averageRating = getAverageRating(movieWithActivities, doc.id);
 
        return <div key={doc.id} className="movie" >
            <div className="box-image">
              <div className="imdb-rating">
                <span className="imdb">IMDb</span><br/>
                <span className="rating">{doc.rating.imdb}</span>
            </div>
            <div className="inner-rating">
                 <span className="sf">SF</span><br/>
                 <span className="rating">{averageRating ?
                 (averageRating).toFixed(1): 0}</span>
            </div>
            <div className="kinopoisk-rating">
                <span className="kinopoisk">кинопоиск</span><br/>
                <span className="rating">{(doc.rating.kp).toFixed(1)}</span>
            </div>
            
              <img className="movie-image" 
              src={doc.poster.url}
               alt="poster"></img>
            </div>
            
            <div className="info-movie">
                 <Link className="name"
                  to={{pathname:`/film/${doc.id}`}}>
                    {doc.name}
                    </Link>
              
              <p className="year">
                {doc.year}</p>
              <p className="short-description">
                {doc.description.slice(0, 55) + '...'}</p>
            </div>
         </div>
     })
    };

    if(movieWithActivities !== undefined && idSelect === 3){
        
      for (let key in movieWithActivities){
        if(filtredMoviesIds.indexOf(movieWithActivities[key].id) > -1){
          arr.push(movieWithActivities[key])
        }
      }

      console.log(calcRange(page).max);
      console.log(arr.length)

      if(calcRange(page).max >= arr.length-1 || page >= pages){
        
        style1 = {
          pointerEvents: 'none',
          opacity: 0.5,
         }
        } else {
          style1 = {
            opacity: 1,
          }
       }

      result = arr.map((item, i)=>{
  
         if(i >= calcRange(page).min && 
            i <= calcRange(page).max 
          ){
           return <div key={i} className="movie" >
               <div className="box-image">
                 <div className="imdb-rating">
                   <span className="imdb">IMDb</span><br/>
                   <span className="rating">{item.rating.imdb}</span>
               </div>
               <div className="inner-rating">
                    <span className="sf">SF</span><br/>
                    <span className="rating">{item.averageRating}</span>
               </div>
               <div className="kinopoisk-rating">
                   <span className="kinopoisk">кинопоиск</span><br/>
                   <span className="rating">{(item.rating.kp).toFixed(1)}</span>
               </div>
               
                 <img className="movie-image" 
                 src={item.poster.url}
                  alt="poster"></img>
               </div>
               
               <div className="info-movie">
                    <Link className="name"
                     to={{pathname:`/film/${item.id}`}}>
                       {item.name}
                       </Link>
                 
                 <p className="year">
                   {item.year}</p>
                 <p className="short-description">
                   {item.description.slice(0, 55) + '...'}</p>
               </div>
            </div>
         } else return undefined
        })
    }

    return(
        <div className="main">
          <div className="menu">
          <CountryFilter 
             countryFilter={countryFilter}
             currentCountry={state.dataOfMovies.currentCountry}/>
           <YearFilter
             yearFilter={yearFilter}
             currentYear={state.dataOfMovies.currentYear}/>
           <RatingImdbFilter 
           resetPage={resetPage}
            ratingImdbFilter={ratingImdbFilter} 
            getIdSelect={getIdSelect}
            idSelect={idSelect}
            id={1}/>
           <RatingKpFilter
             ratingKpFilter={ratingKpFilter} 
             getIdSelect={getIdSelect}
             idSelect={idSelect}
             id={2}
             resetPage={resetPage}/>
            <RatingInnerFilter
             ratingInnerFilter={ratingInnerFilter}
             countryFilter={countryFilter}
             yearFilter={yearFilter}
             getIdSelect={getIdSelect}
             idSelect={idSelect}
             id={3}
             resetPage={resetPage}
             /> 
          </div>
            <div id="movies">{result}</div>
            <div className="pagination-buttons">
                 <PageDown decrement={decrement} style={style}/>
                 <PageUp increment={increment} style={style1}/>
            </div>
        </div>
    )
}

