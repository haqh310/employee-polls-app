import {
    RECEIVE_QUESTIONS,
    CREATE_QUESTION,
    SAVE_ANSWER
} from "../actions/questions"

export const questions = (state=[] ,action) => {
    switch(action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case CREATE_QUESTION:
            return {
                ...state, 
                [action.question.id] : action.question
            }
        case SAVE_ANSWER:
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    [action.answer]: {
                      ...state[action.qid][action.answer],
                      votes: state[action.qid][action.answer].votes.concat([action.authedUser])
                    }
                }
            }
        default:
            return state
    }
}