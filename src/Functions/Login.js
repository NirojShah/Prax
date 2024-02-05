import {
    createSlice
} from "@reduxjs/toolkit"
import {
    useNavigate
} from "react-router-dom"


const loginFunction = createSlice({
    name: "login",
    initialState: {
        value: {
            email: "",
            password: ""
        }
    },
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        }
    }
})

const logoutFunction = createSlice({
    name: "logout",
    initialState:{
        value:{
            loggedIn:true
        }
    },
    reducers: {
        logout: (state) => {
                state.value.loggedIn = false
        }
    }
})

export const {
    login
} = loginFunction.actions
export const {
    logout
} = logoutFunction.actions

export const loginSlice = loginFunction.reducer
export const logoutSlice = logoutFunction.reducer