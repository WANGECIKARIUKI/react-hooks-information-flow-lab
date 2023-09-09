import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";
import Filter from "./Filter";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all")
  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }
  function onCategoryChange () {
    setSelectedCategory(onCategoryChange);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <ShoppingList items={itemData} />
      <Header isDarkMode={isDarkMode} onDarkModeClick = {onDarkModeClick} />
      <Filter onChange={onCategoryChange} selectedCategory={selectedCategory}/>
    </div>
  );
}

export default App;
