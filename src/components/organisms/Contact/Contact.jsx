import React from "react";
import styles from "./contact.module.scss";


export const Contact = () => {
    return (
        <>
            <div className={styles.Contact}>
                <div className={styles.Contact__Container}>
                    <h1 className={styles.Contact__title}>Contact</h1>
                    <p className={styles.Contact__paragraph}>
                        I would love to hear about your project and how I could
                        help. Please fill in the form, and I’ll get back to you
                        as soon as possible.
                    </p>
                </div>

                <div className={styles.Contact__Form}>
                    <div>
                        <div className={styles.Contact__Name}>
                            <label className={styles.Contact__labelName}>
                                Name
                            </label>
                            <input
                                type="text"
                                className={styles.Contact__Field}
                            />
                        </div>
                        <div className={styles.Contact__Email}>
                            <label className={styles.Contact__labelEmail}>
                                Email
                            </label>
                            <input
                                type="email"
                                className={styles.Contact__Field}
                            />
                        </div>
                        <div className={styles.Contact__Message}>
                            <label className={styles.Contact__labelMessage}>
                                Message
                            </label>
                            <input
                                type="text"
                                className={styles.Contact__Field}
                            />
                        </div>
                    </div>
                </div>
                <img className={styles.Contact__line3} src="/images/line3.png" />
            </div>
            <a className={styles.anchor}>SEND MESSAGE</a>

            <hr className={styles.hr} size="1" width="90%" align="center" />
        </>
    );
};
