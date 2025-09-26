import { memo } from 'react';
import { useMovie } from '../../../entities/movie';
import { MovieList } from '../../../widgets/movie-list';
import { useSearchParams } from 'react-router-dom';
import { MoviePagination } from '../../../features/movie-pagination';
import { MovieSort } from '../../../features/movie-sort';
import { MovieGenre } from '../../../features/movie-genre';

const staticGenres = [
  { id: 16, name: 'Animation' },
  { id: 53, name: 'Thriller' },
  { id: 28, name: 'Action' },
  { id: 35, name: 'Comedy' },
];

export const Movie = memo(() => {
  const { getMovies } = useMovie();
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') ?? '1';
  const sort_by = searchParams.get('sort') ?? 'popularity.desc';
  const with_genres = searchParams.get('genre') ?? '16';
  const { data, isLoading } = getMovies({
    page: page as string,
    sort_by,
    with_genres,
  });

  return (
    <div className="About">
      <div className="container">
        <h2 className="inline-block bg-red-600 text-white text-sm md:text-base font-semibold px-4 py-2 rounded-full shadow-md mb-5">
          Total: {data?.total_results?.toLocaleString()}
        </h2>

        <div className="flex flex-col gap-3 md:flex-row md:gap-6 md:items-center mb-6">
          <MovieSort />
          <MovieGenre genres={staticGenres} />
        </div>
      </div>
      <MovieList movies={data?.results || []} isLoading={isLoading} />

      <div className="flex justify-center mt-6">
        <MoviePagination page={page} total_pages={data?.total_results} />
      </div>
    </div>
  );
});
