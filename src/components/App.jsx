import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import DetailsPage from "../pages/DetailsPage";
import HomePage from "../pages/HomePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/giphy/:id" element={<DetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
