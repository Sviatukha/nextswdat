
import Link from 'next/link';
import styles from './navbar.module.scss';
import { categories } from '../../service';

const Navbar = () => {

  return (
    <div className={styles.navbarBlock}>
      <div className={styles.title}>Categories</div>
      <ul className={styles.categoriesList}>
        {
          categories.map((category, index) => {
            return (
              <Link href={`/${category}`} key={index}>
                <a className={styles.categoriesItem}>{category.toUpperCase()}</a>
              </Link>)
          })
        }
      </ul>
    </div>
  )
}

export default Navbar