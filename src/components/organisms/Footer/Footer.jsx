import React from "react";
import Styles from "../Footer/footer.module.scss";
import { Icons } from "@/components/molecules/Icons/Icons";

export const Footer = () => {
    return (
        <>
            <footer className={Styles.footer}>
                <div className={Styles.footer__Container}>
                    <h4 className={Styles.footer__title}>IunaLeon</h4>
                    <Icons />
                </div>
            </footer>
        </>
    );
};
