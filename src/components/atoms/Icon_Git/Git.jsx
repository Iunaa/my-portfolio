import React from 'react'
import Style from './git.module.scss';

export const Git = () => {
  return (
      <div className={Style.Git}>
          <a href="https://github.com/Iunaa" target="_blank">
              <img className={Style.Git__img} src="/images/git.svg" />
          </a>


      </div>
  );
}
