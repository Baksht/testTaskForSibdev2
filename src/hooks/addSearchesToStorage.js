export const addSearchesToStorage = (userId, favoriteSearches, isAuth) => {
    const storageName = `data${userId}`;
    const storageDataJSON = localStorage.getItem(storageName);
    if (isAuth===true) {
        if (storageDataJSON !== null) {
            const favoriteSearchesJSON = JSON.stringify(favoriteSearches);
            localStorage.setItem(`data${userId}`, favoriteSearchesJSON);

        } else {
            const favoriteSearchesJSON = JSON.stringify(favoriteSearches);
            localStorage.setItem(`data${userId}`, favoriteSearchesJSON);
        }
    }
}






