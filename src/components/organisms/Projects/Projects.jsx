import React from "react";
import Styles from "../Projects/projects.module.scss";


export const Projects = () => {
    return (
        <>
            <div className={Styles.Container}>
                <div className={Styles.Container__projects}>
                    <h1 className={Styles.Container__title1}>Projects</h1>
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
                        <div className={Styles.Content}>
                            <p className={Styles.Content__HTML}>HTML</p>
                            <p className={Styles.Content__CSS}>CSS</p>
                        </div>
                        <div className={Styles.Content__view}>
                            <p className={Styles.Content__project}>
                                VIEW PROJECT
                            </p>
                            <p className={Styles.Content__code}>VIEW CODE</p>
                        </div>
                    </div>

                    <div className={Styles.Container__bitmap}>
                        <img
                            className={Styles.Container__img}
                            src="/images/bitmap2.png"
                        />
                        <h2 className={Styles.Container__title}>
                            E-LEARNING LANDING PAGE
                        </h2>
                        <div className={Styles.Content}>
                            <p className={Styles.Content__HTML}>HTML</p>
                            <p className={Styles.Content__CSS}>CSS</p>
                        </div>
                        <div className={Styles.Content__view}>
                            <p className={Styles.Content__project}>
                                VIEW PROJECT
                            </p>
                            <p className={Styles.Content__code}>VIEW CODE</p>
                        </div>
                    </div>

                    <div className={Styles.Container__bitmap}>
                        <img
                            className={Styles.Container__img}
                            src="/images/bitmap3.png"
                        />
                        <h2 className={Styles.Container__title}>
                            TODO WEB APP
                        </h2>
                        <div className={Styles.Content}>
                            <p className={Styles.Content__HTML}>HTML</p>
                            <p className={Styles.Content__CSS}>CSS</p>
                            <p className={Styles.Content__JS}>JAVASCRIPT</p>
                        </div>
                        <div className={Styles.Content__view}>
                            <p className={Styles.Content__project}>
                                VIEW PROJECT
                            </p>
                            <p className={Styles.Content__code}>VIEW CODE</p>
                        </div>
                    </div>
                    <div className={Styles.Container__bitmap}>
                        <img
                            className={Styles.Container__img}
                            src="/images/bitmap4.png"
                        />
                        <h2 className={Styles.Container__title}>
                            ENTERTAINMENT WEB APP
                        </h2>
                        <div className={Styles.Content}>
                            <p className={Styles.Content__HTML}>HTML</p>
                            <p className={Styles.Content__CSS}>CSS</p>
                            <p className={Styles.Content__JS}>JAVASCRIPT</p>
                        </div>
                        <div className={Styles.Content__view}>
                            <p className={Styles.Content__project}>
                                VIEW PROJECT
                            </p>
                            <p className={Styles.Content__code}>VIEW CODE</p>
                        </div>
                    </div>
                    <div className={Styles.Container__bitmap}>
                        <img
                            className={Styles.Container__img}
                            src="/images/bitmap5.png"
                        />
                        <h2 className={Styles.Container__title}>MEMORY GAME</h2>
                        <div className={Styles.Content}>
                            <p className={Styles.Content__HTML}>HTML</p>
                            <p className={Styles.Content__CSS}>CSS</p>
                            <p className={Styles.Content__JS}>JAVASCRIPT</p>
                        </div>
                        <div className={Styles.Content__view}>
                            <p className={Styles.Content__project}>
                                VIEW PROJECT
                            </p>
                            <p className={Styles.Content__code}>VIEW CODE</p>
                        </div>
                    </div>
                    <div className={Styles.Container__bitmap}>
                        <img
                            className={Styles.Container__img}
                            src="/images/bitmap6.png"
                        />
                        <div className={Styles.allContent}>
                            <h2>ART GALLERY SHOWCASE</h2>
                            <div className={Styles.Content}>
                                <p className={Styles.Content__HTML}>HTML</p>
                                <p className={Styles.Content__CSS}>CSS</p>
                                <p className={Styles.Content__JS}>JAVASCRIPT</p>
                            </div>
                            <div className={Styles.Content__view}>
                                <p className={Styles.Content__project}>
                                    VIEW PROJECT
                                </p>
                                <p className={Styles.Content__code}>
                                    VIEW CODE
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
