import React from "react";
import styles from "./Preloader.module.scss";

export const Preloader = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.preloader}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
