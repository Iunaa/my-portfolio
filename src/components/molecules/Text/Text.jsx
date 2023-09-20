import React from "react";
import Styles from "../Text/text.module.scss";

export const Text = () => {
    return (
        <>
            <div className={Styles.Container}>
                <p className={Styles.Container__HTML}>HTML</p>
                <p className={Styles.Container__CSS}>CSS</p>
            </div>
            <div className={Styles.Container__view}>
                <p className={Styles.Container__project}>VIEW PROJECT</p>
                <p className={Styles.Container__code}>VIEW CODE</p>
            </div>
        </>
    );
};
