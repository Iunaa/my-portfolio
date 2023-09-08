import React from 'react';
import Style from './icon_desconhecido.module.scss';

export const Icon_desconhecido = () => {
  return (
      <div>
          <a href="#">
              <img className={Style.Icons__list__li__git} src="/desconhecido.svg" />
          </a>
      </div>
  );
}
