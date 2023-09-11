import style from "./abovethefold.module.scss";
import {Icons} from '../../molecules/Icons/Icons';
import { Header } from "../Header/Header";
import { Hero } from "../Hero/Hero";


export const AboveTheFold = () => {
    return (
        <section className={style.aboveTheFold}>
            <Header/>
            <Hero/>
        </section>
    );
};
