let movies = [
  {
    id: "0",
    name: "avengers",
    score: 8
  },
  {
    id: "1",
    name: "parasite",
    score: 99
  },
  {
    id: "2",
    name: "logan",
    score: 90
  },
  {
    id: "3",
    name: "the godfather I",
    score: 8
  },
];

export const getMovies = () => movies;

export const getById = id => {
  const filteredMovies = movies.filter(movie => movie.id === id);
  return filteredMovies[0];
};

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== id);
  if(movies.length > cleanedMovies) {
    movie = cleanedMovies;
    return true;
  }  else {
    return false;
  }
};


export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
}