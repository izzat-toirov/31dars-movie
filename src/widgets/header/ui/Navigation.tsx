import { memo } from "react";
import { NavLink } from "react-router-dom";
import { Search, Home, Film, Bookmark } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";

export const Navigation = memo(() => {
  const { t } = useTranslation();
  const cart = useSelector((state: RootState) => state.cart.value);

  return (
    <div
      className="
        flex items-center justify-around
        fixed bottom-0 left-0 right-0 bg-black 
        sm:static sm:justify-center sm:gap-8 sm:bg-transparent 
      "
    >
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `group flex flex-col items-center transition ${
            isActive ? "text-red-500" : "text-gray-500 hover:text-red-500"
          }`
        }
      >
        <Home className="w-6 h-6 transition-transform group-hover:-translate-y-1" />
        <span className="text-xs sm:text-sm mt-1">
          {t("header.navigation.home")}
        </span>
      </NavLink>

      <NavLink
        to="/movie"
        className={({ isActive }) =>
          `group flex flex-col items-center transition ${
            isActive ? "text-red-500" : "text-gray-500 hover:text-red-500"
          }`
        }
      >
        <Film className="w-6 h-6 transition-transform group-hover:-translate-y-1" />
        <span className="text-xs sm:text-sm mt-1">
          {t("header.navigation.movies")}
        </span>
      </NavLink>

      <NavLink
        to="/bookmark"
        className={({ isActive }) =>
          `relative group flex flex-col items-center transition ${
            isActive ? "text-red-500" : "text-gray-500 hover:text-red-500"
          }`
        }
      >
        <Bookmark className="w-6 h-6 transition-transform group-hover:-translate-y-1" />
        {cart.length > 0 && (
          <span
            className="
              absolute -top-1 -right-2
              bg-red-500 text-white text-xs font-bold
              rounded-full w-5 h-5 flex items-center justify-center
            "
          >
            {cart.length}
          </span>
        )}
        <span className="text-xs sm:text-sm mt-1">
          {t("header.navigation.bookmark")}
        </span>
      </NavLink>

      <NavLink
        to="/search"
        className={({ isActive }) =>
          `group flex flex-col items-center transition ${
            isActive ? "text-red-500" : "text-gray-500 hover:text-red-500"
          }`
        }
      >
        <Search className="w-6 h-6 transition-transform group-hover:-translate-y-1" />
        <span className="text-xs sm:text-sm mt-1">
          {t("header.navigation.search")}
        </span>
      </NavLink>
    </div>
  );
});
