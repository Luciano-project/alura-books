import styled from 'styled-components';
import { Link } from 'react-router-dom';
const headerNames = ['CATEGORIES', 'FAVORITES', 'LIBRARY'];

const HeaderOptionsContainer = styled.ul`
    display: flex;
    padding: 0 50px;
    @media (max-width: 650px) {
        flex-direction: column;
        display: none;
        transition: 0.5s;
    }
`
const HeaderOptionContainer = styled.li`
    font-size: 16px;
    height: 100%;
    padding: 10px 5px;
    cursor: pointer;
    justify-content: space-evenly;
    
`
function HeaderOptions()
{
    return(
        <HeaderOptionsContainer id='HeaderOptions'>
            { headerNames.map( (item) => (
                <Link style={{ textDecoration: 'none' }} to={`/${ item.toLowerCase() }`}>
                    <HeaderOptionContainer>
                        <p>{item}
                        </p>
                    </HeaderOptionContainer>
                </Link>
            )   )   }   
        </HeaderOptionsContainer>
    )
}

export default HeaderOptions; // Here is the setup for the export to HeaderOptions for the other files to use.