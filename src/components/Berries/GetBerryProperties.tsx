import { useEffect, useState } from 'react';
import {baseUrl} from '../../constants';

import "react-responsive-carousel/lib/styles/carousel.min.css";

import Axios from 'axios';


type BerryData = {
  id: number;
  name: string;
  firmness: string;
  growth_time:number;
  max_harvest:number;
  flavors: string[];
  image: string,
//   logo: string;
}

export const GetBerryProperties = () => {
    const [berries, setBerries] = useState<BerryData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const getBerryImage = (name: string) => `/berries/${name}.png`;

    useEffect(() => {
        const fetchBerries = async () => {
            setLoading(true);
            setError(false);
            const berryIds = Array.from({ length: 10 }, (_, i) => i + 1); // Fetch berries with IDs 1 to 5

            try {
                const responses = await Promise.all(
                    berryIds.map((id) => Axios.get(`${baseUrl}berry/${id}`))
                );

                const berryData = responses.map((response) => {
                    const data = response.data;
                    return {
                        id: data.id,
                        name: data.name,
                        firmness: data.firmness.name,
                        growth_time: data.growth_time,
                        max_harvest: data.max_harvest,
                        flavors: data.flavors.map((flavor: any) => flavor.flavor.name),
                        image: getBerryImage(data.name)
                        // logo: data.item.url,
                    };
                });
            setBerries(berryData);
            
          
            } catch(error) {
                console.error("Error fetching data: ", error);
                setBerries([]);
            }
            finally{
                setLoading(false);
            }
            };
        fetchBerries();
    }, []);

    return {berries, loading, error};
};
