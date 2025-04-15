import { useState } from "react";

const plants = {
  Flower: ['sunflower', 'rose'],
  Fruit: ['melon', 'blueberries']
};


export function ItemPlants() {

  const availableQuantity = 10;

  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (e) => {
    const inputValue = parseInt(e.target.value, 10);
    // Update quantity only if it's <= available quantity
    if (inputValue <= availableQuantity) {
      setQuantity(inputValue);
    }
  };

    return (
      <div className="itemContainer">
        <h1 className="itemName">
        {plants.Flower[1]}
        </h1>
        <div className="itemImgContainer">
            <img src="https://png.pngtree.com/png-vector/20240312/ourmid/pngtree-green-leaf-for-element-png-image_11934356.png" alt="" className="itemImg"/>
            </div>

<label htmlFor="quantityInput">Quantity:</label>
<input
  type="number"
  id="quantityInput"
  value={quantity}
  onChange={handleQuantityChange}
  min="0"
  max={availableQuantity}
/>
<p>Available: {availableQuantity}</p>
</div>
    );
  }
  
  export default ItemPlants;