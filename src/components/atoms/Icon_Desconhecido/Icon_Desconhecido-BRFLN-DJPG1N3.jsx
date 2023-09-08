import React from 'react';
import Style from './icon_desconhecido.module.scss';

export const Icon_desconhecido = () => {
  return (
      <div className={Style.Icon_Desconhecido}>
          <a href="#">
              <img
                  className={Style.Icon_Desconhecido__img}
                  src="/desconhecido.svg"
              />
          </a>
      </div>
  );
}
