import { h, Fragment } from 'preact';
import GithubSVG from './assets/github.svg';
import CosmicSVG from './assets/cosmicdivision.svg';
import NateSVG from './assets/nkg2.svg';
import SEO from './SEO';
const Base = ({ children }) => {
    return (
        <Fragment>
            <SEO />
        <div class="mx-auto flex flex-col container max-w-2xl justify-around h-screen">
            <header class="text-teal-400 w-full p-4">
                <h1 class="h2 md:text-5xl text-center font-black xl:mb-3">
                    Companion Dice
                </h1>
                <div class="justify-around w-full font-bold hidden sm:flex">
                    <a href="https://cosmicdivision.dev">
                        <CosmicSVG />
                        <span>Andre Clark</span>
                    </a>
                    <a href="https://nathangoullette.com">
                        <NateSVG />
                        <span>Nathan Goullette</span>
                    </a>
                    <a href="https://github.com/AndreBClark/companiondice">
                        <GithubSVG />
                        <span>Github Repo</span>
                    </a>
                </div>
            </header>
            {children}
        </div>
        </Fragment>
    );
};

export default Base;
