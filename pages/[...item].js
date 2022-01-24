import Link from "next/link";
import { getData, getUrl } from "../service";
import Info from "../components/info/info";
import Image from "next/image";
import styles from "../styles/item.module.scss"



const Item = ({category, id, data}) => {

  return (
    {category} && <div className={styles.itemBlock}>
      <div className={styles.imageWrapper}></div>
      <Image 
        src={category && getUrl(category, id)} 
        alt={`${category}/${id}`}
        width="100%"
        height="100%"
        layout='responsive'
        objectFit="contain"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/0be48716840055.562b1f5cb3202.JPG"}
        }
     />
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
    console.log('fallback')
    return {
      notFound: true
    }
  }
  return {
    props: {
      id: id,
      category: category,
      data: data
    }
  }
}

export default Item