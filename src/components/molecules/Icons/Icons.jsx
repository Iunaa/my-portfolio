import React from 'react'
import Style from '../Icons/icons.module.scss';
import { Git } from '@/components/atoms/Icon_Git/Git';
import { Mentor } from '@/components/atoms/Icon_Mentor/Mentor.jsx';
import { LinkedIn } from '@/components/atoms/Icon_LinkedIn/LinkedIn';
import { Twiter } from '@/components/atoms/Icon_Twiter/Twiter';


export const Icons = () => {
  return (
      <div className={Style.Icons}>
        <Git/>
        <Mentor/>
        <LinkedIn/>
        <Twiter/>
       
      </div>
  );
}
