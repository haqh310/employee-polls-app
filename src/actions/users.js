export const RECEIVE_USER = "RECEIVE_USER";
export const ADD_QUESTION = "ADD_QUESTION";
export const ANSWER_QUESTION = "ANSWER_QUESTION"

export const receiveUsers = (users) => {
    return {
        type: RECEIVE_USER,
        users
    }
}

export const addQuestion = (authedUser, qid) => {
    return {
        type: ADD_QUESTION,
        authedUser,
        qid
    }
}

export const answerQuestion = (authedUser, qid, answer) => {
    return {
        type: ANSWER_QUESTION,
        authedUser,
        qid,
        answer
    }
}
