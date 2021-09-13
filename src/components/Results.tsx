import FlipMove from 'react-flip-move'
import { Response } from '../utils/requests'
import Thumbnail from './Thumbnail'

const Results = ({ results }: Props) => (
  <FlipMove className="my-10 sm:px-2 md:px-5 sm:grid md:grid-cols-2 lg:grid-cols-3 4k:flex 4k:flex-wrap 4k:justify-center">
    {results?.results.map((movie) => (
      <Thumbnail key={movie.id} movie={movie} />
    ))}
  </FlipMove>
)

type Props = {
  results: Response | null
}

export default Results
