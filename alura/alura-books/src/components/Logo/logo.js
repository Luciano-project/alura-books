import logo from '../../img/logo.svg'
import styled from 'styled-components';

/*
    To build components in React, we should create functions.
    This allows us to reuse the code in other parts of the
    application in a easy way.
*/
const LogoDiv = styled.div`
  display: flex;
  font-size: 30px;
`	
const LogoImg = styled.img`
  margin-left: 10px;
  margin-right: 10px;
`
function Logo(){
    return (
    <LogoDiv>
        <LogoImg
        src={logo}
        alt='logo'
        />
        <p><strong>AluraBooks</strong></p>

    </LogoDiv>
    )
}

export default Logo; // Here is the setup for the export to Logo for the other files to use.