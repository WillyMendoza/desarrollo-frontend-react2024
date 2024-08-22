import Logo from './_components/Logo';
import Description from './_components/Description';
import LessonInfo from './_components/LessonInfo';
import Contador from './_components/Contador';

import OpenLink from '../components/OpenLink';

const Default = () => { 
    return (
        <>
            <header className="App-header">
                <Contador />
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
                <LessonInfo unitNumber="1" title="Introduccion a React y estructura de Proyectos" />
                <LessonInfo unitNumber="2" title="Context API para la gestion del estado global" />
            </header>
        </>
    );
};

export default Default;