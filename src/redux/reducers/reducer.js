export const initialState = {
    page: 1,
    movies:{},
    currentMovie:{},
    currentYear:'',
    currentCountry:'',
    currentImdbRating: '',
    currentKpRating: '',
    currentInnerRating: ''
};


export default function dataOfMovies (state = initialState, action){
    switch (action.type){
        case "ADD_TO_STORE":
        
            return Object.assign({}, state,{ movies: action.data })

        case "PAGE_DOWN":
              let pageDown;
            if (state.page > 1){
               pageDown = state.page - 1;
            } else {
                pageDown = state.page;
            }
            return Object.assign ({},state,{ page: pageDown }) 
            
         case "PAGE_UP":
           
                  const pageUp = state.page + 1;
              
              return Object.assign ({},state,{ page: pageUp }) 

       case "MOVIE_ADD_TO_STORE":
            return Object.assign({}, state,{ currentMovie: action.data }) 

        case "YEAR_FILTER":
                return Object.assign({}, state,{ currentYear: action.year }) 

        case "COUNTRY_FILTER":
              return Object.assign({}, state,{ currentCountry: action.country }) 
              
        case "IMDB_FILTER":
            return Object.assign({}, state,{ currentImdbRating: action.rating }) 
            
        case "KP_FILTER":
            return Object.assign({}, state,{ currentKpRating: action.rating }) 

        case "INNER_FILTER":
            return Object.assign({}, state,{ currentInnerRating: action.rating })
            
        case "RESET_PAGE":
             return Object.assign({}, state,{ page: 1 })    
  
        default:
            
            return state;
    }
}