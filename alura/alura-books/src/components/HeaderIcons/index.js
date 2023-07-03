import perfil from '../../img/perfil.svg'
import sacola from '../../img/sacola.svg'
import styled from 'styled-components';

const HeaderIconsContainer = styled.div`
    display: flex;
    @media (max-width: 380px) {
        display: none;
        transition: 0.5s;
    }`;

const HeaderIcon = styled.li`
    @media (max-width: 750px) {
        margin-top: 0px;
        transition: 0.2s;
    }
`;
const HeaderIcons = styled.ul`
    justify-content: flex-end;
    @media (max-width: 750px) {
        flex-direction: column;
    }
`;

const icons = [perfil, sacola];
function Icons() {
    return (
        <HeaderIconsContainer>
            <HeaderIcons>
                { icons.map( (icon) => (
                    <HeaderIcon>
                        <img src={ icon } alt="icon"></img>
                    </HeaderIcon>
                )   )   }
            </HeaderIcons>
        </HeaderIconsContainer>
    );
}

export default Icons;