import { MovieInfo, useMovie } from '@/entities/movie';
import { MovieList } from '@/widgets/movie-list';
import { memo, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';

export const MovieDetail = memo(() => {
  const { id } = useParams();
  const { getMovieInfo } = useMovie();
  const { data, isLoading } = getMovieInfo(id as string, 'similar');
  const { data: ReviewData } = getMovieInfo(id as string, 'reviews');
  console.log(ReviewData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div>
      <MovieInfo id={id as string} />
      <Outlet context={{ ReviewData }}/>

      <MovieList
        movies={data?.results.slice(0, 4) || []}
        isLoading={isLoading}
      />
    </div>
  );
});
