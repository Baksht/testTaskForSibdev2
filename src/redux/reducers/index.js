import {combineReducers} from "redux";
import {searchReducer} from "./searchReducer";
import {favoriteReducer} from "./favoriteReducer";
import {authReducer} from "./authReducer";


export const rootReducer = combineReducers({
    searchPage: searchReducer,
    favoritePage: favoriteReducer,
    authPage: authReducer,
});