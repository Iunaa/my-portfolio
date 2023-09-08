import React from 'react'
import Style from './hero.module.scss';

export const Hero = () => {
  return (
      <>
          <div className={Style.Hero}>
              <div className={Style.Hero__container}>
                  <img
                      className={Style.Hero__container__img}
                      src="/images/photo.png"
                  />
              </div>
              <img className={Style.Hero__lines} src="/images/lines.png" />
              <img className={Style.Hero__Oval} src="/images/Oval.png" />
          </div>
      </>
  );
}
