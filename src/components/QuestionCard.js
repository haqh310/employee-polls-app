import {connect} from "react-redux";
import { Link } from "react-router-dom";
import {formatDate} from "../utils/helpers"

const QuestionCard = ({users, question}) => {
    const author = Object.values(users).find(u => u.id === question.author)
    return (
        <Link to={"/question/" + question.id} className="text-decoration-none">
            <div className="card my-2">
                <div className="card-body">
                    <p className="card-text">Would you rather&nbsp;  
                        <span className="text-success">{ question.optionOne.text}</span>
                        &nbsp;or&nbsp;
                        <span className="text-success">{ question.optionTwo.text}</span>
                        &nbsp;?
                    </p>
                    <div className="text-muted"> 
                        <span className="fw-bold">{author.name} </span>
                        &nbsp;creates on&nbsp;
                        {formatDate(question.timestamp)}
                    </div>
                </div>
            </div>
        </Link>
    )
}

const mapStateToProps = ({users}) => {
    return {
        users
    }
  
}

export default connect(mapStateToProps)(QuestionCard)