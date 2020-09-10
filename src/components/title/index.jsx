import { h } from 'preact';
import { useState, useRef } from 'preact/hooks';
import GithubSVG from '../../assets/github.svg';
import CosmicSVG from '../../assets/cosmicdivision.svg';
import NateSVG from '../../assets/nkg2.svg';
import InfoSVG from '../../assets/info.svg';
import useOutsideClick from '../../hooks/useOutsideClick';
import style from './style';
const Header = () => {
  const [infobtn, infoClicked] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => {
    if (infobtn === true) {
      infoClicked(false);
    }
  });
  return (
    <header class={`${infobtn ? style.overlay : ''} ${style.header}`}>
      <h1 class={style.h1}>
        Luckbringer
        <button
          aria-label="more info button"
          class="py-4 px-2"
          onClick={() => infoClicked(!infobtn)}>
          <InfoSVG />
        </button>
      </h1>
      <div class={`${style.modal} ${infobtn ? style.active : ''}`} ref={ref}>
        <h2 class="text-center">Created By</h2>
        <a href="https://cosmicdivision.dev">
          <CosmicSVG />
          Andre Clark
          <p>Developer</p>
        </a>
        <a href="https://nathangoullette.com">
          <NateSVG />
          Nathan Goullette
          <p>Designer</p>
        </a>
        <a href="https://github.com/AndreBClark/companiondice">
          <GithubSVG />
          Github Repo
        </a>
      </div>
    </header>
  );
};
export default Header;
