import styled from 'styled-components'; // Importing styled-components to use it in this file.
import { deleteFavorites, getFavorites } from '../services/favorites';
import { useEffect, useState } from 'react';
import { SearchContainer } from '../components/SearchContainer';
//import { Link } from 'react-router-dom';

// Now we are going to use styled-components to style the AppContainer
const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(to bottom, #002f52 32%, #326589 100%);
`;

const Text = styled.p`
    color: #FFF;
    text-decoration: none;
`;
const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;
    text-align: center;
    padding: 0 100px;
    p {
        width: 200px;
        color: #FFF;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;`
;
function Favorites() {
    const [favorites, setFavorites] = useState([]); // Here we are using useState to create a state for the favorites.

    async function fetchFavorites() { // Here we are creating a function to fetch the favorites.
        const favoritesApi = await getFavorites(); // Here we are using the getFavorites function from the favorites.js file.
        setFavorites(favoritesApi); // Here we are setting the favorites.
    }

    async function deleteFavorite(id) { // Here we are creating a function to delete the favorites.
        await deleteFavorites(id); // Here we are using the deleteFavorites function from the favorites.js file.
        fetchFavorites(); // Here we are using the fetchFavorites function.
        alert(`Book of id:${id} has been deleted!`); // Here we are using the fetchFavorites function.
    }
    // Here we are using the fetchFavorites function.
    useEffect(() => {
        fetchFavorites(); 
    }, []);

    return (
        <AppContainer>
            <SearchContainer>
                <h2>Your Favorites</h2>
                <Container>
                    {favorites.map((favorite) => (
                        <Card onClick={ () => { deleteFavorite(favorite.id) }}>
                            <Text>{favorite.title}</Text> 
                            <img src={ favorite.src } alt="book logo" />
                        </Card>
                    )) }
                </Container>
            </SearchContainer>
        </AppContainer>
    );
}

export default Favorites; // Here is the setup for the export to App for the other files to use.
