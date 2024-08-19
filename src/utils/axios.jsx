import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: "application/json",
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MGI0ZTYwYzQwOWM3NTMxZDUxMGE2NDViOWQxMjE0YSIsIm5iZiI6MTcyMzA1MDA1NS41MzA3MDMsInN1YiI6IjY2YjNhNmZkNjA2YTdlMjdmM2UxODNlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5cvY9EsJTwugR0iAQUiZNB_i7mjnCyZCS2bsaD4wipI',
    },
});

export default instance;

