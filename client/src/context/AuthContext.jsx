import { createContext, useEffect, useReducer } from "react"

const initialValue = {
    user: localStorage.getItem('user') !== undefined ? JSON.parse(localStorage.getItem('user')) : null,
    token: localStorage.getItem('token') || null
}

export const AuthContext = createContext(initialValue)

const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                token: null,
                loading: false,
                error: null
            }
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                token: action.token,
                loading: false,
                error: null
            }
        case "LOGIN_FAILURE":
            return {
                user: null,
                loading: false,
                error: action.payload
            }
        case "LOGOUT":
            return {
                user: null,
                token: null,
                loading: false,
                error: null
            }
        default:
            return state;
    }
}

export const AuthContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AuthReducer, initialValue);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
        localStorage.setItem("token", state.token);
    }, [state])

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                loading: state.loading,
                error: state.error
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

