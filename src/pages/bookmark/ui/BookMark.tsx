import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import { MovieList } from "@/widgets/movie-list";

const BookmarkPage = () => {
  const cart = useSelector((state: RootState) => state.cart.value);

  return (
    <div className="p-5">
      {!cart.length ? (
        <div className="flex flex-col items-center justify-center h-[70vh] text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4076/4076500.png"
            className="w-40 mb-6 opacity-80"
            alt="Empty bookmark"
          />
          <h2 className="text-2xl font-semibold mb-3">
            Hali bookmark qo‘shilmagan 🔖
          </h2>
          <p className="text-gray-500">
            Sevimli filmlaringizni saqlang va keyinroq ko‘ring.
          </p>
        </div>
      ) : (
        <MovieList movies={cart} />
      )}
    </div>
  );
};

export default BookmarkPage;
