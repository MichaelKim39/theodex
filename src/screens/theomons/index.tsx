import styled from 'styled-components';

import Theomon from '../../components/theomon';

const Root = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Theomons = () => {
    return (
        <Root>
            <Theomon />
        </Root>
    );
};

export default Theomons;
