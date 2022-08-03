import React from "react";

function Filter({ search, filter,onSearchChange }) {
 /*  function handleSearchInput(){
    return onCategoryChange(search)
  }
  function handleSelectInput(){
    return onCategoryChange(filter)
  } */
  return (
    <div className="Filter">
      <input type="text" name="search" value={search} onChange={onSearchChange}placeholder="Search..." />
      <select name="filter" value={filter} onChange={onSearchChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
