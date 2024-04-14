import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/HomePage';
import SQL from './pages/SQLInjection';
import Footer from './components/Footer';
import XSS from "./pages/XSSInjection";

function App() {
    return (
        <BrowserRouter>
            <nav>
                <Navbar />
            </nav>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/SQLInjection' element={<SQL />} />
                <Route exact path='/XSSInjection' element={<XSS />} />
            </Routes>
            <footer>
                <Footer />
            </footer>
        </BrowserRouter>
    );
}

export default App;