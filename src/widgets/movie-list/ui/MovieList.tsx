import { MovieCard, type IMovie } from "@/entities/movie";
import MovieCardSkeleton from "@/entities/movie/ui/skeleton/MovieSkeleton";
import { memo, type FC } from "react";

interface Props {
  movies: IMovie[];
  isLoading?: boolean;
}

export const MovieList: FC<Props> = memo((props) => {
  const { movies, isLoading } = props;

  return (
    
    <div className="container grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
      {isLoading
        ? Array.from({ length: 8 }).map((_, i) => <MovieCardSkeleton key={i} />)
        : movies?.map((item: IMovie) => <MovieCard key={item.id} movie={item} />)}
    </div>
  );
});
