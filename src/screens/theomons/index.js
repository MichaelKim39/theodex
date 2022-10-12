import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
import Theomon from '../../components/theomon';
const Root = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Theomons = () => {
    return (_jsx(Root, { children: _jsx(Theomon, {}) }));
};
export default Theomons;
