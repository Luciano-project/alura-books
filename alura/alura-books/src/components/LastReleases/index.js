import { books } from './releases'
import styled from "styled-components";
import { Cards } from "../Cards";
import { Title } from "../Title";

const ReleasesContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`;

const NewBookRealeses = styled.div`
    padding-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
    background-color: #EBECEE;
`

function LastReleases(){
    return (
        <section>
            <Title fontSize="24px"
                textAlign="center"
            >LAST RELEASES
            </Title>
            <NewBookRealeses>
                <Cards>
                    {books.map((book) => (
                    <img src={book.src} alt="book logo"/>
                ))}
                </Cards>
            </NewBookRealeses>
        </section>
    )
}

export default LastReleases;