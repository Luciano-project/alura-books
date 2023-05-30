import HeaderOptions from '../HeaderOptions/index'
import HeaderIcons from '../HeaderIcons/index'
import Logo from '../Logo/logo'
import styled from 'styled-components'

// This is the setup for the HeaderContainer
// Using this way, we are able to style the HeaderContainer
const HeaderContainer = styled.header`
    background-color: #ffffff;
    display: flex;
    justify-content: center;
`
function Header ()
{
    return(
        <HeaderContainer>
            <Logo />
            <HeaderOptions />
            <HeaderIcons />
        </HeaderContainer>
    )
}

export default Header;
export { Logo }; // Here is the setup for the export to Logo for the other files to use.
export { HeaderOptions }; // Here is the setup for the export to HeaderOptions for the other files to use.
export { HeaderIcons }; // Here is the setup for the export to HeaderIcons for the other files to use.