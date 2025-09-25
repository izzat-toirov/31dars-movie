import { memo } from "react";
import { CrewView, useCrew } from "../../../entities/crew";
import { useParams } from "react-router-dom";
import { MovieList } from "../../../widgets/movie-list";

export const CrewDetail = memo(() => {
    const {id} = useParams()
    const {getCrewsMovieById} = useCrew()
    const {data: movies} = getCrewsMovieById(id as string)
    return (
      <div>
        <CrewView/>
        <MovieList movies={movies?.cast}/>
      </div>
    )
  })
