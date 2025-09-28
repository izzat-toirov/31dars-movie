import { memo, useState } from "react";
import { useSearchMovie } from "../model/useSearchMovie";
import { MovieList } from "@/widgets/movie-list";
import { Empty, Input } from "antd";
import useDebounce from "@/shared/hooks/useDebounce";

export const SearchMovie = memo(() => {
  const [value, setValue] = useState("");
  const { getMovieBySearch } = useSearchMovie();
  const debounceValue = useDebounce(value, 800);
  const { data, isFetching } = getMovieBySearch({ query: debounceValue });

  return (
    <div className="min-h-[65.4vh]">
      <div className="container">
        <Input value={value} onChange={(e) => setValue(e.target.value)} />
        <br />
        <br />
      </div>
      <MovieList movies={data?.results} />
      {
        (!data?.results?.length && debounceValue && !isFetching) && <Empty/>
      }
    </div>
  );
});
