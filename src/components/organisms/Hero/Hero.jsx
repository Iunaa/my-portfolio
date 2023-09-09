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
              <div className={Style.Hero__introduction}>
                  <h1 className={Style.Hero__introduction__title}>
                      Nice to meet you! I’m{" "}
                      <u className={Style.Hero__introduction__title__underline}>
                          Iuna de Leon
                      </u>
                      .
                  </h1>
                  <p className={Style.Hero__introduction__paragraph}>
                      Based in the BR, I’m a front-end developer passionate
                      about building accessible web apps that users love.
                  </p>
                  <a className={Style.Hero__introduction__anchor}>contact me</a>
              </div>
              <hr
                  size="1"
                  width="90%"
                  align="center"
                  color="rgba(255, 255, 255, 1)"
              />
          </div>
      </>
  );
}
