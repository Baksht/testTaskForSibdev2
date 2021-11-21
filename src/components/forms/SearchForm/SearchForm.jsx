import React from 'react';
import styles from './SearchForm.module.scss';
import {useForm} from "react-hook-form";



export const SearchForm = ({fetchVideos, currentSearchText, saveFavoriteSearchFormOpen}) => {

    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        fetchVideos(data.searchText);
    }

    return (
        <div className={styles.wrapper}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>

                <div className={styles.inputContainer}>

                    <input
                        className={styles.input}
                        placeholder={"Что хотите посмотреть?"}
                        {...register("searchText")}
                    />
                    {currentSearchText &&
                    <img
                        className={styles.addFavoriteButton}
                        src="/icons/heart.svg"
                        alt={"addToFavorite"}
                        onClick={saveFavoriteSearchFormOpen}
                    />}
                </div>

                <button className={styles.searchButton}>Поиск</button>
            </form>
        </div>
    )
};

