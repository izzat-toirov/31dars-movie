import { memo } from "react";
import { NavLink } from "react-router-dom";
import { Search, Home, Film, Bookmark } from "lucide-react";

export const Navigation = memo(() => {

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
        <span className="text-xs sm:text-sm mt-1">Home</span>
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
        <span className="text-xs sm:text-sm mt-1">Movies</span>
      </NavLink>

      <NavLink
        to="/bookmark"
        className={({ isActive }) =>
          `group flex flex-col items-center transition ${
            isActive ? "text-red-500" : "text-gray-500 hover:text-red-500"
          }`
        }
      >
        <Bookmark className="w-6 h-6 transition-transform group-hover:-translate-y-1" />
        <span className="text-xs sm:text-sm mt-1">BookMark</span>
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
        <span className="text-xs sm:text-sm mt-1">Search</span>
      </NavLink>
    </div>
  );
});
