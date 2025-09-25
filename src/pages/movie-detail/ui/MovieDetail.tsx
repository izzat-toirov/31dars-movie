import { MovieInfo, useMovie } from '@/entities/movie';
import { MovieList } from '@/widgets/movie-list';
import { memo } from 'react';
import { useParams } from 'react-router-dom';

export const MovieDetail = memo(() => {
  const { id } = useParams();
  const { getMovieInfo } = useMovie();
  const { data, isLoading } = getMovieInfo(id as string, 'similar');
  const { data: ReviewData } = getMovieInfo(id as string, 'reviews');
  console.log(ReviewData);

  return (
    <div>
      <MovieInfo id={id as string} />

      <section className="container mt-6">
        <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
        <div className="space-y-4">
          {ReviewData?.results?.length ? (
            ReviewData.results.map((review: any) => {
              const author = review.author_details;
              const avatar = author.avatar_path
                ? author.avatar_path.startsWith('/https')
                  ? author.avatar_path.substring(1)
                  : `https://image.tmdb.org/t/p/w185${author.avatar_path}`
                : 'https://ui-avatars.com/api/?name=' + author.username;
              return (
                <div
                  key={review.id}
                  className="flex gap-4 p-4 border rounded-lg shadow-sm bg-black"
                >
                  <img
                    src={avatar}
                    alt={author.username}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold">
                        {author.name || review.author}
                      </h3>
                      {author.rating && (
                        <span className="text-yellow-500 font-medium">
                          ⭐ {author.rating}/10
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">
                      {new Date(review.created_at).toLocaleDateString()}
                    </p>
                    <p className="mt-2 line-clamp-4">{review.content}</p>
                    <a
                      href={review.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 text-sm"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              );
            })
          ) : (
            <p>No reviews found.</p>
          )}
        </div>
      </section>

      <MovieList
        movies={data?.results.slice(0, 4) || []}
        isLoading={isLoading}
      />
    </div>
  );
});
