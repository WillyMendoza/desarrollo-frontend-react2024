import Logo from './_components/Logo';
import Description from './_components/Description';


import OpenLink from '../components/OpenLink';

const Default = () => { 
    return (
        <>
            <header className="App-header">
                <Logo />
                <Description />

                <OpenLink 
                    title="Learn React" 
                    url="https://reactjs.org"
                />
                <OpenLink 
                    title="Mi proyecto react (GitHub)" 
                    url="https://github.com/WillyMendoza/desarrollo-frontend-react2024"
                />
            </header>
        </>
    );
};

export default Default;