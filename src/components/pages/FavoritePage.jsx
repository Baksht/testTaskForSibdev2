import React from 'react';
import {useSelector} from "react-redux";
import {useActions} from "../../hooks/useActions";
import {FavoriteSearchItem} from "../FavoriteSearchItem/FavoriteSearchItem";

export const FavoritePage = () => {

    const {editFavoriteSearch, deleteFavoriteSearch, fetchVideos } = useActions();
    const {favoriteSearches} = useSelector(state => state.favoritePage);

    return (
        <div>
            {favoriteSearches.map(favoriteSearch =>
                <FavoriteSearchItem
                    key={favoriteSearch.id}
                    searchText={favoriteSearch.q}
                    searchName={favoriteSearch.searchName}
                    maxResults={favoriteSearch.maxResults}
                    order={favoriteSearch.order}
                    id={favoriteSearch.id}
                    editFavoriteSearch={editFavoriteSearch}
                    deleteFavoriteSearch={deleteFavoriteSearch}
                    fetchVideos={fetchVideos}
                />
            )}
        </div>
    );
};

