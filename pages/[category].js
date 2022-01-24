import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { categories, getData, getUrl } from "../service";
import styles from "../styles/itemList.module.scss"
import broken from '../public/images/broken.jpeg'


const Category = ({list ,category}) => {

  return (
    <div className={styles.mainBlock}>
      <ul className={styles.itemsList}>
        {list && list.map((item, index) => {
          return (
          <li className={styles.item} key={index} >
            <Image 
              className={styles.itemImage} 
              src={getUrl(category, index)} 
              width="100%"
              height="100%"
              layout='responsive'
              objectFit="contain"
              priority='false'
              alt={item.name}
              placeholder='blur'
              blurDataURL='/images/broken.jpeg'
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
  const category = context.params.category;
  const data = await getData(category);
  console.log(data , 'data false')
  if(!data) {
    console.log('fallback')
    return {
      notFound: true
    }
  }
  return {
    props: {
      list: data,
      category: category
    }
  }
}

export async function getStaticPaths() {

  const paths = categories.map(category => {
    return {params: {category: category}}
  })

  return {
    paths: paths,
    fallback: false
  }

}

export default Category