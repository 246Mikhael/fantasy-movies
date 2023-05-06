import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import AddCommentsForm from "../components/movie/AddCommentsForm";
import Comments from "../components/movie/Comments";

export default function Movie({state, addActivity}){

    let id = Number(useParams().id);
    
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch({type:'MOVIE_PAGE', id :id})
    },[dispatch, id])
  
  const movie = state.dataOfMovies.currentMovie;
  const year = state.dataOfMovies.currentMovie.year;
  const countries = state.dataOfMovies.currentMovie.countries;
  const description = state.dataOfMovies.currentMovie.description;
  const poster = state.dataOfMovies.currentMovie.poster;
  const name = state.dataOfMovies.currentMovie.name;
  const rating = state.dataOfMovies.currentMovie.rating;
  const persons = movie.persons;
  const activities = state.activitiesOfMovies.activities;
  console.log(movie)
  

 function getActivity(obj, id){
  if(id in obj){
    return obj[id].movie
  } else {
    return undefined
  }
 }

 function getAverageRating(obj, id){
  if(id in obj){
    return obj[id].averageRating
  } else {
    return undefined
  }
 }

const activitiesOfMovie =  getActivity(activities, id);
const averageRating = getAverageRating(activities, id);

console.log(averageRating)
  
let result;
  
if(persons !== undefined){

   let directors = []; 
    persons.map(person =>{
        if(person.profession === 'режиссеры'){
           directors.push(person.name)
        } return directors;
    }) 

      let actors = [];

       persons.map(person =>{
        if(person.profession === 'актеры'){
           actors.push(person.name)
        }
        return actors;
    })

    let  url;

      url = movie.videos.trailers[0].url;
      console.log(url)

    result = <div className="current-movie">
       
      <div className="imdb-rating-movie">
          <span className="imdb-movie">IMDb</span><br/>
          <span className="rating-movie">{movie.rating.imdb}</span>
      </div>
      <div className="inner-rating-movie">
          <span className="inner-movie">SF</span><br/>
          <span className="rating-movie">{averageRating ?
           (averageRating).toFixed(1) : 0}</span>
      </div>
      <div className="kinopoisk-rating-movie">
          <span className="kinopoisk-movie">кинопоиск</span><br/>
          <span className="rating-movie">{(movie.rating.kp).toFixed(1)}</span>
      </div>
      <img src={movie.logo.url} alt="alt"className="logo-movie-page"  ></img>

      <img src={movie.poster.url} alt="alt" className="image-movie-page"  ></img>
      <div className="info-movie-page"> 
          <div className="movie-name">{movie.name}</div>
          <div className="movie-description">{movie.description}</div>
          <div className="movie-director"> режиссер: {directors.slice(0,6).join(', ')}</div>
          <div className="movie-actor"> в ролях: {actors.slice(0,6).join(', ')}</div>
          <div className="movie-year">год: {movie.year}</div>
          <div className="link-to-movie">
          Смотреть на Кинопоиске по ссылке:<span>      </span> 
          <a className="href-movie" href={`${"https://www.kinopoisk.ru/film/"}${id}${'/'}`}>{movie.name}</a> </div>
      </div> 
        <iframe className="video-frame"
          title = 'Youtube player'
          sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
          src={url}
          allowFullScreen="allowfullscreen">
        </iframe>
        
          
        <div className="div-bottom-link-to-main">
          <Link to="/" className="bottom-link-to-main">на главную</Link>
          </div>
          <AddCommentsForm 
          id={id} 
          activities={activities}
          addActivity={addActivity}
           year={year}
           countries={countries}
           description={description}
           poster={poster}
           name={name}
           rating={rating}/>
          {activitiesOfMovie ?
           <Comments 
           activitiesOfMovie={activitiesOfMovie}/>:
           ''}
      </div>
} else {
  <div>Loading...</div>
}


    return <div>
                <Link to="/" className="top-link-to-main">на главную</Link>
                {result}
            </div>
}