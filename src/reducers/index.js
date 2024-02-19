import {combineReducers} from "@reduxjs/toolkit"
import authedUser from "./authedUser"
import users from "./users"
import questions from "./questions"

export default combineReducers({
    authedUser,
    users,
    questions,
})