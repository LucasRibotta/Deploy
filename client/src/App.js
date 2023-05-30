import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from './components/Landing/LandingPage'
import Home from './components/Home/Home';
import CreateActivity from "./components/FormActivity/CreateActivity";
import Detail from './components/DetailCountry/DetailCountry';
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Error from "./components/Error/Error"; 
import NavBar from "./components/NavBar/NavBar";
import Game from './components/Game/Game'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<CreateActivity />} />
        <Route path="/game" element={<Game />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/*" element={<Error />} /> 
      </Routes>
      <Footer className="footer" />
    </div>
  );
}

export default App;
