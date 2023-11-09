import React from "react";
import Styles from "./contact.module.scss";
import { useForm } from "@formspree/react";

export const Contact = () => {
    const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID);
    const Submit = (e) => {           // fazer uma funcao Submit para resetar o formulário
        e.preventDefault();
        handleSubmit(e);
        e.target.reset();
    };

    return (
        <>
            <section id="contact" className={Styles.Contact}>
                <div className={Styles.Contact__containerGrey}>
                    <h1 className={Styles.Contact__title}>Contact</h1>
                    <p className={Styles.Contact__paragraph}>
                        I would love to hear about your project and how I could
                        help. Please fill in the form, and I’ll get back to you
                        as soon as possible.
                    </p>
                </div>

                <div className={Styles.Contact__Form}>
                    <form onSubmit={Submit} method="POST">
                        <div className={Styles.Contact__Name}>
                            <label className={Styles.Contact__labelName}>
                                Name
                                <input
                                    name="name"
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
                                    name="email"
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
                                    name="message"
                                    required
                                    type="text"
                                    placeholder=""
                                    className={Styles.Contact__Field}
                                />
                            </label>
                        </div>
                        <button
                            type="submit"
                            disabled={state.submitting}
                            onClick={() => alert("Your message was sent!")}
                            className={Styles.Contact__submit}
                        >
                            SEND MESSAGE
                        </button>
                    </form>
                </div>
            </section>

            <hr className={Styles.hr} />
        </>
    );
};
