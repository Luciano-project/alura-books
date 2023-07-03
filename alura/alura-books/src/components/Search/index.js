import Input from "../Input";
import styled from "styled-components";
import { useState } from "react";
import { Cards } from "../Cards";
import { useEffect } from "react";
import { getBooks } from "../../services/books";
import { postFavorites } from "../../services/favorites";

const SearchContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    width: 100%;
    padding: 50px 0px;
`;
const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    align-items: center;
`;
const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;
    text-align: center;
    padding: 0 100px;
    p {
        width: 200px;
        color: #FFF;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`;
const Title = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
`;
const SubTitle = styled.h3`
    font-size: 16px;
`;
const Text = styled.p`
    margin-bottom: 15px;
`;
function Search() {
    const [searchedBooks, setSearchedBooks] = useState([]);
    const [Books, setBooks] = useState([]);

    // It will be executed when the component is mounted
    async function fetchBooks() {
        const apiBooks = await getBooks();
        setBooks(apiBooks);
    }
    async function insertFavorite(id) {
        await postFavorites(id);
        alert(`Book ${id} added to favorites!`);
    }

    useEffect( () => {
        fetchBooks();
    }, []);


    return(
        <SearchContainer>
            <Title>Do you know where to start?</Title>
            <SubTitle>Find your book in our library.</SubTitle>
            <Input
                placeholder="Search for a book"
                onBlur = { event => {
                    const searched = event.target.value;
                    //console.log(Books);
                    const result = Books.length > 0 ? Books.filter((book) => book.title.includes(searched)) : [];
                    //console.log(result);
                    setSearchedBooks(result);
                }}
            />
            <CardsContainer>
                <Cards>{searchedBooks.map(( book ) => (
                    <Card onClick={() => insertFavorite(book.id)}>
                        <Text>{ book.title }</Text>
                        <br />
                        <img src={ book.src } alt="book logo" />
                    </Card>
                    ))}
                </Cards>
            </CardsContainer>
        </SearchContainer>
    )
}

export default Search;