import React from "react";
import styles from "../Experience/experience.module.scss";
import line2 from "../../../../public/images/line2.png"

export const Experience = () => {
    return (
        <>
            <div className={styles.experience}>
                <div>
                    <h3 className={styles.experience__title}>HTML</h3>
                    <p className={styles.experience__time}>
                        4 Years Experience
                    </p>
                </div>

                <div>
                    <h3 className={styles.experience__title}>CSS</h3>
                    <p className={styles.experience__time}>
                        4 Years Experience
                    </p>
                </div>

                <div>
                    <h3 className={styles.experience__title}>Javascript</h3>
                    <p className={styles.experience__time}>
                        4 Years Experience
                    </p>
                </div>
                <div>
                    <h3 className={styles.experience__title}>Accessibility</h3>
                    <p className={styles.experience__time}>
                        4 Years Experience
                    </p>
                </div>
                <div>
                    <h3 className={styles.experience__title}>React</h3>
                    <p className={styles.experience__time}>
                        3 Years Experience
                    </p>
                </div>

                <div>
                    <h3 className={styles.experience__title}>Sass</h3>
                    <p className={styles.experience__time}>
                        3 Years Experience
                    </p>
                </div>
            </div>

            {/* <img className={styles.line2} src={line2}/> */}
        </>
    );
};
