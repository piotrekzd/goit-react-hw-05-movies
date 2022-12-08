import { getMovieID } from "API/API";
import { useEffect, useState } from "react";

export const useMovieDetails = movieId => {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        if (movieId) {
            getMovieID(movieId).then(response => {
                setMovie({ ...response });
            });
        };
    }, [movieId]);

    return { movie };
};