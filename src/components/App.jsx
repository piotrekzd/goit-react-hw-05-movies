import { lazy } from "react";
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { NotFound } from '../pages/NotFound';

const HomePage = lazy(() => import('../pages/HomePage'));
const Movies = lazy(() => import('../pages/MoviesPage'));
const DetailsPage = lazy(() => import('../pages/DetailsPage'));
const Cast= lazy(() => import('./Cast/Cast'));
const Reviews= lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<DetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
