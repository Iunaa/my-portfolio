import React from 'react'
import style from "../Header/header.module.scss";

export const Hero = () => {
  return (
      <>
          <div className={style.Hero}>
              <img className={style.hero__container__img} src="/photo.png" />
              <img className={style.hero__container__lines} src="/lines.png" />
              <img className={style.hero__container__Oval} src="/Oval.png" />
          </div>
      </>
  );
}
