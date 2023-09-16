import React from "react";
import styles from "../Projects/projects.module.scss";
import { Text } from "../../molecules/Text/Text";
import { Text2 } from "../../molecules/Text2/Text2";

export const Projects = () => {
    return (
        <>
            <div className={styles.Container}>
                <div className={styles.Container__projects}>
                    
                    <h1 className={styles.Container__title1}>
                        Projects
                    </h1>
                    <a className={styles.Container__anchor}>
                        CONTACT ME
                    </a>
                </div>

                <div className={styles.Container__allCards}>
                    <div className={styles.Container__bitmap}>
                        <img
                            className={styles.Container__img}
                            src="/images/bitmap.png"
                        />
                        <h2 className={styles.Container__title}>
                            DESIGN PORTFOLIO
                        </h2>
                        <Text />
                    </div>

                     <div className={styles.Container__bitmap2}>
                        <img
                            className={styles.Container__img}
                            src="/images/bitmap2.png"
                        />
                        <h2 className={styles.Container__title}>
                            E-LEARNING LANDING PAGE
                        </h2>
                        <Text />
                    </div>

                    <div className={styles.Container__bitmap3}>
                        <img
                            className={styles.Container__img}
                            src="/images/bitmap3.png"
                        />
                        <h2 className={styles.Container__title}>
                            TODO WEB APP
                        </h2>
                        <Text2 />
                    </div>
                    <div className={styles.Container__bitmap4}>
                        <img
                            className={styles.Container__img}
                            src="/images/bitmap4.png"
                        />
                        <h2 className={styles.Container__title}>
                            ENTERTAINMENT WEB APP
                        </h2>
                        <Text2 />
                    </div>
                    <div className={styles.Container__bitmap5}>
                        <img
                            className={styles.Container__img}
                            src="/images/bitmap5.png"
                        />
                        <h2 className={styles.Container__title}>
                            MEMORY GAME
                        </h2>
                        <Text2 />
                    </div>

                    <div className={styles.Container__bitmap6}>
                        <img
                            className={styles.Container__img}
                            src="/images/bitmap6.png"
                        />
                        <h2 className={styles.Container__title}>
                            ART GALLERY SHOWCASE
                        </h2> 
                        <Text2 />
                    </div> 
                </div>
            </div>
        </>
    );
};
