import { useState } from "react";
export default function Form({ setItems }) {
  const [quantity, Setquantity] = useState("");
  const [description, Setdescription] = useState("");

  function addItem(newitem) {
    setItems((prevItems) => [...prevItems, newitem]);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const quant = Number(quantity);
    const newItem = {
      id: Date.now(),
      description: description,
      quantity: quant,
      packed: false,
    };
    if (quant === 0 || !description) return;
    Setquantity("");
    Setdescription("");
    addItem(newItem);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip??</h3>
      <input
        type="number"
        placeholder="Quantity..."
        value={quantity}
        onChange={(e) => {
          Setquantity(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Item...."
        value={description}
        onChange={(e) => {
          Setdescription(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}
