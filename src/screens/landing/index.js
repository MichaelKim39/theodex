import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
const Root = styled.div `
    justify-content: center;
    align-items: center;
`;
const PageTitle = styled.h1 `
    color: black;
`;
const Landing = () => {
    return (_jsx(Root, { children: _jsx(PageTitle, { children: "Landing" }) }));
};
export default Landing;
