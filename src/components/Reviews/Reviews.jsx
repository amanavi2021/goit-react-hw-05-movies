import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moviesApiService from 'services/movies-api';
import { ReviewsItem, ReviewAuthor } from './Reviews.styled';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!id) {
      return;
    }
    async function getReviews() {
      try {
        const reviews = await moviesApiService.fetchReviews(id);
        if (reviews.results.length !== 0) {
          setReviews(reviews.results);
          setError('');
        } else {
          setError("👨‍💻 We don't have any reviews for this movie");
        }

      } catch (error) {
        setReviews([]);
        setError(error);
      }
    }

    getReviews();
  }, [id]);

  return (
    <>
      {error ? <p>{error}</p> : 
     <ul>
     {reviews.map(({ author, content }) => (
       <ReviewsItem key={author}>
         <ReviewAuthor>Author: {author}</ReviewAuthor>
         <p>{content}</p>
       </ReviewsItem>
     ))}
   </ul>
    }
    </>
   
    
  );
};

export default Reviews;
