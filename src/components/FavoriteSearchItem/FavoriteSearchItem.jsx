import React from 'react';
import styles from './FavoriteSearchItem.module.scss';
import {FavoriteForm} from "../forms/FavoriteForm/FavoriteForm";
import {Redirect} from "react-router-dom";


export const FavoriteSearchItem = ({
                                       searchName, searchText, maxResults, order, id,
                                       editFavoriteSearch, deleteFavoriteSearch, fetchVideos
}) => {

    const[editForm, setEditForm] = React.useState(false);

    const openEditForm = () => {
        setEditForm(true);
    }

    const closeEditForm = () => {
        setEditForm(false);
    }

    const deleteItem = () => {
        deleteFavoriteSearch(id);
    }

    const [newSearch, setNewSearch] = React.useState(false)

    const performSearch = () => {
        fetchVideos(searchText, maxResults, order)
        setNewSearch(true)
    }

    if (newSearch === true) {
        return <Redirect to={"/search"}/>
    };

    return (
        <>
            {editForm &&
            <FavoriteForm
                save={false}
                editFavoriteSearch={editFavoriteSearch}
                id={id}
                searchName={searchName}
                searchText={searchText}
                maxResults={maxResults}
                closeEditForm={closeEditForm}
            />}

            <div className={styles.container}>
                <div className={styles.searchInfo}>
                    <span>{searchName}</span>
                </div>

                <div>
                    <button className={styles.searchButton} onClick={performSearch}>
                        Выполнить
                    </button>

                    <button className={styles.editButton} onClick={openEditForm}>
                        Изменить
                    </button>

                    <button className={styles.deleteButton} onClick={deleteItem}>
                        Удалить
                    </button>
                </div>
            </div>
        </>
    );
};

