import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ itemName, itemCategory, onNewName, onNewCategory, onItemFormSubmit }) {
  
  function handleSubmit(event) {
    event.preventDefault()
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: itemName,
      category: itemCategory,
    };
    onItemFormSubmit(newItem);
  }
  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input type="text" name="name" onChange={onNewName}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={onNewCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
