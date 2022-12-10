import { Searchbox } from 'components/Searchbox/Searchbox';
import { Movies } from 'components/Movies/Movies';
import { useQuery } from 'hooks/useQuery';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';
    const { movies } = useQuery(query);

    const updateQuery = query => {
        const nextParams = query !== '' ? { query } : {};
        setSearchParams(nextParams);
    };

    const moviesList = movies.filter(movie =>
        movie.title.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div>
            <Searchbox value={query} onChange={updateQuery} />
            <Movies movies={moviesList} />
        </div>
    );
};

export default MoviesPage;