import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
      <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="*" element={<h1>404</h1>} />
            </Routes>
        </BrowserRouter>
      </>
  )
}

export default App
