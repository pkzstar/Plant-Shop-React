export function ItemSoils() {
    return (
      <div className="itemContainer">
        <h1 className="itemName">Soil</h1>
        <div className="itemImgContainer">
             <img src="https://sowexotic.com/cdn/shop/articles/Getting_to_Know_Your_Soil_Sow_Exotic_Live_Plants_1600x.png?v=1566223807" alt="" className="itemImg"/>
        </div>
        <p className=""></p>
        <label htmlFor="numberDropdown">quantity: </label>
        <input id="numberDropdown" type="number"></input>
      </div>
    );
  }
  
  export default ItemSoils;