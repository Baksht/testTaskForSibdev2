export const SAVE_FAVORITE_SEARCH_FORM_OPEN = "SAVE_FAVORITE_SEARCH_FORM_OPEN";
export const SAVE_FAVORITE_SEARCH_FORM_CLOSE = "SAVE_FAVORITE_SEARCH_FORM_CLOSE";
export const ADD_FAVORITE_SEARCH = "ADD_FAVORITE_SEARCH";
export const EDIT_FAVORITE_SEARCH = "EDIT_FAVORITE_SEARCH";
export const DELETE_FAVORITE_SEARCH = "DELETE_FAVORITE_SEARCH";
export const FETCH_FAVORITE_SEARCH = "FETCH_FAVORITE_SEARCH";



const initialState = {
    favoriteSearches: [],
    saveFavoriteSearchForm: false,
    favoriteButton: false,
}


export const favoriteReducer = (state = initialState, action) => {

    switch (action.type) {

        case FETCH_FAVORITE_SEARCH:
            return {
                ...state,
                favoriteSearches: [...action.payload],
            };

        case SAVE_FAVORITE_SEARCH_FORM_OPEN:
            return {
                ...state,
                saveFavoriteSearchForm: true,
            };

        case SAVE_FAVORITE_SEARCH_FORM_CLOSE:
            return {
                ...state,
                saveFavoriteSearchForm: false,
            };

        case ADD_FAVORITE_SEARCH:
            return {
                ...state,
                favoriteSearches: [...state.favoriteSearches, action.payload],
                saveFavoriteSearchForm: false,
            };

        case EDIT_FAVORITE_SEARCH:
            const foundIndex = state.favoriteSearches.findIndex(favoriteSearch => String(favoriteSearch.id) === String(action.payload.id));
            const updatedFavoriteSearches = [...state.favoriteSearches];
            updatedFavoriteSearches[foundIndex] = action.payload;
            return {
                ...state,
                favoriteSearches: updatedFavoriteSearches,
            };

        case DELETE_FAVORITE_SEARCH:
            const elementIndex = state.favoriteSearches.findIndex(favoriteSearch => String(favoriteSearch.id) === String(action.searchId));
            const newFavoriteSearches = [...state.favoriteSearches];
            newFavoriteSearches.splice(elementIndex, 1);

            return {
                ...state,
                favoriteSearches: newFavoriteSearches,
            }

        default:
            return state;
    }

};