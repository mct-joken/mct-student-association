import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Notfound } from './pages/notfound';
import { Schedule } from './pages/schedule';
import { Members } from './pages/members';
import { Clubs } from './pages/clubs';
import { Links } from './pages/links';
import { Industori } from './pages/industori';
import './css/App.css';
function App() {
  const [navOpen, setNavOpen] = React.useState<boolean>(false);
  return (
    <>
      <BrowserRouter>
        <Header navOpen={navOpen} setNavOpen={setNavOpen} />
        {!navOpen ? (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/members" element={<Members />} />
            <Route path="/club" element={<Clubs />} />
            <Route path="/links" element={<Links />} />
            <Route path="/industori" element={<Industori />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        ) : null}
        <Footer setNavOpen={setNavOpen} />
      </BrowserRouter>
    </>
  );
}

export default App;
