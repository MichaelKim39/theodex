import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

import './App.css';
import styled from 'styled-components';
import { COLORS } from './style/colors';

import Landing from './screens/landing';
import Theomons from './screens/theomons';
import Theomon from './screens/theomon';
import Header from './components/header';

const Root = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    height: 100vh;
    background-color: ${COLORS.primary};
`;

function App() {
    return (
        <Router>
            <Root>
                <Header />
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/theomons" element={<Theomons />} />
                    <Route path="/theomons/:id" element={<Theomon />} />
                </Routes>
            </Root>
        </Router>
    );
}

export default App;
