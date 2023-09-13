import React from "react";
import Style from "./icone.module.scss";

function Icone() {
    return (
        <div className={Style.Git}>
            <a href="https://github.com/Iunaa">
                <img className={Style.Git__img} src="/images/git.svg" />
            </a>
        </div>
    );
}

export { Icone };
