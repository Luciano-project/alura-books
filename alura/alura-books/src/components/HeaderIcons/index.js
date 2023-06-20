import perfil from '../../img/perfil.svg'
import sacola from '../../img/sacola.svg'
import styled from 'styled-components';

const HeaderIcon = styled.li`
    margin-top: 20px;
    margin-right: 40px;
    width: 25px;
`
const HeaderIcons = styled.ul`
    display: flex;
`

const icons = [perfil, sacola];
function Icons() {
    return (
        <HeaderIcons>
            { icons.map( (icon) => (
                <HeaderIcon>
                    <img src={ icon } alt="icon"></img>
                </HeaderIcon>
            )   )   }
        </HeaderIcons>
    );
}

export default Icons;