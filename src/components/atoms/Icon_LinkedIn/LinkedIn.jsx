import React from 'react'
import Style from './linkedIn.module.scss';

export const LinkedIn = () => {
  return (
      <div className={Style.LinkedIn}>
          <a href="https://www.linkedin.com/in/iuna-de-leon-8519b2221/">
              <img className={Style.LinkedIn__img} src="/images/linkedIn.svg" />
          </a>
      </div>
  );
}
