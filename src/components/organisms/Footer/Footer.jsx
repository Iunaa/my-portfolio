import React from "react";
import Styles from "../Footer/footer.module.scss";
import { Icons } from "@/components/molecules/Icons/Icons";

export const Footer = () => {
    return (
        <>
            <footer className={Styles.footer}>
                <div className={Styles.footer__containerGrey}>
                    <h1 className={Styles.footer__title}>IunaLeon</h1>
                    <Icons />
                </div>
            </footer>
        </>
    );
};
