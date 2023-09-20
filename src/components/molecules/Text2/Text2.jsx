import React from "react";
import Styles from "../Text2/text2.module.scss";

export const Text2 = () => {
    return (
        <>
            <div className={Styles.Container__text}>
                <p className={Styles.Container__HTML}>HTML</p>
                <p className={Styles.Container__CSS}>CSS</p>
                <p className={Styles.Container__JS}>JAVASCRIPT</p>
            </div>
            <div className={Styles.Container__view}>
                <p className={Styles.Container__project}>VIEW PROJECT</p>
                <p className={Styles.Container__code}>VIEW CODE</p>
            </div>
        </>
    );
};
