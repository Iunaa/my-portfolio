import React from "react";
import Styles from "../Projects/projects.module.scss";

export const Projects = () => {
    return (
        <>
            <section className={Styles.container}>
                <div className={Styles.container__projects}>
                    <h1 className={Styles.container__title1}>Projects</h1>
                    <a className={Styles.container__anchor} href="#contact">
                        CONTACT ME
                    </a>
                </div>

                <div className={Styles.container__allCards}>
                    <div className={Styles.container__bitmap}>
                        <a
                            href="https://new-pokedex-sbzj.vercel.app/"
                            target="_blank"
                        >
                            <img
                                className={Styles.container__img}
                                src="/images/4.png"
                            />
                        </a>
                        <h2 className={Styles.container__title}>
                            Simple Pokedéx
                        </h2>
                        <div className={Styles.Content}>
                            <p className={Styles.Content__HTML}>HTML</p>
                            <p className={Styles.Content__CSS}>CSS</p>
                        </div>
                        <div className={Styles.Content__view}>
                            <a
                                href="https://new-pokedex-sbzj.vercel.app/"
                                target="_blank"
                            >
                                <p className={Styles.Content__project}>
                                    VIEW PROJECT
                                </p>
                            </a>
                            <a
                                href="https://github.com/Iunaa/Pokedex"
                                target="_blank"
                            >
                                <p className={Styles.Content__code}>
                                    VIEW CODE
                                </p>
                            </a>
                        </div>
                    </div>

                    <div className={Styles.container__bitmap}>
                        <a href="https://pinkbox.vercel.app/" target="_blank">
                            <img
                                className={Styles.container__img}
                                src="/images/2.png"
                            />
                        </a>
                        <h2 className={Styles.container__title}>PinkBox</h2>
                        <div className={Styles.Content}>
                            <p className={Styles.Content__HTML}>HTML</p>
                            <p className={Styles.Content__CSS}>CSS</p>
                        </div>
                        <div className={Styles.Content__view}>
                            <a
                                href="https://pinkbox.vercel.app/"
                                target="_blank"
                            >
                                <p className={Styles.Content__project}>
                                    VIEW PROJECT
                                </p>
                            </a>
                            <a
                                href="https://github.com/Iunaa/pinkBox"
                                target="_blank"
                            >
                                <p className={Styles.Content__code}>
                                    VIEW CODE
                                </p>
                            </a>
                        </div>
                    </div>

                    <div className={Styles.container__bitmap}>
                        <a
                            href="https://tictactoe-one-azure.vercel.app/"
                            target="_blank"
                        >
                            <img
                                className={Styles.container__img}
                                src="/images/3.png"
                            />
                        </a>
                        <h2 className={Styles.container__title}>TicTacToe</h2>

                        <div className={Styles.Content}>
                            <p className={Styles.Content__HTML}>HTML</p>
                            <p className={Styles.Content__CSS}>CSS</p>
                            <p className={Styles.Content__JS}>JAVASCRIPT</p>
                        </div>
                        <div className={Styles.Content__view}>
                            <p className={Styles.Content__project}>
                                <a
                                    href="https://tictactoe-one-azure.vercel.app/"
                                    target="_blank"
                                >
                                    VIEW PROJECT
                                </a>
                            </p>
                            <a
                                href="https://github.com/Iunaa/Tictactoe"
                                target="_blank"
                            >
                                <p className={Styles.Content__code}>
                                    VIEW CODE
                                </p>
                            </a>
                        </div>
                    </div>
                    <div className={Styles.container__bitmap}>
                        <a
                            href="https://new-pokedex-nine.vercel.app/"
                            target="_blank"
                        >
                            <img
                                className={Styles.container__img}
                                src="/images/1.png"
                            />
                        </a>
                        <h2 className={Styles.container__title}>Pokedéx</h2>
                        <div className={Styles.Content}>
                            <p className={Styles.Content__HTML}>HTML</p>
                            <p className={Styles.Content__CSS}>CSS</p>
                            <p className={Styles.Content__JS}>JAVASCRIPT</p>
                        </div>
                        <div className={Styles.Content__view}>
                            <a
                                href="https://new-pokedex-nine.vercel.app/"
                                target="_blank"
                            >
                                <p className={Styles.Content__project}>
                                    VIEW PROJECT
                                </p>
                            </a>
                            <a
                                href="https://github.com/Iunaa/new_Pokedex"
                                target="_blank"
                            >
                                <p className={Styles.Content__code}>
                                    VIEW CODE
                                </p>
                            </a>
                        </div>
                    </div>
                    <div className={Styles.container__bitmap}>
                        <a
                            href="https://iunaa.github.io/wildbeast_grid/"
                            target="_blank"
                        >
                            <img
                                className={Styles.container__img}
                                src="/images/5.png"
                            />
                        </a>
                        <h2 className={Styles.container__title}>WildBeast</h2>
                        <div className={Styles.Content}>
                            <p className={Styles.Content__HTML}>HTML</p>
                            <p className={Styles.Content__CSS}>CSS</p>
                            <p className={Styles.Content__JS}>JAVASCRIPT</p>
                        </div>
                        <div className={Styles.Content__view}>
                            <a
                                href="https://iunaa.github.io/wildbeast_grid/"
                                target="_blank"
                            >
                                <p className={Styles.Content__project}>
                                    VIEW PROJECT
                                </p>
                            </a>
                            <a
                                href="https://github.com/Iunaa/wildbeast_grid"
                                target="_blank"
                            >
                                <p className={Styles.Content__code}>
                                    VIEW CODE
                                </p>
                            </a>
                        </div>
                    </div>
                    <div className={Styles.container__bitmap}>
                        <a
                            href="https://iunaa.github.io/flexblog/"
                            target="_blank"
                        >
                            <img
                                className={Styles.container__img}
                                src="/images/6.png"
                            />
                        </a>
                        <div className={Styles.allContent}>
                            <h2>FlexBox Project</h2>
                            <div className={Styles.Content}>
                                <p className={Styles.Content__HTML}>HTML</p>
                                <p className={Styles.Content__CSS}>CSS</p>
                                <p className={Styles.Content__JS}>JAVASCRIPT</p>
                            </div>
                            <div className={Styles.Content__view}>
                                <a
                                    href="https://iunaa.github.io/flexblog/"
                                    target="_blank"
                                >
                                    <p className={Styles.Content__project}>
                                        VIEW PROJECT
                                    </p>
                                </a>
                                <a
                                    href="https://github.com/Iunaa/flexblog"
                                    target="_blank"
                                >
                                    <p className={Styles.Content__code}>
                                        VIEW CODE
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
