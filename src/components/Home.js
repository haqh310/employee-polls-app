import { useState } from "react";
import {connect} from "react-redux";

import QuestionCard  from "./QuestionCard";

const Home = ({authedUser, questions}) => {
    const [show, setShow] = useState(false)
    const [title, setTitle] = useState("New Question")

    const newQuestions = Object.values(questions).filter(q => !q.optionOne.votes.includes(authedUser.id) && !q.optionTwo.votes.includes(authedUser.id))
    const answeredQuestions = Object.values(questions).filter(q => q.optionOne.votes.includes(authedUser.id) || q.optionTwo.votes.includes(authedUser.id))

    const handleChecked = () => {
        const newTitle = show ?  "New Question" : "Answered Question"
        setShow(!show)
        setTitle(newTitle)
    }
    
    return (
        <div className="container">
            <div className="form-check form-switch d-flex justify-content-end my-2">
                <input className="form-check-input text-primary mx-2" type="checkbox" value={show} onChange={handleChecked}/>  
                <label className="form-check-label ">{title}</label> 
            </div>
            <div className="container">
                {
                    !show ?
                    Object.values(newQuestions).map(q => <QuestionCard key={q.id} question={q}/>) 
                    : Object.values(answeredQuestions).map(q => <QuestionCard key={q.id} question={q}/>) 
                }
            </div>
        </div>
    )
}

const mapStateToProps = ({authedUser, questions}) => (
    {
        authedUser,
        questions
    }
)

export default connect(mapStateToProps)(Home)