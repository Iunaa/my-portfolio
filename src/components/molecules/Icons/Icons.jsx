import React from 'react'
import Style from '../Icons/icons.module.scss';
import { Icon_Git } from '@/components/atoms/Icon_Git/Icon_Git';
import { Icon_LinkedIn } from '@/components/atoms/Icon_LinkedIn/Icon_LinkedIn';
import { Icon_desconhecido } from '@/components/atoms/Icon_Desconhecido/Icon_Desconhecido';
import { Icon_Twiter } from '@/components/atoms/Icon_Twiter/Icon_Twiter';

export const Icons = () => {
  return (
      <div className={Style.Icons}>
        <Icon_Git/>
        <Icon_desconhecido/>
        <Icon_LinkedIn/>
        <Icon_Twiter/>
   
      </div>
  );
}
