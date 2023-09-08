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
                  <img
                      className={Style.Hero__container__lines}
                      src="/images/lines.png"
                  />
                  <img
                      className={Style.Hero__container__Oval}
                      src="/images/Oval.png"
                  />
              </div>
          </div>
      </>
  );
}
