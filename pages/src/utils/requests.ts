const API_KEY = process.env.TMDB_API_KEY

const requests = {
  trending: {
    title: 'Trending',
    url: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
  },
  'top-rated': {
    title: 'Top Rated',
    url: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
  },
  'action-movies': {
    title: 'Action',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=pt-BR`,
  },
  'comedy-movies': {
    title: 'Comedy',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=pt-BR`,
  },
  'horror-movies': {
    title: 'Horror',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=pt-BR`,
  },
  'romance-movies': {
    title: 'Romance',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=pt-BR`,
  },
  'mystery-movies': {
    title: 'Mystery',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648&language=pt-BR`,
  },
  'scifi-movies': {
    title: 'Sci-Fi',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878&language=pt-BR`,
  },
  'western-movies': {
    title: 'Western',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=37&language=pt-BR`,
  },
  'animation-movies': {
    title: 'Animation',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16&language=pt-BR`,
  },
  'tv-movie': {
    title: 'TV Movie',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10770&language=pt-BR`,
  },
}

export default requests
