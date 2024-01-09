import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Project } from "./pages/Project";
import { Contact } from "./pages/Contact";
import { Skills } from "./pages/Skills";
import { Article } from "./pages/Article/Article";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { LangSwitch } from "./components/LangSwitch/LangSwitch";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <div className="container">
      <Header />
      <LangSwitch />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/acquired_skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/article" element={<Article />} />{" "}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
