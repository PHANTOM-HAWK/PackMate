export function Stats({ items }) {
  if (items.length === 0)
    return (
      <p className="stats">
        <em>Start adding items to your packing list</em>
      </p>
    );
  const numItems = items.length;
  const packedItemsCount = items.filter((item) => item.packed === true).length;
  if (packedItemsCount / numItems === 1)
    return (
      <p className="stats">
        <em>Now you are all set to start your journey</em>
      </p>
    );
  return (
    <footer className="stats">
      <em>
        You have {numItems} items on your list,and you have already packed{" "}
        {packedItemsCount}(
        {numItems === 0 ? 100 : Math.round((packedItemsCount / numItems) * 100)}
        %)
      </em>
    </footer>
  );
}
