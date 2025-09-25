import { memo } from 'react';
import { useMovie } from '../../../entities/movie';
import { MovieList } from '../../../widgets/movie-list';
import { useSearchParams } from 'react-router-dom';
import { MoviePagination } from '../../../features/movie-pagination';
import { MovieSort } from '../../../features/movie-sort';
import { MovieGenre } from '../../../features/movie-genre';

const staticGenres = [
  { id: 16, name: "Animation" },
  { id: 53, name: "Thriller" },
  { id: 28, name: "Action" },
  { id: 35, name: "Comedy" },
];

export const Movie = memo(() => {
  const {getMovies} = useMovie()
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") ?? "1";
  const sort_by = searchParams.get("sort") ?? "popularity.desc";
  const with_genres = searchParams.get("genre") ?? "16";
  const {data, isLoading} = getMovies({ page: page as string, sort_by, with_genres  })
  return (
    <div className="About">
      <div className="container">
        <h2>Total: {data?.total_results?.toLocaleString()}</h2>
        <MovieSort/>
        <MovieGenre genres={staticGenres}/>
      </div>
      <MovieList
        movies={data?.results || []}
        isLoading={isLoading}
      />
      <MoviePagination page={page} total_pages={data?.total_results} />
    </div>
  );
});
