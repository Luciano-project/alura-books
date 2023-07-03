import HeaderOptions from '../HeaderOptions/index'
import HeaderIcons from '../HeaderIcons/index'
import Logo from '../Logo/logo'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// This is the setup for the HeaderContainer
// Using this way, we are able to style the HeaderContainer
const HeaderContainer = styled.header`
    background-color: #ffffff;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: 100px;
`
function Header ()
{
    return(
        <HeaderContainer>
                <Link style={{ textDecoration: 'none' }} to="/">
                    <Logo />
                </Link>
                <HeaderOptions />
                <HeaderIcons />
        </HeaderContainer>
    )
}

export default Header;
export { Logo }; // Here is the setup for the export to Logo for the other files to use.
export { HeaderOptions }; // Here is the setup for the export to HeaderOptions for the other files to use.
export { HeaderIcons }; // Here is the setup for the export to HeaderIcons for the other files to use.