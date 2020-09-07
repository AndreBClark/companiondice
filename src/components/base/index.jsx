import { h, Fragment } from 'preact';
import SEO from '../SEO';
import style from './style';
import Header from '../title';
import Tabs from '../menu/tabs';
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
    </>
  );
};

export default Base;
