import Link from "next/link";
import { useRouter } from "next/router"
import { useState, useEffect } from "react";
import { getData, getUrl } from "../service";
import Info from "../components/info/info";
import Image from "next/image";



const Item = () => {
  const router = useRouter();
  console.log(router)
  const category = router.query.item && router.query.item[0];
  const id = router.query.item && router.query.item[1]
  const [data, setData] = useState({});

  useEffect(() => {
    category && getData(category).then(response => setData(response[id]));
  }, [category])

  console.log(data)
  
  return (
    {category} && <div className='itemBlock'>
      <Image 
        src={category && getUrl(category, id)} 
        alt={`${category}/${id}`}
        placeholder="blur"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/0be48716840055.562b1f5cb3202.JPG"}
        }
     />
      <Info info={data} category={category && category}/> 
      <Link href={`/${category}`}><a>Back</a></Link>
      
    </div>
  )
}

export default Item