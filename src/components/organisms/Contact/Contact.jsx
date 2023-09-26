import React from "react";
import Styles from "./contact.module.scss";

export const Contact = () => {
    return (
        <>
            <div className={Styles.Contact}>
                <div className={Styles.Contact__containerGrey}>
                    <h1 className={Styles.Contact__title}>Contact</h1>
                    <p className={Styles.Contact__paragraph}>
                        I would love to hear about your project and how I could
                        help. Please fill in the form, and I’ll get back to you
                        as soon as possible.
                    </p>
                </div>

                <div className={Styles.Contact__Form}>
                    <form>
                        <div className={Styles.Contact__Name}>
                            <label className={Styles.Contact__labelName}>
                                Name
                                <input
                                    required
                                    type="text"
                                    placeholder=""
                                    className={Styles.Contact__Field}
                                />
                            </label>
                        </div>
                        <div className={Styles.Contact__Email}>
                            <label className={Styles.Contact__labelEmail}>
                                Email
                                <input
                                    required
                                    type="email"
                                    placeholder=""
                                    className={Styles.Contact__Field}
                                />
                            </label>
                        </div>
                        <div className={Styles.Contact__Message}>
                            <label className={Styles.Contact__labelMessage}>
                                Message
                                <textarea
                                    required
                                    type="text"
                                    placeholder=""
                                    className={Styles.Contact__Field}
                                />
                            </label>
                        </div>
                        <button className={Styles.Contact__submit}>
                            SEND MESSAGE
                        </button>
                    </form>
                </div>
                {/* <img
                    className={Styles.Contact__line3}
                    src="/images/line3.png"
                /> */}
            </div>

            <hr className={Styles.hr} />
        </>
    );
};
