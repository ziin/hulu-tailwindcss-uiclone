import Axios from 'axios'
import { Response } from './requests'

const API_KEY = process.env.TMDB_API_KEY

const tmdb = Axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  method: 'GET',
  params: {
    api_key: API_KEY,
    language: 'pt_BR',
  },
})

export const TMDB_IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/original/'

export const getFromTMDB = (url: string) => tmdb.get<Response>(url)
