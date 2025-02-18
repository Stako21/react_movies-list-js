/* eslint-disable max-len */

import './App.scss';
// import moviesFromServer from './api/movies.json';
import movies from './api/movies.json';
import { MovieList } from './components/MovieList';

export const App = () => (
  <div className="page">
    <MovieList movies={movies} />

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
