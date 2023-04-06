import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CelebrityEdit from "./pages/CelebrityEdit";
import CelebrityIndex from "./pages/CelebrityIndex";
import CelebrityNew from "./pages/CelebrityNew";
import CelebrityShow from "./pages/CelebrityShow";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import React from "react";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/celebrityindex" element={<CelebrityIndex />} />
        <Route path="/celebrityshow" element={<CelebrityShow />} />
        <Route path="/celebritynew" element={<CelebrityNew />} />
        <Route path="/celebrityedit" element={<CelebrityEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
