import axios from "axios";

const API_KEY = "0dd8a44a838b85596fd1a072a37c7f7d";
const BASE_URL = "https://api.themoviedb.org/3/";

async function fetchTrandingMovies () {
const searchParams = new URLSearchParams({
    api_key: API_KEY,
    page:1
});

const url=`${BASE_URL}trending/movie/day?${searchParams}`;

const response = await axios.get(url);
const movies = response.data;
return movies;

};

async function fetchSearchingMovies (queryString) {
    const searchParams = new URLSearchParams({
        api_key: API_KEY,
        page:1, 
        query: queryString

    });
    const url=`${BASE_URL}search/movie?${searchParams}`;
    const response = await axios.get(url);
    const movies = response.data;
    return movies;
    
    };

async function fetchMovie (id) {
    const searchParams = new URLSearchParams({
        api_key: API_KEY

    });
    
    const url=`${BASE_URL}movie/${id}?${searchParams}`;
    const response = await axios.get(url);
    const movie = response.data;
    return movie;

};

async function fetchReviews (id) {
    const searchParams = new URLSearchParams({
        api_key: API_KEY,
        page: 1

    });
    const url=`${BASE_URL}movie/${id}/reviews?${searchParams}`;
    const response = await axios.get(url);
    const reviews = response.data;
    return reviews;

};

async function fetchCast (id) {
    const searchParams = new URLSearchParams({
        api_key: API_KEY

    });

    const url=`${BASE_URL}movie/${id}/credits?${searchParams}`;
    const response = await axios.get(url);
    const credits = response.data;
    return credits;

};

const api = {fetchTrandingMovies, fetchSearchingMovies, fetchMovie, fetchReviews, fetchCast};
export default api;