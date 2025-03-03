import { GetSeriesProperties } from "./GetSeriesProperties";

import styles from './styles.module.css';

export function UISeriesProperties(){
    const { shows, loading, error } = GetSeriesProperties();

    if(loading) return <div>Loading...</div>
    if (error) return <div> Error {error}</div>

    return (
        <div>
            <div> <h2 className={styles.title}>Pokémon Series</h2></div>
            <div className={styles.gridContainer}>
                {shows.map((show) => (
                    <div className={styles.gridItem} key={show.id}>
                        <img
                        src={`https://image.tmdb.org/t/p/w200${show.poster_path}`}
                        alt={show.name}
                        style={{borderRadius: '10px'}}
                        />
                        <h1>{show.first_air_date}</h1>
                    </div>
                ))}

            </div>
        </div>
    )
}