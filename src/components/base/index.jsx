import { h, Fragment } from 'preact';
import SEO from '../SEO';
import Menu from '../menu/menu'
import style from './style'
import Header from '../title';
const Base = ({ children }) => {
  return (
    <Fragment>
      <SEO />
      <div class={`${style.base} container`}>
        <Header />
        <main class={style.main}>{children}</main>
        <Menu />
      </div>
    </Fragment>
  );
};

export default Base;
