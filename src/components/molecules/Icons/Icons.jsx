import React from "react";
import SocialMedia from "../../atoms/SocialMedia/SocialMedia";
import styles from "./icons.module.scss";

function Icons() {
    return (
        <div className={styles.container}>
            <SocialMedia
                href="https://github.com/Iunaa"
                src="/images/git.svg"
            />

            <SocialMedia href="#" src="/images/desconhecido.svg" />

            <SocialMedia
                href="https://www.linkedin.com/in/iuna-de-leon-8519b2221/"
                src="/images/linkedIn.svg"
            />

            <SocialMedia href="#" src="/images/twiter.svg" />
        </div>
    );
}

export { Icons };
