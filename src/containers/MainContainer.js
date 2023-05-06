import { connect } from "react-redux";
import Main from "../pages/Main";

const mapStateToProps = (state) => {
    return ({
        state:  state,
        currentInnerRating: state.dataOfMovies.currentInnerRating,
        currentYear: state.dataOfMovies.currentYear,
        currentCountry: state.dataOfMovies.currentCountry,
    })
}

const mapDispatchToProps = (dispatch) =>{
    return ({
        increment: ()=>dispatch({type:"PAGE_UP"}),
        decrement: ()=>dispatch({type:"PAGE_DOWN"}),
        resetPage: ()=>dispatch({type:'RESET_PAGE'}),
        countryFilter: (country)=>dispatch({type:'COUNTRY_FILTER', country: country}),
        yearFilter: (year)=>dispatch({type:'YEAR_FILTER', year: year}),
        ratingImdbFilter: (rating)=>dispatch({type:'IMDB_FILTER', rating: rating}),
        ratingKpFilter: (rating)=>dispatch({type:'KP_FILTER', rating: rating}),
        ratingInnerFilter: (rating)=>dispatch({type:'INNER_FILTER', rating: rating}),
      //  sendFiltredMovies: (arrOfIds)=> dispatch({type:'FILTRED_IDS', arrOfIds: arrOfIds}),
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)