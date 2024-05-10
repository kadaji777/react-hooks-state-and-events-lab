import React, { useState } from 'react';
import Item from './Item';

// Example item list
const items = [
  { id: 1, name: 'Yogurt', category: 'Dairy' },
  { id: 2, name: 'Pomegranate', category: 'Produce' },
  { id: 3, name: 'Lettuce', category: 'Produce' },
  { id: 4, name: 'String Cheese', category: 'Dairy' },
  { id: 5, name: 'Cookies', category: 'Dessert' },
];

const ShoppingList = () => {
  // State variable to keep track of the selected category
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Event handler to update the selected category
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value); // Update the selected category state
  };

  // Filter items based on the selected category
  const filteredItems = selectedCategory === 'All'
    ? items // If 'All', display all items
    : items.filter((item) => item.category === selectedCategory);

  return (
    <div className="ShoppingList"> {/* Give the container a class name */}
      <label htmlFor="category-select">Filter by category:</label>
      <select
        id="category-select"
        value={selectedCategory}
        onChange={handleCategoryChange} // Event handler for changing category
      >
        <option value="All">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Produce">Produce</option>
        <option value="Dessert">Dessert</option>
      </select>

      <ul className="Items"> {/* Ensure correct class name for the test */}
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
