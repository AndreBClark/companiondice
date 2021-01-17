import React from 'react';
import SEO from '../SEO';
import style from './style';
import Header from '../title';
import Tabs from '../menu/tabs';
import SpeedDialButton from '../menu/speeddial';
const Base = ({ children }) => {
  return (
    <>
      <SEO />
      <View className={style.screen}>
        <Header />
        <View className={`${style.base} container`}>
          <main className={style.main}>{children}</main>
        </View>
        <Tabs />
      </View>
      <SpeedDialButton />
    </>
  );
};

export default Base;
