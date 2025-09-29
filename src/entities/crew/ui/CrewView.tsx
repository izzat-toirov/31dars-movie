import { memo, useState } from "react";
import { useCrew } from "../model/useCrew";
import { useParams } from "react-router-dom";
import { createImageUrl } from "../../../shared/utils";

export const CrewView = memo(() => {
  const { id } = useParams();
  const { getCrewById } = useCrew();
  const { data } = getCrewById(id as string);

  const [showMore, setShowMore] = useState(false);

  const biography = data?.biography || "No biography available.";
  const shortBio = biography.length > 400 ? biography.slice(0, 400) + "..." : biography;

  const profileImage = data?.profile_path
    ? createImageUrl(data.profile_path)
    : "https://via.placeholder.com/500x750?text=No+Image";

  return (
    <div className="container py-10">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="flex justify-center">
          <img
            src={profileImage}
            alt={data?.name || "No image"}
            className="rounded-xl shadow-lg w-[400px] min-w-[300px] object-cover"
          />
        </div>

        <div>
          <h1 className="font-bold text-3xl mb-4">{data?.name}</h1>
          <p className="text-gray-600 leading-relaxed">
            {showMore ? biography : shortBio}
          </p>

          {biography.length > 400 && (
            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-4 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition"
            >
              {showMore ? "See Less" : "See More"}
            </button>
          )}
        </div>
      </section>
    </div>
  );
});
