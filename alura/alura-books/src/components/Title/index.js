import styled from 'styled-components'

export const Title = styled.h2`
    overflow-x: auto;
    padding: 30px 0px 30px 0px;
    background-color: #FFF;
    color: ${props => props.color || '#EB9B00'};
    font-size: ${props => props.fontSize || '18px'};
    text-align: ${props => props.textAlign || 'center'};
    margin: 0;
`;