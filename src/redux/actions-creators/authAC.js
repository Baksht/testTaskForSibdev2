import {LOGIN, LOGOUT, SET_AUTHORIZATION, SET_AUTHORIZATION_ERROR} from "../reducers/authReducer";
import {sign} from "jsonwebtoken";


export const authVerification = () => {
    const tokenDataJSON = localStorage.getItem("token");
    if (tokenDataJSON !== null) {
        const tokenData = JSON.parse(tokenDataJSON)
        const currentUserId = tokenData.userId;
        const usersData = require("../../users.json");
        const usersArray = usersData.users;
        const foundIndex = usersArray.findIndex(user => String(user.id) === String(currentUserId));
        const currentUser = usersArray[foundIndex];
        return {type: LOGIN, login: currentUser.login, currentUserId: currentUser.id}
    } else {
        return {type: SET_AUTHORIZATION}
    }
}

export const login = (login, password) => {
    const usersData = require("../../users.json");
    const usersArray = usersData.users;
    const foundIndex = usersArray.findIndex(user => String(user.login) === String(login));

    if (foundIndex !== -1) {
        const currentUser = usersArray[foundIndex];
        if (String(currentUser.password) === String(password)) {
            const token = sign({id: currentUser.id}, "sibdev");
            const tokenDataJSON = JSON.stringify({"token": token, userId: currentUser.id});
            localStorage.setItem("token", tokenDataJSON);
            return {type: LOGIN, login: currentUser.login, currentUserId: currentUser.id}
        } else {
            return {type: SET_AUTHORIZATION_ERROR}
        }
    } else {
        return {type: SET_AUTHORIZATION_ERROR}
    }
};

export const logout = () => {
    localStorage.removeItem("token");
    return {type: LOGOUT}
};