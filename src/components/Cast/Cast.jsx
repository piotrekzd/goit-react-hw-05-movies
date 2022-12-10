import { useCast } from 'hooks/useCast';
import { useParams } from 'react-router-dom';
import { Container, Span } from './cast.styled';
import { Loader } from 'components/Loader/Loader';
import PropTypes from 'prop-types';

const Cast = () => {
    const { movieId } = useParams();
    const { actors } = useCast(movieId);

    if (!actors) return <Loader />;
        // console.log(movieId);
    return (
        <Container>
        {actors.map(actor => {
            return (
            <div key={actor.id}>
                <img
                src={
                    actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                    : `https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg`
                }
                alt={actor.name}
                width="180"
                height="250"
                />
                <p>
                <Span>{actor.name}</Span>
                </p>
                <p>As: {actor.character}</p>
            </div>
            );
        })}
        </Container>
    );
};

Cast.propTypes = {
movieId: PropTypes.string.isRequired,
};

export default Cast;