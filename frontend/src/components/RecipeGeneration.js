import React, { useState } from "react";
import "../styles/RecipeGeneration.css";
import Chatbot from "./chatbot.js";

const RecipeGenerator = () => {
  const [ingredients, setIngredients] = useState([""]);
  const [showChatbot, setShowChatbot] = useState(false);
  const [preferredCourse, setPreferredCourse] = useState("");
  const [preferredDiet, setPreferredDiet] = useState("");

  const handleAddIngredient = () => {
    setIngredients([...ingredients, ""]);
  };

  const handleIngredientChange = (index, value) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index] = value;
    setIngredients(updatedIngredients);
  };

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <div className="recipe-generator-container">
      <header className="header-image">
        <h1>Find Your Next Favorite Recipe</h1>
      </header>
      <div className="main-content">
        <div className="left-section">
          <h2>Customize Your Recipe</h2>

          {/* Preferred Course Dropdown */}
          <div className="dropdown-group">
            <label>Preferred Course:</label>
            <select
              value={preferredCourse}
              onChange={(e) => setPreferredCourse(e.target.value)}
            >
              <option value="">Select a course</option>
              <option>Beverages</option>
              <option>Breakfast</option>
              <option>Cocktail</option>
              <option>Condiment</option>
              <option>Dessert</option>
              <option>Juice</option>
              <option>Main Course</option>
              <option>Side Dish</option>
              <option>Snack</option>
            </select>
          </div>

          {/* Preferred Diet Dropdown */}
          <div className="dropdown-group">
            <label>Diet Preference:</label>
            <select
              value={preferredDiet}
              onChange={(e) => setPreferredDiet(e.target.value)}
            >
              <option value="">Select a diet</option>
              <option>Eggetarian</option>
              <option>Keto</option>
              <option>Non-Vegetarian</option>
              <option>Sattvik</option>
              <option>Vegan</option>
              <option>Vegetarian</option>
            </select>
          </div>

          {/* Ingredients Input */}
          <label>Ingredients:</label>
          {ingredients.map((ingredient, index) => (
            <input
              key={index}
              type="text"
              value={ingredient}
              onChange={(e) => handleIngredientChange(index, e.target.value)}
              placeholder="Enter an ingredient"
            />
          ))}
          <button onClick={handleAddIngredient}>+</button>

          {/* Buttons */}
          <div className="buttons">
            <button className="generate-recipe">Generate Recipe</button>
            <button className="nutritional-info">Nutritional Info</button>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <h2>Generated Recipe</h2>
          <p>Your recipe and nutritional information will appear here.</p>
        </div>
      </div>

      {/* Chatbot Toggle */}
      <div className="chatbot-icon" onClick={toggleChatbot}>
        💬
      </div>
      {showChatbot && <Chatbot closeChatbot={toggleChatbot} />}
    </div>
  );
};

export default RecipeGenerator;
