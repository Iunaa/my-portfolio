import React from 'react';
import Style from './mentor.module.scss';

export const Mentor = () => {
  return (
      <div className={Style.Mentor}>
          <a href="#">
              <img
                  className={Style.Mentor__img}
                  src="/images/desconhecido.svg"
                  target="_blank"
              />
          </a>
      </div>
  );
}
