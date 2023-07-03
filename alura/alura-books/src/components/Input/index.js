import styled from "styled-components"

const Input = styled.input`
        border: 1px solid #FFF;
        background: transparent;
        border: 1px solid #FFF;
        border-radius: 50px;
        color: #FFF;
        font-size: 16px;
       
        text-align: center;
        padding: 20px 100px;

        &::placeholder {
                color: #FFF;
                font-size: 16px;
        }
        @media (max-width: 580px) {
                transition: 0.5s;
                padding: 20px 50px;
        }
        @media (max-width: 330px) {
                transition: 0.5s;
                padding: 20px 20px;
                placeholder: none;
        }
`;

export default Input