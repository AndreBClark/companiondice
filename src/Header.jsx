import { h } from 'preact';
import { useState } from 'preact/hooks';
import GithubSVG from './assets/github.svg';
import CosmicSVG from './assets/cosmicdivision.svg';
import NateSVG from './assets/nkg2.svg';
import InfoSVG from './assets/info.svg'
const Header = () => {
    const [infobtn, infoClicked] = useState(false);
    return (
        <header class="text-teal-400 w-full p-4 xs:relative">
            <h1 class="h2 md:text-5xl text-center font-black xl:mb-3">
                Companion Dice
                <button 
                    class="sm:hidden p-2" 
                    onClick={() => infoClicked(!infobtn)}>
                    <InfoSVG  />
                </button>
            </h1>
            <div class={`justify-around sm:w-full font-bold xs:absolute sm:flex ${infobtn ? 'flex rounded z-20 p-3 bg-black opacity-75 inset-x-0' : 'hidden'}`}>
                <a href="https://cosmicdivision.dev" class="mb-4 xs:flex xs:flex-col">
                    <CosmicSVG />
                    <span class="text-center">Andre Clark</span>
                </a>
                <a href="https://nathangoullette.com" class="mb-4 xs:flex xs:flex-col">
                    <NateSVG />
                    <span class="text-center">Nathan Goullette</span>
                </a>
                <a href="https://github.com/AndreBClark/companiondice" class="mb-4 xs:flex xs:flex-col">
                    <GithubSVG />
                    <span class="text-center">Github Repo</span>
                </a>
            </div>
        </header>
    );
};
export default Header;
