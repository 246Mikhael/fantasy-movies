import {put, select, takeEvery, fork} from 'redux-saga/effects';

const API_KEY = "QV9YA96-D2F46WY-N485YXW-EE917BN"; 

 async function getMovies(url){
    const resp = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            "X-API-KEY": API_KEY,
        },
    });
    const respData = await resp.json();
   return respData;
 }

export function* workerSaga1(){

  
  const store = yield select();
  const page = store.dataOfMovies.page;
  const country = store.dataOfMovies.currentCountry;
  const year = store.dataOfMovies.currentYear;
  const ratingImdb = store.dataOfMovies.currentImdbRating;
  const ratingKp = store.dataOfMovies.currentKpRating;
   
  let addCountry = '';
  let addYear = '';
  let addRatingImdb = '';
  let addRatingKp = '';

  if(country){
    addCountry = `${'&countries.name='}${country}`
  }
  if(year){
    addYear = `${'&year='}${year}`
  }
  if(ratingImdb){
    addRatingImdb = `${'&rating.imdb='}${ratingImdb}${-10}`
  }

  if(ratingKp){
    addRatingKp = `${'&rating.kp='}${ratingKp}${-10}`
  }

  const data = yield getMovies(
    `${"https://api.kinopoisk.dev/v1/movie?page="}${page}
    ${"&limit=12"}${addRatingImdb}${addRatingKp}${addYear}${"&genres.name=фантастика"}${addCountry}`);

   if(data.docs.length > 0){
     yield put({type:"ADD_TO_STORE", data});
   }
} 

export function* workerSaga2({id}){
  const data = yield getMovies(`${'https://api.kinopoisk.dev/v1/movie/'}${id}`)
  yield put({type:"MOVIE_ADD_TO_STORE", data});
}
/*
export function* workerSaga3({arrOfIds}){
 yield console.log(arrOfIds);
 let arr = [];

 for(let elem of arrOfIds){
   let data = yield getMovies(
    `${'https://api.kinopoisk.dev/v1/movie/'}${elem}`);
   arr.push({
    name: data.name,
    year: data.year,
    id: data.id,
    description: data.description,
    poster: data.poster,
    rating: data.rating
   })  
 }
 
  yield console.log(arr);
  if(arr.length > 0){
  yield put({type:"ADD_TO_STORE_FILTRED_MOVIES", ARR});
 }
}
*/
export function* watchMainPage(){
 yield takeEvery( "MAIN_PAGE", workerSaga1)
}

export function* watchMainPageUp(){
  yield takeEvery( "PAGE_UP", workerSaga1)
 }

 export function* watchMainPageDown(){
  yield takeEvery( "PAGE_DOWN", workerSaga1)
 } 

 export function* watchMoviePage(){
  yield takeEvery( "MOVIE_PAGE", workerSaga2)
 } 

 export function* watchCountryFilter(){
  yield takeEvery( "COUNTRY_FILTER", workerSaga1)
 } 

 export function* watchYearFilter(){
  yield takeEvery( "YEAR_FILTER", workerSaga1)
 } 

 export function* watchImdbRatingFilter(){
  yield takeEvery( "IMDB_FILTER", workerSaga1)
 } 

 export function* watchKpRatingFilter(){
  yield takeEvery( "KP_FILTER", workerSaga1)
 }
 /*
 export function* watchFiltredMovies(){
  yield takeEvery('FILTRED_IDS', workerSaga3 )
 }
*/
export default function* rootSaga(){
   yield fork (watchMainPage);
   yield fork (watchMainPageUp);
   yield fork (watchMainPageDown);
   yield fork (watchMoviePage);
   yield fork (watchCountryFilter);
   yield fork (watchYearFilter);
   yield fork (watchImdbRatingFilter);
   yield fork (watchKpRatingFilter);
   //yield fork (watchFiltredMovies)
}