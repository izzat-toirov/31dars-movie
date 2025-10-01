import type { RootState } from "@/app/store";
import { MovieList } from "@/widgets/movie-list";
import { memo } from "react";
import { useSelector } from "react-redux";

export const BookmarkPage = memo(() => {
  const cart = useSelector((state: RootState) => state.cart.value);

  return (
    <div className="p-5 min-h-[65.2vh]">
      {!cart.length ? (
        <div className="flex flex-col items-center justify-center min-h-[360px] text-center">
          <h2 className="text-2xl font-semibold mb-3">
            Saqlangan filimlar topilmadi
          </h2>
        </div>
      ) : (
        <MovieList movies={cart} />
      )}
    </div>
  );
});

