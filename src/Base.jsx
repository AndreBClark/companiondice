import { h, Fragment } from 'preact';
import SEO from './SEO';
import Menu from './menu';
import Header from './Header'
const Base = ({ children }) => {
    return (
        <Fragment>
            <SEO />
            <div class="mx-auto flex flex-col container max-w-2xl justify-around h-screen overflow-hidden">
                <Header />
                {children}
                <Menu />
            </div>
        </Fragment>
    );
};

export default Base;
