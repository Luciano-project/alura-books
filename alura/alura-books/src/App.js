import './App.css';
import Logo from './components/logo'
import perfil from './img/perfil.svg'
import sacola from './img/sacola.svg'

const headerNames = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE'];
const headerIcons = [perfil, sacola];

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Logo></Logo>
                    <ul className="options">
                        { headerNames.map( (item) => (
                            <li className="option"><p>{item}</p></li>
                        )   )   }
                    </ul>
                    <ul className="icons">
                        { headerIcons.map( (icon) => (
                            <li><img src={icon}></img></li>
                        )   )   }
                    </ul>
            </header>
        </div>
    );
}

export default App;
export { Logo };
