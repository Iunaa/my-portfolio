import React from "react";
import styles from "../Text/text.module.scss";

export const Text = () => {
    return (
        <>
            <div className={styles.Container__text}>
                <p className={styles.Container__text__text1}>HTML</p>
                <p className={styles.Container__text__text2}>CSS</p>
            </div>
            <div className={styles.Container__view}>
                <p className={styles.Container__view__project}>VIEW PROJECT</p>
                <p className={styles.Container__view__code}>VIEW CODE</p>
            </div>
        </>
    );
};
