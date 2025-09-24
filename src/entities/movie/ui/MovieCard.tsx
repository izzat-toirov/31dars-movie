import { createImageUrl } from "@/shared/utils";
import { memo, type FC } from "react";
import type { IMovie } from "../model/types";
import { useNavigate } from "react-router-dom";
import MovieCardSkeleton from "./skeleton/MovieSkeleton";

interface Props {
  movie?: IMovie;       // movie optional qilindi
  isLoading?: boolean;  // skeleton uchun
}

export const MovieCard: FC<Props> = memo(({ movie, isLoading }) => {
  const navigate = useNavigate();

  if (isLoading || !movie) {
    return <MovieCardSkeleton />;
  }

  return (
    <div
      className="bg-white dark:bg-slate-900 mt-5 rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
      onClick={() => navigate(`/movie/${movie.id}`)}
    >
      {/* Poster */}
      <img
        src={createImageUrl(movie.poster_path)}
        alt={movie.title}
        className="w-full h-[360px] object-cover"
      />

      {/* Info */}
      <div className="p-3">
        <h3
          className="line-clamp-1 font-medium text-2xl"
          title={movie.title}
        >
          {movie.title}
        </h3>
        {movie.vote_average !== 0 && (
          <p className="text-sm text-gray-500 mt-1">
            ⭐ {movie.vote_average.toFixed(1)}
          </p>
        )}
      </div>      
    </div>
  );
});

export default MovieCard;
