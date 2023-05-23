import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moviesApiService from 'services/movies-api';
import { CastItem, ActorPhoto, ActorName } from './Cast.styled';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState('');
  const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    if (!id) {
      return;
    }
    async function getCast() {
      try {
        const credits = await moviesApiService.fetchCast(id);
        // console.log('cast', credits);
        if (credits.cast.length !== 0) {
          setCast(credits.cast);
          setError('');
        } else {
          setError("🦸‍♂️ We don't have any cast for this movie");
    
        }
      } catch (error) {
        setCast([]);
        setError(error);
      }
    }

    getCast();
  }, [id]);

  return (
    <>{
        error ? <p>{error}</p> 
        :<ul>
        {cast.map(({ cast_id, character, name, profile_path }) => (
          <CastItem key={cast_id}>
            <ActorPhoto
              src={profile_path ?           
                   `https://image.tmdb.org/t/p/w500${profile_path}`
                   : defaultImg}
              alt={name}
              width="70"
            />
            <ActorName>{name}</ActorName>
            <p>Charecter: {character}</p>
          </CastItem>
        ))}
      </ul>
    }
    </>
   
  );
};

export default Cast;
