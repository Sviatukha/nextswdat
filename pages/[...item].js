import Link from "next/link";
import { getData, getUrl } from "../service";
import Info from "../components/info/info";
import Image from "next/image";
import styles from "../styles/item.module.scss"



const Item = ({category, id, data}) => {
  console.log('render')

  return (
    {category} && <div className={styles.itemBlock}>
      <div className={styles.imageWrapper}>
        <Image 
          src={category && getUrl(category, id)} 
          alt={`${category}/${id}`}
          width={300}
          height={300}
          layout='responsive'
          objectFit="contain"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/images/broken.jpeg";
            e.target.srcset = "/images/broken.jpeg";
          }}
      />
     </div>
      <Info info={data[id]} category={category && category}/> 
      <Link href={`/${category}`}><a className={styles.back}> &#8617; Back</a></Link>    
    </div>
  )
}

export async function getServerSideProps(context) {
  const category = context.params.item[0];
  const id = context.params.item[1];
  const data = await getData(category)
  if(!data) {
    return {
      notFound: true
    }
  }
  console.log('fetched')
  return {
    props: {
      id: id,
      category: category,
      data: data
    }
  }
}

export default Item