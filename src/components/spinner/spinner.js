import React from 'react';
import style from './spinner.module.scss';


export default function Spinner({ msg }) {
  return (
    <div
      className="ui active dimmer"
      id={style.spinner}>
      <div className="ui indeterminate massive text loader">
        {msg}
      </div>
    </div >
  )
};
