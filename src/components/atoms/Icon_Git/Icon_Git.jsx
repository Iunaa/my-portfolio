import React from 'react'
import Style from './icon_git.module.scss';

export const Icon_Git = () => {
  return (
      <div className={Style.Icon_Git}>
          <a href="https://github.com/Iunaa">
              <img className={Style.Icon_Git__img} src="/git.svg" />
          </a>


      </div>
  );
}
