import Link from "next/link";
import { getUrl } from "../../service";
import styles from "./itemList.module.scss"


const ItemList = ({list, category}) => {

  return (
    <div className={styles.mainBlock}>
      <ul className={styles.itemsList}>
        {list && list.map((item, index) => {
          return (
          <li className={styles.item} key={index} >
            <img 
              className={styles.itemImage} 
              src={getUrl(category, index)} 
              alt={item.name}
              onError={(e) => {
                  e.target.onerror = null;
                  e.target.src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/0be48716840055.562b1f5cb3202.JPG"
                }
              }
              />
            <Link className='itemName' href={`/${category}/${index}`}> 
              <a>{category === "films" ? item.title : item.name}</a>
            </Link>
          </li>)
        })}
      </ul>
    </div>
  )
}

export default ItemList