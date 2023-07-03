import logo from '../../img/logo.svg'
import styled from 'styled-components';

/*
    To build components in React, we should create functions.
    This allows us to reuse the code in other parts of the
    application in a easy way.
*/
const LogoDiv = styled.div`
  display: flex;
  align-items: center;

`	;
const LogoImg = styled.img`
  margin-left: 10px;
  margin-right: 10px;
`;
const LogoText = styled.p`
  font-size: 30px;
`;
function Logo(){
    return (
    <LogoDiv>
        <LogoImg
          src={logo}
          alt='logo'
        />
        <LogoText><strong>AluraBooks</strong></LogoText>

    </LogoDiv>
    )
}

export default Logo; // Here is the setup for the export to Logo for the other files to use.