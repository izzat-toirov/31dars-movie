import { memo, type FC } from 'react';
import { useMovie } from '../../model/useMovie';
import { createImageUrl } from '@/shared/utils';
import { Image } from 'antd';
// import { Link } from 'react-router-dom';
import { Title } from '../../../../shared/ui/title/Title';
import { NavLink } from "react-router-dom";

interface Props {
  id: string;
}

export const MovieInfo: FC<Props> = memo((props) => {
  const { id } = props;
  const { getMovieById, getMovieInfo } = useMovie();
  const { data } = getMovieById(id);
  const { data: imageData } = getMovieInfo(id, 'images');

  return (
    <div>
      <section
        className="relative min-h-[900px] flex items-end"
        style={{
          backgroundImage: `url(${createImageUrl(data?.backdrop_path)})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />

        <div className="relative z-10 container pb-6 text-white">
          <h1 className="text-4xl font-bold">{data?.title}</h1>
          {data?.budget > 0 && (
            <p className="mt-2 text-lg">{data.budget.toLocaleString()} USD</p>
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

      <section className="container flex flex-col md:flex-row py-10 gap-8">
        <div className="w-full md:w-[360px] flex-shrink-0">
          <img
            src={createImageUrl(data?.poster_path)}
            alt={data?.title}
            className="rounded-2xl shadow-lg w-full"
          />
        </div>
        <div className="flex-1 space-y-4">
          <div>
            <h1 className="text-3xl font-bold">{data?.title}</h1>
            {data?.tagline && (
              <p className="text-lg text-gray-500 italic mt-1">
                “{data.tagline}”
              </p>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
            <span>📅 {data?.release_date}</span>
            <span>⏱ {data?.runtime} min</span>
            <span>
              🎬 {data?.genres?.map((g: { name: any }) => g.name).join(', ')}
            </span>
          </div>
          <p className="text-base leading-relaxed text-gray-300">
            {data?.overview}
          </p>

          <div className="pt-4 flex flex-wrap gap-3">
            {data?.homepage && (
              <a
                href={data.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
              >
                🔗 Official Site
              </a>
            )}
            {data?.imdb_id && (
              <a
                href={`https://www.imdb.com/title/${data.imdb_id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-yellow-500 text-black rounded-xl shadow hover:bg-yellow-600 transition"
              >
                ⭐ IMDb
              </a>
            )}
          </div>
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
      <section className="container mt-10 mb-5">
        <Title>Tabs</Title>
        <div className="flex gap-6  border-gray-300">
          <NavLink
            to=""
            end
            className={({ isActive }) =>
              `pb-2 transition ${
                isActive
                  ? 'border-b-2 border-red-500 text-red-500 font-semibold'
                  : 'text-gray-600 hover:text-red-500'
              }`
            }
          >
            Review
          </NavLink>

          <NavLink
            to="cast"
            className={({ isActive }) =>
              `pb-2 transition ${
                isActive
                  ? 'border-b-2 border-red-500 text-red-500 font-semibold'
                  : 'text-gray-600 hover:text-red-500'
              }`
            }
          >
            Cast
          </NavLink>

          <NavLink
            to="other"
            className={({ isActive }) =>
              `pb-2 transition ${
                isActive
                  ? 'border-b-2 border-red-500 text-red-500 font-semibold'
                  : 'text-gray-600 hover:text-red-500'
              }`
            }
          >
            Others
          </NavLink>
        </div>
      </section>
    </div>
  );
});
