import { forwardRef } from 'react'
import Image from 'next/image'
import { ThumbUpIcon } from '@heroicons/react/outline'
import { Movie } from '../utils/requests'
import { TMDB_IMAGE_BASE_PATH } from '../utils/tmdb'

const Thumbnail = forwardRef<HTMLDivElement, Props>(({ movie }, ref) => (
  <div
    ref={ref}
    className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
  >
    <Image
      src={`${TMDB_IMAGE_BASE_PATH}${movie.backdrop_path || movie.poster_path}`}
      layout="responsive"
      width={1920}
      height={1080}
      alt={`${movie.title} poster image`}
    />
    <div className="p-2">
      <p className="truncate max-w-md">{movie.overview}</p>
      <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
        {movie.title || movie.name}
      </h2>
      <p className="flex items-center visible group-hover:visible">
        {movie.media_type && `${movie.media_type}`}{' '}
        {movie.release_date || movie.first_air_date}
        <ThumbUpIcon className="h-5 mx-2" />
        {movie.vote_count}
      </p>
    </div>
  </div>
))

type Props = {
  movie: Movie
}

Thumbnail.displayName = 'Thumbnail'

export default Thumbnail
