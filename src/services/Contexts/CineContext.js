import React, {createContext, useState, useEffect} from 'react';

import api from '../Api';

const cineContext = createContext({movies: {}});

export const CineProvider = ({children}) => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  async function searchMovies(data) {
    console.log(`${data } siim`);

    const response = await api.get(`${data}`);

    setMovies(response.data.Search);
  }

  console.log(movies);

  return (
    <cineContext.Provider value={{movies, searchMovies}}>
      {children}
    </cineContext.Provider>
  );
};

export default cineContext;
