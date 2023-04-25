import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import {Header} from "./components/header";
import "./App.css";
import {Footer} from "./components/footer";
function App() {
    const [navOpen, setNavOpen] = React.useState<boolean>(false);
    return (
        <>
            <BrowserRouter>
                <Header setNavOpen={setNavOpen}/>
                {!navOpen ?
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="*" element={<h1>404</h1>} />
                    </Routes>
                    : null}
                <Footer/>
            </BrowserRouter>
        </>
    );
}

export default App;
