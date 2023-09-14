import { Icons } from "@/components/molecules/Icons/Icons";
import style from "./header.module.scss";

export const Header = () => {
    return (
        <>
            <div className={style.header}>
                <div className={style.header__container}>
                    <h1 className={`${style.header__title} typography--body`}>
                        IunaLeon
                    </h1>

                    <Icons />
                </div>
            </div>
        </>
    );
};
