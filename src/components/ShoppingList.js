import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, addedItem }) {
  /* const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchListData, setSearchListData] = useState(""); */
 
const [itemsListData, setItemsListData] = useState({
  search: "",
  filter: "All",
})
  function handleCategoryChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    setItemsListData({...itemsListData, [name]:value});
    
  }


  //list search filter
  const ItemListSearchFilter = items.filter((item) => {
    if (itemsListData.filter === "All" && itemsListData.search === "") return true;
    if(itemsListData.filter === item.category && itemsListData.search === "") return true;
    if(itemsListData.filter === "All" && item.name.toLowerCase().includes(itemsListData.search.toLowerCase())) return true;
    return ((item.category === itemsListData.filter) && (item.name === itemsListData.search));
    
  })

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={addedItem}/>
      <Filter filter={itemsListData.filter} search={itemsListData.search}  onSearchChange={handleCategoryChange} />
      <ul className="Items">
        {ItemListSearchFilter.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
