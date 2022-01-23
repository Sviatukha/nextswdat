import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { categories, getData, getUrl } from "../service";
import styles from "../styles/itemList.module.scss"


const Category = ({list}) => {

  const category = router.query.category;

  return (
    <div className={styles.mainBlock}>
      <ul className={styles.itemsList}>
        {list && list.map((item, index) => {
          return (
          <li className={styles.item} key={index} >
            <Image 
              className={styles.itemImage} 
              src={getUrl(category, index)} 
              placeholder='blur'
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

export async function getStaticProps(context) {
  const category = context.params.eventId;

  const data = await getData(category);

  console.log(data, 'data')

  return {
    props: {
      list: data
    }
  }
}

export async function getStaticPaths() {

  const paths = categories.map(category => {params: {category: category}})

  return {
    paths: paths,
    fallback: false
  }

}

export default Category