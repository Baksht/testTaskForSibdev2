import React from 'react';
import styles from './Header.module.scss';
import {NavLink} from "react-router-dom";
import {useActions} from "../../hooks/useActions";
import {useSelector} from "react-redux";

export const Header = () => {

    const {logout} = useActions();

    const {login} = useSelector(state => state.authPage);


    let SidebarItems = [
        {id: 1, value: "Поиск", link: "/search"},
        {id: 2, value: "Избранное", link: "/favorite"},
    ];

    return (
        <div className={styles.wrapper}>

            <div className={styles.container}>

                <div className={styles.logo}>
                    <span>Sibdev</span>

                </div>

                <nav className={styles.navigationContainer}>
                    {SidebarItems.map(SidebarItem =>
                        <NavLink
                            key={SidebarItem.id}
                            to={SidebarItem.link}
                            className={styles.menuItem}
                            activeClassName={styles.menuItemActive}
                        >
                            <span>{SidebarItem.value}</span>
                        </NavLink>
                    )}

                </nav>

                <div className={styles.logoutButtonContainer}>
                    <b>{login}</b>
                    <button className={styles.logoutButton} onClick={logout}>
                        Выйти
                    </button>
                </div>
            </div>
        </div>
    );
};

