import { Trending } from "API/API";
import { useLocation } from "react-router-dom";
import { Container, Wrapper, Image, StyledLink, Header } from "./homePage.styled";

export const HomePage = () => {
    const location = useLocation();
    const trendingMovies = Trending();

    return (
        <main>
            <Header>
                <h1>Check out the trending movies!</h1>
            </Header>
            <Container>
                {trendingMovies.map(movie => {
                    <Wrapper key={movie.id}>
                        <StyledLink to={`movies/${movie.id}`} state={{ from: location }}>
                            <p>{movie.title}</p>
                            <Image src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`${movie.title}`} width="280"
                            ></Image>
                        </StyledLink>
                    </Wrapper>
                })}
            </Container>
        </main>
    );
};