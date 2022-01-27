import Link from 'next/link'
import style from './header.module.scss'

const Header = () => {
  return (
    <header className={style.header}>
      <Link href="/">
        <a>Star wars data</a>
      </Link>
    </header>
  )
}

export default Header