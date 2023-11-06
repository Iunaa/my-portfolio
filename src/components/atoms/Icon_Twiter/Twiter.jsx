import React from "react";
import Style from "./twiter.module.scss";

export const Twiter = () => {
    return (
        <div className={Style.Twiter}>
            <a href="#">
                <img
                    className={Style.Twiter__img}
                    src="/images/twiter.svg"
                    target="_blank"
                />
            </a>
        </div>
    );
};
