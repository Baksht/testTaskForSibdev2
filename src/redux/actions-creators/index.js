import * as SearchActionCreators from "./searchAC";
import * as FavoriteActionCreators from "./favoriteAC";
import * as AuthActionCreators from "./authAC";


export const ActionCreators = {
    ...SearchActionCreators,
    ...FavoriteActionCreators,
    ...AuthActionCreators,
};