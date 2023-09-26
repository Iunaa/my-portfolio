import React from "react";
import Styles from "../Experience/experience.module.scss";


export const Experience = () => {
    return (
        <>
            <div className={Styles.experience}>
                <div className={Styles.experience__container}>
                    <h3 className={Styles.experience__title}>HTML</h3>
                    <p className={Styles.experience__time}>
                        4 Years Experience
                    </p>
                </div>

                <div className={Styles.experience__container}>
                    <h3 className={Styles.experience__title}>CSS</h3>
                    <p className={Styles.experience__time}>
                        4 Years Experience
                    </p>
                </div>

                <div className={Styles.experience__container}>
                    <h3 className={Styles.experience__title}>Javascript</h3>
                    <p className={Styles.experience__time}>
                        4 Years Experience
                    </p>
                </div>
                <div className={Styles.experience__container}>
                    <h3 className={Styles.experience__title}>Accessibility</h3>
                    <p className={Styles.experience__time}>
                        4 Years Experience
                    </p>
                </div>
                <div className={Styles.experience__container}>
                    <h3 className={Styles.experience__title}>React</h3>
                    <p className={Styles.experience__time}>
                        3 Years Experience
                    </p>
                </div>

                <div className={Styles.experience__container}>
                    <h3 className={Styles.experience__title}>Sass</h3>
                    <p className={Styles.experience__time}>
                        3 Years Experience
                    </p>
                </div>
                {/* <img className={Styles.experience__line2} src="/images/line2.png" /> */}
            </div>
            <hr className={Styles.hr} size="1" width="90%" align="center" />
        </>
    );
};
