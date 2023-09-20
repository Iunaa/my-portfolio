import React from "react";
import SocialMedia from "../../atoms/SocialMedia/SocialMedia";
import Styles from "./icons.module.scss";

function Icons() {
    return (
        <div className={Styles.container}>
            <SocialMedia
                className={Styles.img}
                href="https://github.com/Iunaa"
                src="/images/git.svg"
            />

            <SocialMedia
                className={Styles.img}
                href="#"
                src="/images/desconhecido.svg"
            />

            <SocialMedia
                className={Styles.img}
                href="https://www.linkedin.com/in/iuna-de-leon-8519b2221/"
                src="/images/linkedIn.svg"
            />

            <SocialMedia href="#" src="/images/twiter.svg" />
        </div>
    );
}

export { Icons };
