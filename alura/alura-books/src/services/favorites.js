import axios from 'axios';

const booksApi = axios.create({baseURL: 'http://localhost:8000/favorites'});

async function getFavorites () {
    const response = await booksApi.get('/');
    return response.data;
}

async function postFavorites (id) {
    await booksApi.post(`/${id}`);

}
async function deleteFavorites (id) {
    await booksApi.delete(`/${id}`);

}
export {
    getFavorites,
    postFavorites,
    deleteFavorites,
}