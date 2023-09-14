import React from "react";
import styles from "../Text2/text2.module.scss";

export const Text2 = () => {
    return (
        <>
            <div className={styles.Container__text}>
                <p className={styles.Container__text1}>HTML</p>
                <p className={styles.Container__text2}>CSS</p>
                <p className={styles.Container__text3}>JAVASCRIPT</p>
            </div>
            <div className={styles.Container__view}>
                <p className={styles.Container__project}>VIEW PROJECT</p>
                <p className={styles.Container__code}>VIEW CODE</p>
            </div>
        </>
    );
};
