import styles from './App.module.scss';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {SearchPage} from "./components/pages/SearchPage";
import {LoginForm} from "./components/forms/LoginForm/LoginForm";
import React from "react";
import {FavoritePage} from "./components/pages/FavoritePage";
import {useSelector} from "react-redux";
import {useActions} from "./hooks/useActions";
import {addSearchesToStorage} from "./hooks/addSearchesToStorage";



export const App = () => {

    const {isAuth, currentUserId} = useSelector(state => state.authPage);
    const {favoriteSearches} = useSelector(state => state.favoritePage);
    const {authVerification, fetchFavoriteSearch} = useActions();

    React.useEffect(() => {
        authVerification();
    }, []);

    React.useEffect(() => {
            fetchFavoriteSearch(currentUserId)
    }, [isAuth])

    React.useEffect(() => {
        addSearchesToStorage(currentUserId, favoriteSearches, isAuth)
    }, [favoriteSearches])


    if (!isAuth) {
        return <LoginForm/>
    };

    return (
        <BrowserRouter>
            <Header/>
            <div className={styles.content}>
                <Switch>
                    <Route path='/search' render={() => <SearchPage/>}/>
                    <Route path='/favorite' render={() => <FavoritePage/>}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
};


