import { useState, useEffect, useRef, Suspense } from 'react';
import {useParams, Outlet, useLocation} from 'react-router-dom';
import { getYear } from 'date-fns';
import { IoArrowBackCircleSharp } from 'react-icons/io5';
import moviesApiService from 'services/movies-api';
import { BackLink, MovieCard, MovieImage, MovieInfo, InfoLink, MovieNav} from './MovieDetails.styled';

const MovieDetails = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState([]);
    const [error, setError] = useState('');
    const location = useLocation();
    const backLink = useRef(location.state?.from ?? '/');

    useEffect(() => {
        if (!id) {
          return;
        }
        async function getMovieDetails() {
          try {
            const movie = await moviesApiService.fetchMovie(id);
            setMovie(movie);
            setError('');
    
          } catch (error) {
            setMovie([]);
            setError(error);
          }
        };

        getMovieDetails();
        
      }, [id]);
    
      const { title, overview, vote_average, release_date, poster_path, genres } = movie;
      const year = getYear(new Date(release_date));
      let genreList = '';
      if (movie.length !== 0) {
          genreList = genres.map(genre => genre.name).join(' ') ?? '';
      };

      const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

    return (
    <>
        <BackLink to={backLink.current}>
        <IoArrowBackCircleSharp style={{ marginRight: 8, width: '20', height: '20' }}/>
          Go back</BackLink>
        {movie.length===0 || error ? <p>There are no such movie</p>
        : <div>
        <MovieCard>
        <MovieImage src={poster_path ?
          `https://image.tmdb.org/t/p/w500${poster_path}` 
          : defaultImg} alt={title} width='200'/>
        <MovieInfo>
            <h2>{title} ({year})</h2>
            <p>User Score: {Math.round(vote_average *10)}% </p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
         <p>{genreList}</p>
        </MovieInfo>
        </MovieCard>
        <hr/>
        <h3>Additional information</h3>
        <MovieNav>
          <li>
            <InfoLink to='cast'>Cast</InfoLink>
          </li>
          <li>
            <InfoLink to='reviews'>Reviews</InfoLink>
          </li>
        </MovieNav>
        <hr/>
        <Suspense fallback={<div>Loading...</div>}>
        <Outlet/>
        </Suspense>
        </div>}
        
    </>
    )
}

export default MovieDetails;