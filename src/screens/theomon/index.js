import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../style/colors';
const Root = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 3px solid ${COLORS.highlight};
    border-radius: 25px;
    background-color: '#fdf2ef';
    padding: 35px;
`;
const Image = styled.img `
    pointer-events: none;
    width: 300px;
    height: 300px;
`;
const Name = styled.a `
    font-size: 40px;
    font-family: 'pokemon_solid';
`;
const Text = styled.a `
    font-family: 'averia_serif_libre';
    font-size: 30px;
`;
const Theomon = () => {
    const { state } = useLocation();
    const { name, height, weight, img } = state;
    return (_jsxs(Root, { className: "shadow", children: [_jsx(Name, { children: name.toUpperCase() }), _jsx(Image, { src: img }), _jsxs(Text, { children: ["Height: ", height] }), _jsxs(Text, { children: ["Weight: ", weight] })] }));
};
export default Theomon;
