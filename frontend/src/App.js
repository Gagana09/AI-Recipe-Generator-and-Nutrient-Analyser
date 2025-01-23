import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Homepage";
import RecipeGenerator from "./components/RecipeGeneration";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe-generator" element={<RecipeGenerator />} />
      </Routes>
    </Router>
  );
};

export default App;
