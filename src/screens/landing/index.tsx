import styled from 'styled-components';
import { COLORS } from '../../style/colors';

const Root = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const PageTitle = styled.h1`
    color: ${COLORS.highlight};
    font-family: 'averia_serif_libre';
    font-size: 40px;
`;

const Image = styled.img`
    border-radius: 10%;
`;

const Landing = () => {
    return (
        <Root>
            <PageTitle>Aspiring to catch them all.</PageTitle>
            <Image
                src={require('../../images/squirtle-squad-drink.gif')}
                alt="squirtle squad drink"
                className="shadow"
            />
        </Root>
    );
};

export default Landing;
