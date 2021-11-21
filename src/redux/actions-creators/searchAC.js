import {YouTubeAPI } from "../../api/youtube-api"
import {FETCH_VIDEOS, FETCH_VIDEOS_ERROR, FETCH_VIDEOS_SUCCESS, SET_PAGE_DISPLAY} from "../reducers/searchReducer";


export const fetchVideos = (searchText, maxResults = 12, order="relevance") => {
    return async (dispatch) => {
        try {
            dispatch({type: FETCH_VIDEOS});
            const response = await YouTubeAPI.getVideo(searchText, maxResults, order);

            dispatch({
                type: FETCH_VIDEOS_SUCCESS,
                videos: response.data.items,
                searchText: response.config.params.q,
                totalResults: response.data.pageInfo.totalResults,

            });
        } catch (e) {
            dispatch({type: FETCH_VIDEOS_ERROR});
        };
    };
};

export const setPageDisplay = () => {
    return {type: SET_PAGE_DISPLAY}
};



