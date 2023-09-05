import style from "./header.module.scss";

export const Header = () => {
    return (
        <>
            <div className={style.header}>
                <div className={style.header__container}>
                    <h1 className={style.header__container__title}>
                        adamkeyes
                    </h1>
                    <img
                        className={style.header__container__group}
                        src="/Group.png"
                    />
                    <img
                        className={style.header__container__img}
                        src="/image-s.png"
                    />
                </div>
                <img className={style.header__lines} src="/lines.png" />
                <img className={style.header__Oval} src="/Oval.png" />
            </div>
        </>
    );
};
