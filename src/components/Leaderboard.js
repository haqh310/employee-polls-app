import {connect} from "react-redux";
import { image } from "../utils/image";

const Leaderboard = ({users}) => {
    return (
        <div className="container py-4 mx-4">
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">User</th>
                    <th scope="col">Answered</th>
                    <th scope="col">Created</th>
                </tr>
            </thead>
            <tbody>
                {Object.values(users).map(user => 
                    <tr key={user.name}>
                        <td>
                            <img src={image(user.avatarURL)} alt={user.name} className="mg-fluid mx-2" style={{width: "40px", height:"40px"}}/>
                            <span>{user.name}</span>
                        </td>
                        <td>{user.answers ? Object.values(user.answers).length : 0}</td>
                        <td>{user.questions ? user.questions.length : 0}</td>
                    </tr>      
                )}
            </tbody>
        </table>
    </div>
    )
}

const mapStateToProps = ({users}) => ({
    users: users
  })

export default connect(mapStateToProps)(Leaderboard)