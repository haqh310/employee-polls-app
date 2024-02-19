import {connect} from "react-redux";
import { Navigate } from "react-router-dom";

const Private = ({children, loggedIn}) => {
    const url = window.location.href.toString().split(window.location.host)[1]
    return loggedIn ? children : <Navigate to={"/login?redirectTo=" + url}/> 
}

const mapStateToProps = ({authedUser}) => (
    {
        loggedIn: !!authedUser
    }
)

export default connect(mapStateToProps)(Private)