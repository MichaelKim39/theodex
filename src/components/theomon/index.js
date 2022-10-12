import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
const Container = styled.div `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
const Image = styled.img `
    pointer-events: none;
    height: 500px;
    width: auto;
`;
const Screen = styled.div `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) translate(-150px, -20px);
    border: 5px solid black;
    height: 120px;
    width: 180px;
`;
const Theomon = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Container, { children: _jsx(Image, { src: require('../../images/pokedex-high-res.png') }) }), _jsx(Screen, { children: _jsx("h1", { children: "Hello" }) })] }));
};
export default Theomon;
