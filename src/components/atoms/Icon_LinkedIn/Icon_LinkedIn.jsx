import React from 'react'
import Style from './icon_linkedIn.module.scss';

export const Icon_LinkedIn = () => {
  return (
      <div className={Style.Icon_LinkedIn}>
          <a href="https://www.linkedin.com/in/iuna-de-leon-8519b2221/">
              <img className={Style.Icon_LinkedIn__img} src="/linkedIn.svg" />
          </a>
      </div>
  );
}
