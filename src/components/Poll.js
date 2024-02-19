import {connect} from "react-redux";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import {handleSaveAnswer} from "../actions/questions";
import { image } from "../utils/image";

const Poll = ({dispatch, authedUser, question, author }) => {
    const navigate = useNavigate()
    
    if (question === undefined) {
        return <Navigate to="/404"/>
    }

    const opOne = question.optionOne.votes
    const opTwo = question.optionTwo.votes

    const chooseOne = opOne.includes(authedUser.id)
    const chooseTwo = opTwo.includes(authedUser.id)

    const polled = chooseOne || chooseTwo

    const handlePoll = (e) => {
        e.preventDefault()

        const answer = e.target.name
        dispatch(handleSaveAnswer(question.id, answer))

        navigate("/")
    }

    const converPercent = (a, b) => {
        return ( a /( a + b ) ).toFixed(2) * 100
    }
    
    return (
        <div className="container my-4">
            <div className="container text-center mx-3 my-2">
                <p>Poll by {author.name}</p>
                <img src={image(author.avatarURL)} alt={author.name} className="img-fluid"/>
                <p className="h5">Would you rather&nbsp;
                    <span className="text-primary">{question.optionOne.text}</span>
                    &nbsp;or&nbsp; 
                    <span className="text-info">{question.optionTwo.text}</span>
                </p>
            </div>
            <div className="d-flex justify-content-center my-4">
                <button style={{color: chooseOne ? "green" : ""}} className={"btn btn-light mx-2 px-4" } name="optionOne" disabled={polled} onClick={handlePoll}>{question.optionOne.text}</button>
                <button style={{color: chooseTwo ? "green": ""}} className={"btn btn-light mx-2 px-4"} name="optionOne" disabled={polled} onClick={handlePoll}>{question.optionTwo.text}</button>
            </div> 
            {
                polled ?
                <div className="text-center">
                    <p className="text-success my-2">You are choosen. Thanks for your opinion!</p>
                    <div className="card">
                        <div className="card-body">
                            There's {opOne.length}(takes {converPercent(opOne.length, opTwo.length)}%)
                            user prefer&nbsp; 
                            <span className="text-primary">{question.optionOne.text}</span> while the maining {opTwo.length}(takes {converPercent(opTwo.length, opOne.length)}%) 
                            prefer&nbsp; 
                            <span className="text-primary">{question.optionTwo.text}</span>
                        </div>
                    </div>
                </div>
                : ""
            }
        </div>
    )
}
const mapStateToProps = ({ questions, users, authedUser}) => {  
    try {
        const question = Object.values(questions).find(q => q.id === useParams().id)
        const author = users[question.author]
        return {
            authedUser,
            question,
            author
        }
    }
   catch (e) {
       return <Navigate to="/404"/>
   }
}

export default connect(mapStateToProps)(Poll)