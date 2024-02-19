import {
    RECEIVE_USER,
    ADD_QUESTION,
    ANSWER_QUESTION,
} from "../actions/users"

export const users = (state = {}, action) =>{
    switch(action.type) {
        case RECEIVE_USER:
            return {
                ...state,
                ...action.users
            }
        case ADD_QUESTION:
            return {
                ...state,
                [action.authedUser.id] : {
                    ...action.authedUser,
                    questions: action.authedUser.questions.concat(action.qid)
                }
            }
        case ANSWER_QUESTION:
            return {
                ...state,
                [action.authedUser.id]: {
                    ...action.authedUser,
                    answers: {...action.authedUser.answers, [action.qid] : action.answer}
                }
            }
        default:
            return state
    }
}