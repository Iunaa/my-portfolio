import style from "./header.module.scss";
import {Icons} from '../../molecules/Icons/Icons';

export const Header = () => {
    return (
        <>
            <div className={style.header}>
                <div className={style.header__container}>
                    <h1
                        className={`${style.header__container__title} typography--body`}
                    >
                        IunaLeon
                    </h1>

                    <Icons/>
                   
                </div>
            </div>
        </>
    );
};
