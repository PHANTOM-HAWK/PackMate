import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import { Stats } from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);
  function handleDeleteItems(id) {
    setItems(items.filter((item) => item.id !== id));
  }
  function updateItem(id) {
    setItems(
      (items) =>
        items.map((item) =>
          item.id === id ? { ...item, packed: !item.packed } : item
        )``
    );
  }
  function clearAll() {
    const confirmed = window.confirm("ARE YOU SURE TO DELETE THIS??");
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form setItems={setItems} />
      <PackingList
        items={items}
        handleDeleteItems={handleDeleteItems}
        updateItem={updateItem}
        clearAll={clearAll}
      />
      <Stats items={items} />
    </div>
  );
}
