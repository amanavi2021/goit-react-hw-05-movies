import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getYear } from 'date-fns';
import moviesApiService from 'services/movies-api';


const Movies = () => {

const [searchQuery, setSearchQuery] = useState('');
const [searchingMovies, setSearchingMovies] = useState([]);
const [error, setError] = useState('');
const location = useLocation();
const [searchParams, setSearchParams] = useSearchParams();
const query = searchParams.get('query') ?? '';
// console.log('query', query);

const updateQueryString = event => {
   const newQuery = event.currentTarget.value.toLowerCase();
   const newParams = newQuery !== '' ? {query: newQuery} : {};
   setSearchParams(newParams);
    // setSearchQuery(event.currentTarget.value.toLowerCase());
    
};

const handleSubmit = event => {
    event.preventDefault();
    
    // console.log('query', );
    setSearchQuery(query);

    if(query.trim() === '') {
        return alert('🦄 Please enter text to search movies');
    };

    // setSearchParams({query: searchQuery});
};

useEffect(() => {
    async function getSearchingMovies() {
      try {
        const movies = await moviesApiService.fetchSearchingMovies(searchQuery);
        // console.log('find', movies);
        if (movies.results.length !==0) {
          setSearchingMovies(movies.results);
          setError('');
        } else {
          setError("🙅‍♀️ Unfortunately there are no such movies");
        }
        
      } catch (error) {
        setSearchingMovies([]);
        setError(error);
      }
    }
    if (searchQuery) {
        getSearchingMovies();
    };
    
  }, [searchQuery]);


  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          value={query}
          onChange={updateQueryString}
        />
         <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>
      </form>
      {error ? <p>{error}</p> 
      :  <ul>{
        searchingMovies.map(({id, title, release_date}) => 
            <li key={id}>
                <Link to={`${id}`} state={{ from: location}}>{title} ({getYear(new Date(release_date))})</Link>
            </li>
        )}
    </ul>} 
    </div>
  );
};

export default Movies;
