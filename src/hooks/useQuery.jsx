import { getQuery } from "API/API";
import { useEffect, useState } from "react";

export const useQuery = query => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (query === '') {
            return;
        };

        getQuery(query).then(response => {
            setMovies([...response.results]);
        });
    }, [query]);

    return { movies };
};