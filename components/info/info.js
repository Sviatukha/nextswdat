
import styles from "./info.module.scss"

const Info = ({info, category}) => {
  console.log(info, category)
  const categoriesData = {
    characters: [ "birth_year", "eye_color", "gender", "hair_color", "height", "mass", "name", "skin_color"],
    species: [ "average_height", "average_lifespan", "classification", "eye_colors", "hair_colors", "language", "name", "skin_colors"],
    starships: ["starship_class", "name", "max_atmosphering_speed", "length", "hyperdrive_rating", "cost_in_credits", "cargo_capacity", "passengers", "manufacturer"],
    vehicles: ["vehicle_class", "name", "model", "length", "cost_in_credits", "cargo_capacity", "passengers", "manufacturer"],
    planets: ["name", "climate", "terrian", "rotation_period", "diamiter"],
    films: ["title", "episode_id", "release_date", "opening_crawl"]
  };
  console.log(info.title)
  return (
    <ul className={styles.list}>
      {categoriesData[category].map((item, index) => {
       return <li key={index} className={styles.paragraph}>
          <span className={styles.subtitle}>{item.replace("_", " ").replace(/\b\w/g, l => l.toUpperCase())}: </span>
          <span className={styles.text}>{info[item]}</span>
        </li>
      })}
    </ul>
  )
}

export default Info