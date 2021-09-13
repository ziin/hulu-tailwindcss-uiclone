import Link from 'next/link'

function HeaderItem({ title, Icon, href = '/' }: Props) {
  return (
    <Link href={href} passHref>
      <div className="group flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white">
        <Icon className="h-8 mb-1 group-hover:animate-bounce" />
        <p className="tracking-widest invisible group-hover:visible">{title}</p>
      </div>
    </Link>
  )
}

type Props = {
  title: string
  href?: string
  Icon: (props: React.ComponentProps<'svg'>) => JSX.Element
}

export default HeaderItem
