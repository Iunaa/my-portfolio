import React from "react";
import styles from "./contact.module.scss";
import line3 from "../../../../public/images/line3.png";

export const Contact = () => {
    return (
        <>
            <div className={styles.Contact}>
                <div className={styles.Contact__Container}>
                    <h1 className={styles.Contact__Container__title}>
                        Contact
                    </h1>
                    <p className={styles.Contact__Container__paragraph}>
                        I would love to hear about your project and how I could
                        help. Please fill in the form, and I’ll get back to you
                        as soon as possible.
                    </p>
                </div>

                <div className={styles.Contact__Form}>
                    <div>
                        <div className={styles.Contact__Form__Name}>
                            <label className={styles.Contact__form__labelName}>
                                Name
                            </label>
                            <input
                                type="text"
                                className={styles.Contact__Form__Field}
                            />
                        </div>
                        <div className={styles.Contact__Form__Email}>
                            <label className={styles.Contact__Form__labelEmail}>
                                Email
                            </label>
                            <input
                                type="email"
                                className={styles.Contact__Form__Field}
                            />
                        </div>
                        <div className={styles.Contact__Form__Message}>
                            <label
                                className={styles.Contact__Form__labelMessage}
                            >
                                Message
                            </label>
                            <input
                                type="text"
                                className={styles.Contact__Form__Field}
                            />
                        </div>
                        {/* <img className={styles.Contact__data__line3} src={line3} /> */}
                    </div>

                    <a className={styles.Contact__anchor}>SEND MESSAGE</a>

                    <hr size="1" width="90%" align="center" />
                </div>
            </div>
        </>
    );
};
