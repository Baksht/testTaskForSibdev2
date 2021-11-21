import React from 'react';
import {SearchForm} from "../forms/SearchForm/SearchForm";
import {useSelector} from "react-redux";
import {Preloader} from "../Preloader/Preloader";
import {Videolist} from "../VideoList/Videolist";
import {useActions} from "../../hooks/useActions";
import {FavoriteForm} from "../forms/FavoriteForm/FavoriteForm";

export const SearchPage = () => {

    const {videos, loading, masonry, searchText, totalResults} = useSelector(state => state.searchPage);
    const {saveFavoriteSearchForm} = useSelector(state => state.favoritePage);
    const {
        fetchVideos,
        setPageDisplay,
        saveFavoriteSearch,
        saveFavoriteSearchFormOpen,
        saveFavoriteSearchFormClose
    } = useActions();

    return (
        <div>
            {saveFavoriteSearchForm &&
            <FavoriteForm
                save={true}
                saveFavoriteSearchFormClose={saveFavoriteSearchFormClose}
                searchText={searchText}
                saveFavoriteSearch={saveFavoriteSearch}
            />}

            <SearchForm
                fetchVideos={fetchVideos}
                currentSearchText={searchText}
                saveFavoriteSearchFormOpen={saveFavoriteSearchFormOpen}
            />

            {loading && <Preloader/>}
            {videos.length > 0 && <Videolist
                masonry={masonry}
                videos={videos}
                setPageDisplay={setPageDisplay}
                searchText={searchText}
                totalResults={totalResults}
            />}
        </div>
    );
};

