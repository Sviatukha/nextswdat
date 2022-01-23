import styles from "./info.module.scss"

const Info = ({info, category}) => {
  console.log(info, category)
  const categoriesData = {
    characters: [
      <p className={styles.paragraph}><span className={styles.subtitle}>Birth Year: </span>{info.birth_year}</p>,
      <p className={styles.paragraph}><span className={styles.subtitle}>Eye Color: </span>{info.eye_color}</p>,
      <p className={styles.paragraph}><span className={styles.subtitle}>Gender: </span>{info.gender}</p>,
      <p className={styles.paragraph}><span className={styles.subtitle}>Hair Color: </span>{info.hair_color}</p>,
      <p className={styles.paragraph}><span className={styles.subtitle}>Height: </span>{info.height}</p>,
      <p className={styles.paragraph}><span className={styles.subtitle}>Mass: </span>{info.mass}</p>,
      <p className={styles.paragraph}><span className={styles.subtitle}>Name: </span>{info.name}</p>,
      <p className={styles.paragraph}><span className={styles.subtitle}>Scin Color: </span>{info.scin_color}</p>,
    ],
    species: [
      <p className={styles.paragraph}><span className={styles.subtitle}>Averege Height: </span>{info.average_height}</p>,
      <p className={styles.paragraph}><span className={styles.subtitle}>Averege Lifespan: </span>{info.average_lifespan}</p>,
      <p className={styles.paragraph}><span className={styles.subtitle}>Gender: </span>{info.classification}</p>,
      <p className={styles.paragraph}><span className={styles.subtitle}>Hair color: </span>{info.eye_colors}</p>,
      <p className={styles.paragraph}><span className={styles.subtitle}>Height: </span>{info.hair_colors}</p>,
      <p className={styles.paragraph}><span className={styles.subtitle}>Mass: </span>{info.language}</p>,
      <p className={styles.paragraph}><span className={styles.subtitle}>Name: </span>{info.name}</p>,
      <p className={styles.paragraph}><span className={styles.subtitle}>Scin Color: </span>{info.scin_color}</p>
    ],
    starships: [
      <p className={styles.paragraph}><span className={styles.subtitle}>Starship Class: </span>{info.starship_class}</p>,
      <p className={styles.paragraph}><span className={styles.subtitle}>Name: {info.name}</span></p>,
      <p className={styles.paragraph}><span className={styles.subtitle}>Max Atmosphering Speed: </span>{info.max_atmosphering_speed}</p>,
      <p className={styles.paragraph}><span className={styles.subtitle}>Length: </span>{info.length}</p>,
      <p className={styles.paragraph}><span className={styles.subtitle}>Hyperdrive Rating: </span>{info.hyperdrive_rating}</p>,
      <p className={styles.paragraph}><span className={styles.subtitle}>Cost In Credits: </span>{info.cost_in_credits}</p>,
      <p className={styles.paragraph}><span className={styles.subtitle}>Cargo Capacity: </span>{info.cargo_capacity}</p>,
      <p className={styles.paragraph}><span className={styles.subtitle}>Passengers: </span>{info.passengers}</p>,
      <p className={styles.paragraph}><span className={styles.subtitle}>Manufacturer: </span>{info.manufacturer}</p>
    ],
    vehicles: [
      <p className={styles.paragraph}><span className={styles.subtitle}>Vehicle Class: </span>{info.vehicle_class}</p>,
      <p className={styles.paragraph}><span className={styles.subtitle}>Name: </span>{info.name}</p>,
      <p className={styles.paragraph}><span className={styles.subtitle}>Model: </span>{info.model}</p>,
      <p className={styles.paragraph}><span className={styles.subtitle}>Length: </span>{info.length}</p>,
      <p className={styles.paragraph}><span className={styles.subtitle}>Cost In Credits: </span>{info.cost_in_credits}</p>,
      <p className={styles.paragraph}><span className={styles.subtitle}>Cargo Capacity: </span>{info.cargo_capacity}</p>,
      <p className={styles.paragraph}><span className={styles.subtitle}>Passengers: </span>{info.passengers}</p>,
      <p className={styles.paragraph}><span className={styles.subtitle}>Manufacturer: </span>{info.manufacturer}</p>
    ],
    planets: [
      <p className={styles.paragraph}><span className={styles.subtitle}>Name: </span>{info.name}</p>,
      <p className={styles.paragraph}><span className={styles.subtitle}>Climate: </span>{info.climate}</p>,
      <p className={styles.paragraph}><span className={styles.subtitle}>Terrain: </span>{info.terrain}</p>,
      <p className={styles.paragraph}><span className={styles.subtitle}>Rotation Period: </span>{info.rotation_period}</p>,
      <p className={styles.paragraph}><span className={styles.subtitle}>Diamiter: </span>{info.diamiter}</p>
    ],
    films: [
      <p className={styles.paragraph}><span className={styles.subtitle}>Title: </span>{info.title}</p>,
      <p className={styles.paragraph}><span className={styles.subtitle}>Episode Number: </span>{info.episode_id}</p>,
      <p className={styles.paragraph}><span className={styles.subtitle}>Release Date: </span>{info.release_date}</p>,
      <p className={styles.paragraph}><span className={styles.subtitle}>Opening Crawl: </span>{info.opening_crawl}</p>
    ]
  }
  return (
    <div>
      {categoriesData[category]}
    </div>
  )
}

export default Info