import React, {createContext, useState} from 'react';
import api from '../Api';

const cineContext = createContext({movies: {}});

export const CineProvider = ({children}) => {
  const [movies, setMovies] = useState([]);
  const favorites = [];

  async function searchMovies(data) {
    try {
      const response = await api.get(`${data}`);

      setMovies(response.data.Search);
    } catch (err) {
      console.log(err, err.response);
    }
  }

  return (
    <cineContext.Provider value={{movies, searchMovies, favorites}}>
      {children}
    </cineContext.Provider>
  );
};

export default cineContext;
