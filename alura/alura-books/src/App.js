import Header from './components/Header'
import styled from 'styled-components'
import Search from './components/Search';

// Now we are going to use styled-components to style the AppContainer
const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(to bottom, #002f52 32%, #326589 100%);
`

function App() {
    return (
        <AppContainer>
            <Header />
            <Search />
        </AppContainer>
    );
}

export default App; // Here is the setup for the export to App for the other files to use.
