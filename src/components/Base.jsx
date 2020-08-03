import { h, Fragment } from 'preact';
import SEO from './SEO';
import Menu from './menu';
import Header from './Header';
const Base = ({ children }) => {
    return (
        <Fragment>
            <SEO />
            <div class="mx-auto flex flex-col container max-w-2xl justify-between xl:justify-around h-screen font-sans">
                <Header />
                <main class="w-full">{children}</main>
                <Menu />
            </div>
        </Fragment>
    );
};

export default Base;
