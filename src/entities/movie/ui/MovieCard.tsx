import { createImageUrl } from '@/shared/utils';
import { memo, type FC } from 'react';
import type { IMovie } from '../model/types';
import { useNavigate } from 'react-router-dom';
import MovieCardSkeleton from './skeleton/MovieSkeleton';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../../app/store';
import { toggleCart } from '@/app/store/cartSlice';

interface Props {
  movie?: IMovie;
  isLoading?: boolean;
}

export const MovieCard: FC<Props> = memo(({ movie, isLoading }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.value);

  if (isLoading || !movie) {
    return <MovieCardSkeleton />;
  }

  return (
    <div className="bg-white dark:bg-slate-900 mt-5 rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer">
      <img
        onClick={() => navigate(`/movie/${movie.id}`)}
        src={createImageUrl(movie.poster_path)}
        alt={movie.title}
        className="w-full h-[360px] object-cover"
      />

      <div className="p-3 relative">
        <h3 className="line-clamp-1 font-medium text-2xl" title={movie.title}>
          {movie.title}
        </h3>

        {movie.vote_average !== 0 && (
          <p className="text-sm text-gray-500 mt-1">
            ⭐ {movie.vote_average}
          </p>
        )}

        {movie.release_date && (
          <strong className="absolute left-2 bottom-100 bg-red-500 text-white rounded-xl px-2">
            {movie.release_date.split('-')[0]}
          </strong>
        )}

        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(toggleCart(movie));
          }}
          className="absolute top-3 right-3 p-2 bg-white dark:bg-slate-800 rounded-full shadow-md hover:scale-110 transition"
        >
          {cart.some((pro: { id: number }) => pro.id === movie.id) ? (
            <FaBookmark className="text-red-500 text-2xl" />
          ) : (
            <FaRegBookmark className="text-gray-600 dark:text-gray-300 text-2xl" />
          )}
        </button>
      </div>
    </div>
  );
});

