import { Wrapper, Icon, Input } from "./searchbox.styled";
import PropTypes from 'prop-types';

export const Searchbox = ({ value, onChange }) => {

    return (
        <Wrapper>
        <Icon />
        <Input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
        </Wrapper>
    );
};

Searchbox.propTypes = {
    value: PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired
};