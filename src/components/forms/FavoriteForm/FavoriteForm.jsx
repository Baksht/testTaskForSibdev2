import React from 'react';
import styles from './FavoriteForm.module.scss';
import {useForm} from "react-hook-form";


export const FavoriteForm = ({
                                 save, saveFavoriteSearchFormClose, searchText,
                                 saveFavoriteSearch, id,  searchName, maxResults,
                                 closeEditForm, editFavoriteSearch,
                             }) => {
    const {register, handleSubmit} = useForm()
    const [inputSearchText, setInputSearchText] = React.useState(searchText)
    const [maxResult, setMaxResult] = React.useState(maxResults ? maxResults : 12)
    const [favoriteSearchName, setFavoriteSearchName] = React.useState(searchName ? searchName : "")


    const onSubmit = (data) => {
        if (save) {
            data.id = `f${(~~(Math.random() * 1e8)).toString(16)}`;
            saveFavoriteSearch(data);
        } else {
            data.id = id;
            editFavoriteSearch(data);
            closeEditForm();
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.formContainer} o>
                <h2>{save ? "Сохранить запрос" : "Редактировать запрос"}</h2>

                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>

                    <div className={styles.InputContainer}>
                        <span>Запрос</span>
                        <input
                            className={styles.formInput}
                            {...register("q")}
                            value={save ? searchText : inputSearchText}
                            onChange={(e) => setInputSearchText(e.target.value)}
                        />
                    </div>

                    <div className={styles.InputContainer}>
                        <span><b>* </b>Название</span>
                        <input
                            className={styles.formInput}
                            {...register("searchName", {
                               required: true,
                                minLength: 1,
                            }, )}
                            value={favoriteSearchName}
                            onChange={(e) => setFavoriteSearchName(e.target.value)}
                        />
                    </div>

                    <div className={styles.InputContainer}>
                        <span>Сортировать по</span>
                        <select {...register("order")}>
                            <option value="relevance">По умолчанию</option>
                            <option value="date">По дате загрузки</option>
                            <option value="viewCount">По числу просмотров</option>
                            <option value="rating">По рейтингу</option>
                        </select>
                    </div>

                    <div className={styles.InputContainer}>
                        <span>Максимальное количество</span>
                        <div className={styles.maxResultsContainer}>
                            <input
                                className={styles.inputRange}
                                type={"range"}
                                min={0}
                                max={50}
                                step={1}
                                value={maxResult}
                                onInput={(e) => setMaxResult(e.target.value)}
                                {...register("maxResults")}
                            />
                            <input
                                className={styles.maxResultsInput}
                                value={maxResult}
                                onChange={(e) => setMaxResult(e.target.value)}
                            />
                        </div>


                    </div>


                    <div className={styles.buttonContainer}>
                        <button
                            className={styles.closeButton}
                            type={"button"}
                            onClick={save ? saveFavoriteSearchFormClose : closeEditForm}
                        >
                            {save ? "Не сохранить" : "Не изменить"}
                        </button>

                        <button
                            className={styles.saveButton}
                        >
                            {save ? "Сохранить" : "Изменить"}
                        </button>
                    </div>

                </form>

            </div>
        </div>
    );
};

