import { SearchBox } from 'components/SearchBox/SearchBox';
import Movies from 'components/Movies';
import { useQuery } from 'utils/hooks/useQuery';
import { useSearchParams } from 'react-router-dom';

export const MoviesPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';
    const movies = useQuery(query);

    const updateQuery = query => {
        const nextParams = query !== '' ? { query } : {};
        setSearchParams(nextParams);
    };

    const moviesList = movies.filter(movie =>
        movie.title.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div>
            <SearchBox value={query} onChange={updateQuery} />
            <Movies movies={moviesList} />
        </div>
    );
};