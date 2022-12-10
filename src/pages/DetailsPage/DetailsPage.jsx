import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useMovieDetails } from "hooks/useMovieDetails";
import { BackLink } from "components/BackLink/BackLink";
import { Container, Wrapper } from "./detailsPage.styled";
import { StyledLink } from "../HomePage/homePage.styled";
import { Loader } from "components/Loader/Loader";

const DetailsPage = () => {
    const { movieId } = useParams();
    const { movie } = useMovieDetails(movieId);
    const location = useLocation();

    const backLinkHref = location.state?.from ?? '/movies';

    if (!movie) {
        return <Loader />;
    };

    return (
        <div>
            <BackLink to={backLinkHref}>Back to the movies list</BackLink>
            <Container>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`${movie.title}`} width="240"
                />
                <Wrapper>
                    <h2>{movie.title}, {movie.release_date.slice(0, 4)}</h2>
                    <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
                    <h3>Overview</h3>
                    <p>{movie.overview}</p>
                    <h3>Genre</h3>
                    {`${movie.genres.map(genre => genre.name).join(' / ')}`}
                </Wrapper>
            </Container>
            <h3>More information</h3>
            <ul>
                <li>
                    <StyledLink to='cast'>Cast</StyledLink>
                </li>
                <li>
                    <StyledLink to='reviews'>Reviews</StyledLink>
                </li>
            </ul>
            
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </div>
    );
};

export default DetailsPage;