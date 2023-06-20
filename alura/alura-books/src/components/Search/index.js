import Input from "../Input";
import styled from "styled-components";
import { useState } from "react";
import { books } from './searchData'
import { Cards } from "../Cards";

const SearchContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`;

const Title = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`;

const SubTitle = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`;

const Text = styled.p`
    margin-bottom: -15px;
`;

function Search() {
    const [searchedBooks, setSearchedBooks] = useState([]);

    return(
        <SearchContainer>
            <Title>From where do you know to start?</Title>
            <SubTitle>Find your book in our library.</SubTitle>
            <Input
                placeholder="Search for a book"
                onBlur={event => {
                    const searched = event.target.value;
                    const result = books.filter(book => book.title.includes(searched));
                    setSearchedBooks(result);
                }}
            />
                <Cards>{searchedBooks.map((book) => (
                    <p>
                        <Text>{book.title}</Text>
                        <br />
                        <img src={book.src} alt="book logo" />
                    </p>
                    ))}
                </Cards>
        </SearchContainer>
    )
}

export default Search;