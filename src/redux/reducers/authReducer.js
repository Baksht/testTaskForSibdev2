export const SET_AUTHORIZATION = "SET_AUTHORIZATION";
export const LOGIN  = "LOGIN";
export const SET_AUTHORIZATION_ERROR = "SET_AUTHORIZATION_ERROR";
export const LOGOUT  = "LOGOUT";



const initialState = {
    isAuth: false,
    failedLogin: false,
    login: null,
    currentUserId: null,

}


export const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_AUTHORIZATION:
            return {
                ...state,
                isAuth: false,
            };

        case SET_AUTHORIZATION_ERROR:
            return {
                ...state,
                isAuth: false,
                failedLogin: true,
            };

        case LOGIN:
            return {
                ...state,
                isAuth: true,
                login: action.login,
                currentUserId: action.currentUserId,
                failedLogin: false
            };

        case LOGOUT:
            return {
                ...state,
                isAuth: false,
            };

        default:
            return state;
    }

};