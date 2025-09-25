import { memo, type FC } from "react";
import { useMovie } from "../../model/useMovie";
import { createImageUrl } from "@/shared/utils";
import { Image } from "antd";

interface Props {
  id: string;
}

export const MovieInfo: FC<Props> = memo((props) => {
  const { id } = props;
  const { getMovieById, getMovieInfo } = useMovie();
  const { data } = getMovieById(id);
  const { data: imageData } = getMovieInfo(id, "images");

  return (
    <div>
      <section
        className="relative min-h-[900px] flex items-end"
        style={{
          backgroundImage: `url(${createImageUrl(data?.backdrop_path)})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />

        <div className="relative z-10 container pb-6 text-white">
          <h1 className="text-4xl font-bold">{data?.title}</h1>
          {data?.budget && (
            <p className="mt-2 text-lg">
              {data.budget.toLocaleString()} USD
            </p>
          )}
          {data?.homepage && (
            <a
              href={data.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition"
            >
              Official Site
            </a>
          )}
        </div>
      </section>

      <section className="flex overflow-x-auto gap-3 container mt-6 pb-4">
        {imageData?.backdrops?.slice(0, 20)?.map((item: any, inx: number) => (
          <Image
            key={inx}
            className="min-w-[200px] rounded-lg shadow-md"
            src={createImageUrl(item.file_path)}
            alt=""
          />
        ))}
      </section>
    </div>
  );
});
