//import { showLoading, hideLoading} from "react-redux-loading-bar"
import {saveQuestion, saveQuestionAnswer} from "../utils/api";
import { addQuestion, answerQuestion } from "./users";


export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const CREATE_QUESTION = "CREATE_QUESTION";
export const SAVE_ANSWER = "SAVE_ANSWER";

export const receiveQuestions = (questions) => {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export const createQuestion = (question) => {
    return {
        type: CREATE_QUESTION,
        question
    }
}

export const saveAnswer = (authedUser, qid, answer) => {
    return {
        type: SAVE_ANSWER,
        authedUser,
        qid,
        answer,
    }
}

export const handleCreateQuestion = (options) => {
    return (dispatch, getSate) => {
        const {authedUser} = getSate()
        
        return saveQuestion({
            ...options,
            author: authedUser.id
        })
        .then((question) => {
            dispatch(createQuestion(question))
            dispatch(addQuestion(authedUser, question.id))
        })
        // .then(() => dispatch(hideLoading()))
    }
}

export const handleSaveAnswer = ( qid, answer) => {
    return (dispatch, getState) => {
        const {authedUser} = getState()
        
        return saveQuestionAnswer({
            authedUser: authedUser.id, 
            qid: qid, 
            answer: answer
        })
        .then(() => {
            dispatch(saveAnswer(authedUser.id, qid, answer))
            dispatch(answerQuestion(authedUser, qid, answer))
        })

    }
}