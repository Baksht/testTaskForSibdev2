import {
    ADD_FAVORITE_SEARCH,
    SAVE_FAVORITE_SEARCH_FORM_CLOSE,
    SAVE_FAVORITE_SEARCH_FORM_OPEN,
    EDIT_FAVORITE_SEARCH,
    DELETE_FAVORITE_SEARCH,
    FETCH_FAVORITE_SEARCH
} from "../reducers/favoriteReducer";


export const saveFavoriteSearch = (searchData) => {
    return {type: ADD_FAVORITE_SEARCH, payload: searchData}
};

export const saveFavoriteSearchFormOpen = () => {
    return {type: SAVE_FAVORITE_SEARCH_FORM_OPEN}
};

export const saveFavoriteSearchFormClose = () => {
    return {type: SAVE_FAVORITE_SEARCH_FORM_CLOSE}
};

export const editFavoriteSearch = (searchData) => {
    return {type: EDIT_FAVORITE_SEARCH, payload: searchData}
};

export const deleteFavoriteSearch = (searchId) => {
    return {type: DELETE_FAVORITE_SEARCH, searchId: searchId}
};

export const fetchFavoriteSearch = (currentUserId) => {

    const storageName = `data${currentUserId}`;
    const storageDataJSON = localStorage.getItem(storageName);

    if (storageDataJSON !== null) {
        const storageData = JSON.parse(storageDataJSON);
        return {type: FETCH_FAVORITE_SEARCH, payload: storageData}

    } else {
        return {type: FETCH_FAVORITE_SEARCH, payload: []}
    }

};





