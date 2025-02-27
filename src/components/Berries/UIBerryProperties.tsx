import { GetBerryProperties } from "./GetBerryProperties";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCube } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cube";

import styles from './styles.module.css';

export function UIBerryProperties(){
    const { berries, loading, error } = GetBerryProperties();

    if(loading){
        return <div>Loading...</div>
    }
    if (error || berries.length === 0){
        return <div> Error loading data</div>
    }

    return (
        <div className={styles.carouselContainer}>
        <h2 className={styles.title}>Pokémon Berries</h2>
        <Swiper
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          effect="cube"
          modules={[Navigation, Pagination, EffectCube]}
          className={styles.swiper}
        >
          {berries.map((berry) => (
            <SwiperSlide key={berry.id} className={styles.slide}>
              <div className={styles.card}>
                <h3 className={styles.berryName}>{berry.name.toUpperCase()}</h3>
                <img src={berry.image} alt={berry.name} className={styles.berryImage} />
                <p><strong>Firmness:</strong> {berry.firmness}</p>
                <p><strong>Growth Time:</strong> {berry.growth_time} hours</p>
                <p><strong>Max Harvest:</strong> {berry.max_harvest} berries</p>
                <p><strong>Flavors:</strong> {berry.flavors.join(", ")}</p>
              </div>
            </SwiperSlide>
          ))}

          
        </Swiper>
      </div>
  )

}
