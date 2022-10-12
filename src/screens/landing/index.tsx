import styled from 'styled-components';
import { COLORS } from '../../style/colors';

const Root = styled.div`
    justify-content: center;
    align-items: center;
`;

const PageTitle = styled.h1`
    color: black;
`;

const Landing = () => {
    return (
        <Root>
            <PageTitle>Landing</PageTitle>
        </Root>
    );
};

export default Landing;
