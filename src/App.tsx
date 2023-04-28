import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import {Header} from "./components/header";
import {Footer} from "./components/footer";
import { Notfound } from './pages/notfound';
import { Schedule } from './pages/schedule';
import { Club } from "./pages/club";
function App() {
  const [navOpen, setNavOpen] = React.useState<boolean>(false);
  return (
    <>
      <BrowserRouter>
        <Header setNavOpen={setNavOpen}/>
        {!navOpen ?
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/club" element={<Club />} />
            <Route path="*" element={<Notfound/>} />
          </Routes>
          : null}
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
