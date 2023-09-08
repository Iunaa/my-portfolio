import React from 'react';
import Style from './icon_twiter.module.scss';

export const Icon_Twiter = () => {
  return (
      <div className={Style.Icon_Twiter}>
          <a href="#">
              <img className={Style.Icon_Twiter__img} src="/twiter.svg" />
          </a>
      </div>
  );
}
