import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {handleLogout} from "../actions/authedUser";
import { image } from "../utils/image";

const Nav = ({dispatch, authedUser}) => {
    const logout = () => {
        dispatch(handleLogout())
    }

    return (
        <nav className="navbar navbar-expand-lg justify-content-between border-bottom pb-0 mb-4">
            <div className="collapse navbar-collapse col-9">
                <ul className="nav nav-tabs border-bottom-0">
                    <li key="1" className="nav-item px-2">
                        <Link to="/" className="nav-link text-dark">Home</Link>
                    </li>
                    <li key="2" className="nav-item px-2">
                        <Link to="/leaderboard" className="nav-link text-dark">Leaderboard</Link>
                    </li>
                    <li key="3" className="nav-item px-2">
                        <Link to="/add" className="nav-link text-dark">New Question</Link>
                    </li>
                </ul>
            </div>
            <div className="col-3 text-end">
                <img src={image(authedUser.avatarURL)} alt={authedUser.name} className="img-fluid py-1" style={{width: "40px", height:"40px"}}></img>
                <span className="text-medium px-2">{authedUser.name}</span>
                <button style={{cursor: "pointer"}} className="btn text-decoration-none" onClick={logout}>Logout</button>
            </div>
        </nav>
    )
}

const mapStateToProps = ({authedUser}) => ({
    authedUser: authedUser
  })
  
  export default connect(mapStateToProps)(Nav);