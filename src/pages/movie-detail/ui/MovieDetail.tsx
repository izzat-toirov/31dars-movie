import { MovieInfo, useMovie } from "@/entities/movie"
import { MovieList } from "@/widgets/movie-list"
import { memo } from "react"
import { useParams } from "react-router-dom"

export const MovieDetail = memo(() => {
  const {id} = useParams()
  const {getMovieInfo} = useMovie()
  const {data, isLoading} = getMovieInfo(id as string, "similar")
  const { data: ReviewData } = getMovieInfo(id as string, "reviews");
  console.log(ReviewData);

  
  return (
    <div>
      <MovieInfo id={id as string}/>
      <MovieList
        movies={data?.results.slice(0, 4) || []}
        isLoading={isLoading}
      />
    </div>
  )
})
