const requests: Requests = {
  trending: {
    title: 'Trending',
    url: `/trending/all/week`,
  },
  'top-rated': {
    title: 'Top Rated',
    url: `/movie/top_rated`,
  },
  'action-movies': {
    title: 'Action',
    url: `/discover/movie?with_genres=28`,
  },
  'comedy-movies': {
    title: 'Comedy',
    url: `/discover/movie?with_genres=35`,
  },
  'horror-movies': {
    title: 'Horror',
    url: `/discover/movie?with_genres=27`,
  },
  'romance-movies': {
    title: 'Romance',
    url: `/discover/movie?with_genres=10749`,
  },
  'mystery-movies': {
    title: 'Mystery',
    url: `/discover/movie?with_genres=9648`,
  },
  'scifi-movies': {
    title: 'Sci-Fi',
    url: `/discover/movie?with_genres=878`,
  },
  'western-movies': {
    title: 'Western',
    url: `/discover/movie?with_genres=37`,
  },
  'animation-movies': {
    title: 'Animation',
    url: `/discover/movie?with_genres=16`,
  },
  'tv-movie': {
    title: 'TV Movie',
    url: `/discover/movie?with_genres=10770`,
  },
}

interface Requests {
  [query: string]: {
    title: string
    url: string
  }
}

export interface Response {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}

export interface Movie {
  backdrop_path: string
  first_air_date?: string
  genre_ids: number[]
  id: number
  name?: string
  origin_country?: string[]
  original_language: string
  original_name?: string
  overview: string
  poster_path: string
  vote_average: number
  vote_count: number
  popularity: number
  media_type: string
  adult?: boolean
  original_title?: string
  release_date?: string
  title?: string
  video?: boolean
}

export default requests
