import React from "react";
import styles from "../Experience/experience.module.scss";


export const Experience = () => {
    return (
        <>
            <div className={styles.experience}>
                <div className={styles.experience__container}>
                    <h3 className={styles.experience__title}>HTML</h3>
                    <p className={styles.experience__time}>
                        4 Years Experience
                    </p>
                </div>

                <div className={styles.experience__container}>
                    <h3 className={styles.experience__title}>CSS</h3>
                    <p className={styles.experience__time}>
                        4 Years Experience
                    </p>
                </div>

                <div className={styles.experience__container}>
                    <h3 className={styles.experience__title}>Javascript</h3>
                    <p className={styles.experience__time}>
                        4 Years Experience
                    </p>
                </div>
                <div className={styles.experience__container}>
                    <h3 className={styles.experience__title}>Accessibility</h3>
                    <p className={styles.experience__time}>
                        4 Years Experience
                    </p>
                </div>
                <div className={styles.experience__container}>
                    <h3 className={styles.experience__title}>React</h3>
                    <p className={styles.experience__time}>
                        3 Years Experience
                    </p>
                </div>

                <div className={styles.experience__container}>
                    <h3 className={styles.experience__title}>Sass</h3>
                    <p className={styles.experience__time}>
                        3 Years Experience
                    </p>
                </div>
                <img className={styles.experience__line2} src="/images/line2.png" />
            </div>
            <hr className={styles.hr} size="1" width="90%" align="center" />
        </>
    );
};
