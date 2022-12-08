import { Cast } from "API/API";
import { useEffect, useState } from "react";

export const useCast = movieId => {
    const [actors, setActors] = useState(null);

    useEffect(() => {
        if (movieId)
            Cast(movieId).then(response => {
                setActors([...response]);
            });
    }, [movieId]);

    return { actors };
};