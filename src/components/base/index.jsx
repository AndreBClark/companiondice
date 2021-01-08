import React from 'react'
import SEO from '../SEO';
import style from './style';
import Header from '../title';
import Tabs from '../menu/tabs';
import SpeedDialButton from '../menu/speeddial';
const Base = ({ children }) => {
  return (
    <>
      <SEO />
      <div class={style.screen}>
        <Header />
        <div class={`${style.base} container`}>
          <main class={style.main}>{children}</main>
        </div>
        <Tabs />
      </div>
      <SpeedDialButton />
    </>
  );
};

export default Base;
