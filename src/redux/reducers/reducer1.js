export const initialState = {
    activities:{}
};

export default function activitiesOfMovies (state = initialState, action){
    switch (action.type){
        case "ADD_ACTIVITY":
           
        let movieId = state.activities[action.activity.id];
        console.log(movieId)
        


        if(movieId === undefined){
            return Object.assign({}, state, {
                activities:
                {...state.activities, [action.activity.id]:
                    {movie:[{email: action.activity.email,
                      nameOfUser: action.activity.nameOfUser,
                      text: action.activity.text,
                      innerRating: action.activity.innerRating
                    }],
                    year: action.activity.year,
                    countries: action.activity.countries,
                    description: action.activity.description,
                    poster: action.activity.poster,
                    name: action.activity.name,
                    rating: action.activity.rating,
                    averageRating: action.activity.averageRating
                  }
                }
             })  
          }
         else{

         const found = movieId.movie.find(obj => {
            return obj.email === action.activity.email;
         })
          if(!found){
            return Object.assign({}, state, {
                activities:
                {...state.activities, [action.activity.id]:
                  {movie:[{email: action.activity.email,
                    nameOfUser: action.activity.nameOfUser,
                    text: action.activity.text,
                    innerRating: action.activity.innerRating,
                }].concat(movieId.movie),
                  year: action.activity.year,
                  countries: action.activity.countries,
                  description: action.activity.description,
                  poster: action.activity.poster,
                  name: action.activity.name,
                  rating: action.activity.rating,
                  averageRating: action.activity.averageRating
                 }
                }
               })
          } else{
            return state;
          }
        }  
        default:
            
        return state;

    }

}
