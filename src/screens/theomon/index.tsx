import { useLocation } from 'react-router-dom';

import styled from 'styled-components';
import { COLORS } from '../../style/colors';

const Root = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 3px solid ${COLORS.highlight};
    border-radius: 25px;
    background-color: '#fdf2ef';
    padding: 35px;
`;

const Image = styled.img`
    pointer-events: none;
    width: 300px;
    height: 300px;
`;

const Name = styled.a`
    font-size: 40px;
    font-family: 'pokemon_solid';
`;

const Text = styled.a`
    font-family: 'averia_serif_libre';
    font-size: 30px;
`;

const Theomon = () => {
    const { state } = useLocation();
    const { name, height, weight, img } = state;

    return (
        <Root className="shadow">
            <Name>{name.toUpperCase()}</Name>
            <Image src={img} />
            <Text>Height: {height}</Text>
            <Text>Weight: {weight}</Text>
        </Root>
    );
};

export default Theomon;
