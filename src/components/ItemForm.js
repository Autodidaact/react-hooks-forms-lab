import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [itemsData, setItemsData] = useState({
    id: uuid(),
    name: "",
    category: "Produce",
  })
  function handleDataUpdate(event){
    let name = event.target.name;
    let value = event.target.value;
    setItemsData({...itemsData, [name]:value})
  }
  function handleSubmit(event){
    event.preventDefault();
    onItemFormSubmit({...itemsData})
  }
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleDataUpdate} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleDataUpdate}>
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
