import { useEffect, useState } from "react";
import { tmdbSeries } from "../../constants";

interface Series {
    id: number;
    name: string;
    overview: string;
    poster_path: string;
}
export function GetSeriesProperties(){
    const [shows, setShows] = useState<Series[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSeries = async () => {
            try {
                const response = await fetch(tmdbSeries);
                if(!response.ok) throw new Error("Failed to obtain information");

                const data = await response.json();
                setShows(data.seasons);
            } catch (error) {
                setError(error instanceof Error ? error.message : "Error occurred");
            } finally {
                setLoading(false);
            }
        };

        fetchSeries();
    }, []);

    return { shows, loading, error};
}

