import React, { useState, createContext, useReducer, useContext, useEffect } from 'react'


export const AuthContext = createContext()


export const initalState = { isAuth: false, user: {} }

const reducer = (state, action) => {
    switch (action.type) {
        case "Set_Logged_In":
            return { isAuth: true, user: action.payload.user }
        case "Set_Logged_Out":
            return initalState
        default:
            return state

    }
}


export default function AuthContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initalState)
    useEffect(() => {
        const token = localStorage.getItem("Token")
        const user = localStorage.getItem("user")
        // console.log(state)
        if (token === "True") {
            dispatch({ type: "Set_Logged_In", payload: { user } })
            // console.log('user', user)
            // console.log('token', token)
        }

    }, [])
    return (
        <>
            <AuthContext.Provider value={{ ...state, dispatch  }}>
                {children}
            </AuthContext.Provider>
        </>
    )
}

export const useAuthContext = () => useContext(AuthContext)