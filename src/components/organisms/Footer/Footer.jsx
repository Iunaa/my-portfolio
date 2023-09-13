import React from "react";
import styles from "../Footer/footer.module.scss";
import { Icons } from "@/components/molecules/Icons/Icons";


export const Footer = () => {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.footer__Container}>
                    <h1 className={styles.footer__Container__title}>
                        IunaLeon
                    </h1>
                   <Icons/>
                </div>
            </div>
        </>
    );
};
