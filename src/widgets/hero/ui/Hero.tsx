import { memo, useState, type Key } from 'react'

// import { MovieList } from '../../movie-list';
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useMovie } from '../../../entities/movie';

export const Hero = memo(() => {
  const { getMovies } = useMovie();
  const { data } = getMovies();
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  //  console.log(data?.results?.slice(0, 6));

  return (
    <div className="container mb-[50px]">
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          } as React.CSSProperties
        }
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 rounded-xl shadow-lg w-full h-[640px]"
      >
        {data?.results?.map((movie: { id: Key | null | undefined; backdrop_path: any; title: string | undefined; }) => (
          <SwiperSlide key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
              className="w-full h-[640px] object-cover rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mt-4 h-20"
      >
        {data?.results?.map((movie: { id: Key | null | undefined; poster_path: any; title: string | undefined; }) => (
          <SwiperSlide key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-20 object-cover rounded-lg cursor-pointer"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
});
