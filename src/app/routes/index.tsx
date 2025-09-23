import { lazy, memo } from 'react';
import { useRoutes } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
const Home = lazy(()=> import("@/pages/home"))
const Movie = lazy(()=> import("@/pages/movie"))
const BookMark = lazy(()=> import("@/pages/bookmark"))
const Search = lazy(()=> import("@/pages/Search"))
const MovieDetail = lazy(()=> import("@/pages/movie-detail"))

const AppRouter = () => {
  const router = useRoutes([
    {path: "/", element: <MainLayout/>, children: [
      {path: "", element: <Home/>},
      {path: "/movie", element: <Movie/>},
      {path: "/bookMark", element: <BookMark/>},
      {path: "/search", element: <Search/>},
      {path: "/movie/:id", element: <MovieDetail/>}
    ]}
  ])
  return router
};

export default memo(AppRouter);