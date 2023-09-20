import { Icons } from "@/components/molecules/Icons/Icons";
import Style from "./header.module.scss";

export const Header = () => {
    return (
        <>
            <div className={Style.header}>
                <div className={Style.header__container}>
                    <h1 className={`${Style.header__title} typography--body`}>
                        IunaLeon
                    </h1>

                    <Icons />
                </div>
            </div>
        </>
    );
};
