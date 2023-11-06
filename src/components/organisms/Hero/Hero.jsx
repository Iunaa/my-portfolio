import React from "react";
import Styles from "./hero.module.scss";

export const Hero = () => {
    return (
        <>
            <section className={Styles.Hero}>
                <div className={Styles.Hero__container}>
                    <picture className={Styles.Hero__picture}>
                        <img
                            className={Styles.Hero__photo}
                            src="/images/photo.png"
                        />
                    </picture>
                </div>
               
                <div className={Styles.Hero__introduction}>
                    <h1 className={Styles.Hero__title}>
                        Nice to meet you! I’m{" "}
                        <span className={Styles.Hero__title_highlight}>
                            Iuna de Leon
                        </span>
                        .
                    </h1>
                    <p className={Styles.Hero__paragraph}>
                        Based in Brazil, I'm a front-end intern who loves web
                        development and wants to learn new technologies.
                    </p>
                    <a className={Styles.Hero__anchor} href="#contact">
                        contact me
                    </a>
                </div>
            </section>
            <hr className={Styles.Hero__hr} align="center" />
        </>
    );
};
