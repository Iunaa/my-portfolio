import React from "react";
import styles from "../Text/text.module.scss";

export const Text = () => {
    return (
        <>
            <div className={styles.Container}>
                <p className={styles.Container__text}>HTML</p>
                <p className={styles.Container__text2}>CSS</p>
            </div>
            <div className={styles.Container__view}>
                <p className={styles.Container__project}>VIEW PROJECT</p>
                <p className={styles.Container__code}>VIEW CODE</p>
            </div>
        </>
    );
};
