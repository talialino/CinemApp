import React, {createContext, useState, useEffect} from 'react';

import api from '../Api';

const cineContext = createContext({movies: {}});

export const CineProvider = ({children}) => {
  const [movies, setMovies] = useState([]);
  const favorites = [];

  async function searchMovies(data) {
    const response = await api.get(`${data}`);

    setMovies(response.data.Search);
  }

  return (
    <cineContext.Provider value={{movies, searchMovies, favorites}}>
      {children}
    </cineContext.Provider>
  );
};

export default cineContext;
