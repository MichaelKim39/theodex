import styled from 'styled-components';
import { COLORS } from '../../style/colors';

const Container = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Image = styled.img`
    pointer-events: none;
    height: 500px;
    width: auto;
`;

const Screen = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) translate(-150px, -20px);
    border: 5px solid black;
    height: 120px;
    width: 180px;
`;

const Theomon = () => {
    return (
        <>
            <Container>
                <Image src={require('../../images/pokedex-high-res.png')} />
            </Container>
            <Screen>
                <h1>Hello</h1>
            </Screen>
        </>
    );
};

export default Theomon;
