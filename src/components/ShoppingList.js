import React, { useState } from 'react';
import Item from './Item';


const items = [
  { id: 1, name: 'Yogurt', category: 'Dairy' },
  { id: 2, name: 'Pomegranate', category: 'Produce' },
  { id: 3, name: 'Lettuce', category: 'Produce' },
  { id: 4, name: 'String Cheese', category: 'Dairy' },
  { id: 5, name: 'Cookies', category: 'Dessert' },
];

const ShoppingList = () => {
  
  const [selectedCategory, setSelectedCategory] = useState('All');

  
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value); 
  };

  
  const filteredItems = selectedCategory === 'All'
    ? items // If 'All', display all items
    : items.filter((item) => item.category === selectedCategory);

  return (
    <div className="ShoppingList"> 
      <label htmlFor="category-select">Filter by category:</label>
      <select
        id="category-select"
        value={selectedCategory}
        onChange={handleCategoryChange} 
      >
        <option value="All">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Produce">Produce</option>
        <option value="Dessert">Dessert</option>
      </select>

      <ul className="Items"> 
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
