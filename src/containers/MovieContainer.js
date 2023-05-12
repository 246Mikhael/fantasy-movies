import { connect } from "react-redux";
import Movie from "../pages/Movie";

const mapStateToProps = (state) => {
    return ({
       state: state,
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
      addActivity: (activity) => dispatch({ type: "ADD_ACTIVITY", activity })
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Movie)