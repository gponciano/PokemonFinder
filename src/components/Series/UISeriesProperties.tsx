import { GetSeriesProperties } from "./GetSeriesProperties";

import styles from './styles.module.css';

export function UISeriesProperties(){
    const { shows, loading, error } = GetSeriesProperties();

    if(loading) return <div>Loading...</div>
    if (error) return <div> Error {error}</div>

    return (
        <div>
            <h2>Pokémon TV Shows</h2>
            <div className={styles.card}>
                {shows.map((show) => (
                    <div className={styles.individualItem} key={show.id}>
                        <img
                        src={`https://image.tmdb.org/t/p/w200${show.poster_path}`}
                        alt={show.name}
                        style={{borderRadius: '10px'}}
                        />
                    </div>
                ))}

            </div>
        </div>
    )
}