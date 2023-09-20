import React from "react";
import Styles from "../Projects/projects.module.scss";
import { Text } from "../../molecules/Text/Text";
import { Text2 } from "../../molecules/Text2/Text2";

export const Projects = () => {
    return (
        <>
            <div className={Styles.Container}>
                <div className={Styles.Container__projects}>
                    
                    <h1 className={Styles.Container__title1}>
                        Projects
                    </h1>
                    <a className={Styles.Container__anchor} href="#">
                        CONTACT ME
                    </a>
                </div>

                <div className={Styles.Container__allCards}>
                    <div className={Styles.Container__bitmap}>
                        <img
                            className={Styles.Container__img}
                            src="/images/bitmap.png"
                        />
                        <h2 className={Styles.Container__title}>
                            DESIGN PORTFOLIO
                        </h2>
                        <Text />
                    </div>

                     <div className={Styles.Container__bitmap2}>
                        <img
                            className={Styles.Container__img}
                            src="/images/bitmap2.png"
                        />
                        <h2 className={Styles.Container__title}>
                            E-LEARNING LANDING PAGE
                        </h2>
                        <Text />
                    </div>

                    <div className={Styles.Container__bitmap3}>
                        <img
                            className={Styles.Container__img}
                            src="/images/bitmap3.png"
                        />
                        <h2 className={Styles.Container__title}>
                            TODO WEB APP
                        </h2>
                        <Text2 />
                    </div>
                    <div className={Styles.Container__bitmap4}>
                        <img
                            className={Styles.Container__img}
                            src="/images/bitmap4.png"
                        />
                        <h2 className={Styles.Container__title}>
                            ENTERTAINMENT WEB APP
                        </h2>
                        <Text2 />
                    </div>
                    <div className={Styles.Container__bitmap5}>
                        <img
                            className={Styles.Container__img}
                            src="/images/bitmap5.png"
                        />
                        <h2 className={Styles.Container__title}>
                            MEMORY GAME
                        </h2>
                        <Text2 />
                    </div>

                    <div className={Styles.Container__bitmap6}>
                        <img
                            className={Styles.Container__img}
                            src="/images/bitmap6.png"
                        />
                        <h2 className={Styles.Container__title}>
                            ART GALLERY SHOWCASE
                        </h2> 
                        <Text2 />
                    </div> 
                </div>
            </div>
        </>
    );
};
