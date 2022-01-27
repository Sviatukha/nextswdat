import Link from "next/link";
import { getUrl } from "../service";
import Info from "../components/info/info";
import Image from "next/image";
import styles from "../styles/item.module.scss"
import { useRouter } from "next/router";
import { categories } from "../service";



const Item = ({data}) => {

  const router = useRouter();
  const category = router.query.item&&router.query.item[0];
  const id = router.query.item&&router.query.item[1];

  console.log(data)

  return (
    {category} && <div className={styles.itemBlock}>
      <div className={styles.imageWrapper}>
        <Image 
          src={category ? getUrl(category, id) : "/images/broken.jpeg"} 
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


export default Item