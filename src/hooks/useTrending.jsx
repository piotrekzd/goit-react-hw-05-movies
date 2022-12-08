import { Trending } from "API/API";
import { useEffect, useState } from "react";

export const useTrending = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        Trending().then(response => {
            setTrendingMovies([...response.results]);
        });
    }, []);

    return { trendingMovies };
};