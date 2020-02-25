import { h } from 'preact';
import { useState } from 'preact/hooks';
import GithubSVG from '../assets/github.svg';
import CosmicSVG from '../assets/cosmicdivision.svg';
import NateSVG from '../assets/nkg2.svg';
import InfoSVG from '../assets/info.svg';
import OutsideClickHandler from 'react-outside-click-handler/build/OutsideClickHandler';

const Header = () => {
    const [infobtn, infoClicked] = useState(false);
    return (
        <header class="text-teal-400 w-full p-4 xs:relative">
            <h1 class="h2 md:text-5xl text-center font-black xl:mb-3">
                Companion Dice
                <button
                    class="sm:hidden p-2"
                    onClick={() => infoClicked(!infobtn)}>
                    <InfoSVG />
                </button>
            </h1>

            <OutsideClickHandler onOutsideClick={() => infoClicked(false)}>
                <div class={`modal ${infobtn ? 'modal--active' : 'hidden'}`}>
                    <a href="https://cosmicdivision.dev">
                        <CosmicSVG />
                        Andre Clark
                    </a>
                    <a href="https://nathangoullette.com">
                        <NateSVG />
                        Nathan Goullette
                    </a>
                    <a href="https://github.com/AndreBClark/companiondice">
                        <GithubSVG />
                        Github Repo
                    </a>
                </div>
            </OutsideClickHandler>
        </header>
    );
};
export default Header;
