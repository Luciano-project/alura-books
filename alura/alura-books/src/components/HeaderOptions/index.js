import styled from 'styled-components';

const headerNames = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE'];

const HeaderOptionsContainer = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
`
const HeaderOptionContainer = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    min-width: 120px;
    padding: 10px 5px;
    cursor: pointer;
`

function HeaderOptions()
{
    return(
        <HeaderOptionsContainer>
        { headerNames.map( (item) => (
        <HeaderOptionContainer><p>{item}</p></HeaderOptionContainer>
    )   )   }   
        </HeaderOptionsContainer>
    )
}

export default HeaderOptions; // Here is the setup for the export to HeaderOptions for the other files to use.