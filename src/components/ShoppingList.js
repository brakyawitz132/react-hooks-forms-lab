import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  // Filter by Form
  const [search, setSearch] = useState("")

  function handleForm(event) {
    setSearch(event.target.value)
  }

  const filteredItemsToDisplay = itemsToDisplay.filter((item) => {
    if (search === "") {
      return true
    };
    return item.name.toLowerCase().includes(search.toLowerCase());
  });  

  // Add New Item
  const [newItemName, setNewItemName] = useState("")
  const [newItemCategory, setNewItemCategory] = useState("Produce")
  
  function handleNewName(event) {
    setNewItemName(event.target.value)
  }

  function handleNewCategory(event) {
    setNewItemCategory(event.target.value)
  }

  return (
    <div className="ShoppingList">
      <ItemForm 
      itemName={newItemName}
      itemCategory={newItemCategory}
      onNewName={handleNewName} 
      onNewCategory={handleNewCategory}
      onItemFormSubmit={onItemFormSubmit}
      />
      <Filter 
      onCategoryChange={handleCategoryChange} 
      onSearchChange={handleForm}
      />
      <ul className="Items">
        {filteredItemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
