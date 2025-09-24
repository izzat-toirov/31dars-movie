import { Swiper, SwiperSlide } from "swiper/react";

const SwiperSkeleton = () => {
  return (
    <div className="container mb-[50px]">
      <Swiper
        loop={true}
        spaceBetween={10}
        className="mySwiper2 rounded-xl shadow-lg w-full h-[640px] animate-pulse"
      >
        {Array.from({ length: 3 }).map((_, i) => (
          <SwiperSlide key={i}>
            <div className="w-full h-[640px] bg-gray-300 rounded-xl"></div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        loop={true}
        spaceBetween={10}
        slidesPerView={5}
        className="mySwiper mt-4 h-20 animate-pulse"
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <SwiperSlide key={i}>
            <div className="w-full h-20 bg-gray-300 rounded-lg"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSkeleton;
