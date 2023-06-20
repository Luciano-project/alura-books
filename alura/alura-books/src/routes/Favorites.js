import styled from 'styled-components'
import Search from '../components/Search';
import LastReleases from '../components/LastReleases';


// Now we are going to use styled-components to style the AppContainer
const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(to bottom, #002f52 32%, #326589 100%);
`

function Favorites() {
    return (
        <AppContainer>
            <Search />
            <LastReleases />
        </AppContainer>
    );
}

export default Favorites; // Here is the setup for the export to App for the other files to use.
