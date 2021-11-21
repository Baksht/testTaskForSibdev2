export const FETCH_VIDEOS = "FETCH_VIDEOS";
export const FETCH_VIDEOS_SUCCESS = "FETCH_VIDEOS_SUCCESS";
export const FETCH_VIDEOS_ERROR = "FETCH_VIDEOS_ERROR";
export const SET_PAGE_DISPLAY = "SET_PAGE_DISPLAY"


const initialState = {
    videos: [],
    loading: false,
    error: null,
    masonry: false,
    searchText: "",
    totalResults: 0,
}


export const searchReducer = (state = initialState, action) => {

    switch (action.type) {

        case FETCH_VIDEOS:
            return {
                ...state,
                loading: true,
                error: null,
                videos: []
            };

        case FETCH_VIDEOS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                videos: action.videos,
                searchText: action.searchText,
                totalResults: action.totalResults,
            };

        case FETCH_VIDEOS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
                videos: []
            };

        case SET_PAGE_DISPLAY:
            return {
                ...state,
                masonry: !state.masonry,
            };

        default:
            return state;
    }

};