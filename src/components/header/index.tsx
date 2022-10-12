import styled from 'styled-components';
import { COLORS } from '../../style/colors';

import { Link } from 'react-router-dom';

const Root = styled.div`
    width: 100%;
    box-sizing: border-box;
    background-color: ${COLORS.secondary};
    position: absolute;
    top: 0;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Title = styled.h2`
    color: ${COLORS.highlight};
    font-size: 30px;
`;

const Text = styled.text`
    font-size: 16px;
    font-family: 'pokemon_solid';
`;

const Header = () => {
    return (
        <Root>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <Title>Théomon</Title>
            </Link>

            <Link to="/theomons" style={{ textDecoration: 'none' }}>
                <Text>All Theomons</Text>
            </Link>
        </Root>
    );
};

export default Header;
