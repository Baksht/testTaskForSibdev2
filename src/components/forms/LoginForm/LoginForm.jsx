import React from 'react';
import styles from './LoginForm.module.scss';
import {useForm} from "react-hook-form";
import {useActions} from "../../../hooks/useActions";
import {useSelector} from "react-redux";


export const LoginForm = () => {

    const {register, handleSubmit} = useForm()

    const {failedLogin} = useSelector(state => state.authPage);

    const { login } = useActions();

    const onSubmit = (data) => {

        login(data.login, data.password)

    }

    return (
        <div className={styles.wrapper}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>

                <h1 className={styles.formTitle}>Вход</h1>

                <div className={styles.formGroup}>
                    <input
                        className={styles.formInput}
                        placeholder={" "}
                        {...register("login")}
                    />
                    <label className={styles.formLabel}>Логин</label>
                </div>

                <div className={styles.formGroup}>
                    <input
                        type={"password"}
                        className={styles.formInput}
                        placeholder={" "}
                        {...register("password")}
                    />
                    <label className={styles.formLabel}>Пароль</label>
                </div>

                <div className={styles.buttonContainer}>
                    <button className={styles.formButton}>Войти</button>
                </div>

                {failedLogin && <div className={styles.faildLoginWarning}>
                    <span>Неверный логин или пароль</span>
                </div>}



            </form>

        </div>
    );
};