import style from "./header.module.scss";

export const Header = () => {
    return (
        <>
            <div className={style.header}>
                <div className={style.header__container}>
                    <h1 className={style.header__container__title}>
                        adamkeyes
                    </h1>
                    <picture className={style.header__container__picture}>
                        <img
                            className={style.header__container__picture__group}
                            src="/Group.png"
                        />
                    </picture>
                </div>
            </div>
        </>
    );
};
