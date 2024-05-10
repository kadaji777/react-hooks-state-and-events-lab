import React, { useState } from 'react';

const Item = ({ name, category }) => {
  
  const [isInCart, setIsInCart] = useState(false);

  
  const handleToggleCart = () => {
    setIsInCart((prev) => !prev); 
  };

  return (
    <li className={isInCart ? 'in-cart' : ''}> 
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleToggleCart}> 
        {isInCart ? 'Remove from Cart' : 'Add to Cart'}
      </button>
    </li>
  );
};

export default Item;
