import { memo } from "react";
import { useOutletContext } from "react-router-dom";

type OutletContextType = { ReviewData: any };

const ReviewComponent = () => {
  const { ReviewData } = useOutletContext<OutletContextType>();

  return (
    <section className="container mt-6">
      <div className="space-y-4">
        {ReviewData?.results?.length ? (
          ReviewData.results.map((review: any) => {
            const author = review.author_details;
            const avatar = author.avatar_path
              ? author.avatar_path.startsWith("/https")
                ? author.avatar_path.substring(1)
                : `https://image.tmdb.org/t/p/w185${author.avatar_path}`
              : "https://ui-avatars.com/api/?name=" + author.username;
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
  );
};

export const Review = memo(ReviewComponent);
