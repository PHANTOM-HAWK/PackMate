import Item from "./Item";
import { useState } from "react";
export default function PackingList({
  items,
  handleDeleteItems,
  updateItem,
  clearAll,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description") {
    sortedItems = [...items].sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  }
  if (sortBy === "packed") {
    sortedItems = [...items].sort((a, b) => b.packed - a.packed);
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((el) => (
          <Item
            item={el}
            handleDeleteItems={handleDeleteItems}
            updateItem={updateItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input"> sort by input order</option>
          <option value="description"> sort by description </option>
          <option value="packed"> sort by packed status</option>
        </select>
        <button onClick={clearAll}>Clear All</button>
      </div>
      <div></div>
    </div>
  );
}
