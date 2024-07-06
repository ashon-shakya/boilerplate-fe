import { useState } from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

function App() {
    return (
        <div>
            <Header />
            <LandingPage />
            <Footer />
        </div>
    );
}

export default App;
