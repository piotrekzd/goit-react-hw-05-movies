import { Grid } from 'react-loader-spinner';
import { Overlay } from './loader.styled';

export const Loader = () => {
    return (
        <Overlay >
        <Grid
            height="80"
            width="80"
            color="rgb(192, 192, 192)"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            visible={true}
        />{' '}
        </Overlay>
    );
};