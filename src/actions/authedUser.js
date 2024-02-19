export const LOGIN_USER = "LOGIN_USER"
export const LOGOUT_USER = "LOGOUT_USER"

export const loginUser = (user) => {
   return {
    type: LOGIN_USER,
    user
   }
} 

export const logoutUser = () => {
    return {
        type: LOGOUT_USER
    }
} 


export const handleLogin = (id) => {
    return (dispatch, getState) => {
        
        const {users} = getState()
        const user = Object.values(users).find(u => u.id === id)

        if(user) {
            return dispatch(loginUser(user))
        }
    }
}

export const handleLogout = () => {
    return (dispatch) => {
        return dispatch(logoutUser())
    }
}