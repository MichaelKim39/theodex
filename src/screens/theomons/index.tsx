import { useState } from 'react';

import styled from 'styled-components';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import Theomon from '../../components/theomon';

const Button = styled.button`
    position: absolute;
    justify-content: center;
    align-items: center;
`;

const Theomons = () => {
    const [id, setId] = useState(0);

    const incrementId = (increment) => {
        const result = id + increment;
        if (result < 0) {
            setId(152 + result);
        } else {
            setId(result % 152);
        }
        // console.log(id);
    };

    return (
        <>
            <Button style={{ left: 30 }}>
                <KeyboardArrowLeftIcon onClick={() => incrementId(-1)} />
            </Button>
            <Theomon id={id + 1} />
            <Button style={{ right: 30 }}>
                <KeyboardArrowRightIcon onClick={() => incrementId(1)} />
            </Button>
        </>
    );
};

export default Theomons;
