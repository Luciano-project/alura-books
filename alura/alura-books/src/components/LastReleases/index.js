import { books } from './releases'
import styled from "styled-components";
import { Cards } from "../Cards";
import { Title } from "../Title";

const ReleasesContainer = styled.section`
    background-color: #EBECEE;
`;

const NewBookRealeses = styled.div`
    display: flex;
    overflow-x: auto;
    justify-content: center;
    width: 100%;
    scroll-snap-type: x mandatory;
    cursor: pointer;
    background-color: #EBECEE;
    padding-top: 20px;
    padding-bottom: 20px;
`;

function LastReleases(){
    return (
        <ReleasesContainer>
            <Title fontSize="24px"
                textAlign="center"
            >LAST RELEASES
            </Title>
            <NewBookRealeses>
                <Cards>
                    {books.map( (book) => (
                    <img src = { book.src } alt="book logo"/>
                ))}
                </Cards>
            </NewBookRealeses>
        </ReleasesContainer>
    )
}

export default LastReleases;