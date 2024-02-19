import {connect} from "react-redux";
import { useState } from "react";
import { handleLogin } from "../actions/authedUser"
import { useNavigate} from "react-router-dom";
import employee from "../images/employee.jpg";

const Login = ({dispatch, users, loggedIn}) => {
    const [id, setId] = useState("")

    const navigate = useNavigate()
    if (loggedIn) {
        const url = window.location.href.toString().split("redirectTo=")[1]
        navigate(url)
    }
    
    const handleSelect = (e) => {
        const idSelected = e.target.value
        setId(idSelected)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(handleLogin(id))
        setId("")
    }

    return (
        <div className="d-flex justify-content-center my-5"> 
            <div className="card col-4">
                <div className="card-body"> 
                    <h4 className="text-center">Employee Polls</h4>
                    <div className="text-center">
                        <img src={employee} alt="employee" className="img-fluid"/>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="d-flex justify-content-center">
                            <select id="select" data-testid="select" className="form-select my-3 w-75" value={id}  onChange={handleSelect}>
                                <option id="select-option" data-testid="select-option" value="" disabled>Select employee</option>
                                {
                                    Object.values(users).map(user => <option data-testid="select-option" key={user.id} value={user.id}>{user.name}</option>)
                                }
                            </select>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button id="btnSubmit" data-testid="btnSubmit" type="submit" className="btn btn-primary mx-5">Submit</button>
                        </div>                    
                    </form>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps  = ({users, authedUser}) => ({
    users: users,
    loggedIn: !!authedUser
})

export default connect(mapStateToProps)(Login);