import { useParams } from 'react-router-dom';
import { useReviews } from 'hooks/useReviews';
import { Loader } from 'components/Loader/Loader';
import PropTypes from 'prop-types';

const Reviews = () => {
    const { movieId } = useParams();
    const { reviews } = useReviews(movieId);

    if (!reviews) return <Loader />;

    if (reviews.length === 0) {
        return <p>We don't have any reviews for this movie</p>;
    };

    return (
        <ul>
        {reviews.map(review => {
            return (
            <li key={review.author}>
                <p>{review.author}</p>
                <p>{review.content}</p>
            </li>
            );
        })}
        </ul>
    );
};

Reviews.propTypes = {
movieId: PropTypes.string.isRequired,
};

export default Reviews;