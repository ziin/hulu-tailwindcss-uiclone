import { useRouter } from 'next/router'
import ScrollContainer from 'react-indiana-drag-scroll'
import requests from '../utils/requests'

function Nav() {
  const router = useRouter()
  return (
    <nav className="relative">
      <ScrollContainer className="flex h-16 items-center justify-start text-2xl space-x-10 sm:space-x-20 whitespace-nowrap px-10 sm:px-20 overflow-x-scroll scrollbar-hide select-none">
        {Object.entries(requests).map(([key, { title }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className="transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 cursor-pointer"
          >
            {title}
          </h2>
        ))}
      </ScrollContainer>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-black-pearl h-16 w-1/12" />
    </nav>
  )
}

export default Nav
