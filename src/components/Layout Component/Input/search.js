import React, { useState, useEffect } from "react";

export const Search = () => {
  const [cari, setCari] = useState([
    "Apples",
    "Broccoli",
    "Chicken",
    "Duck",
    "Eggs",
    "Fish",
    "Granola",
    "Hash Browns"
  ]);
  const [items, setItems] = useState([]);
  const filterList = e => {
    let updateCari = cari.filter(i =>
      i.toLowerCase().search(e.target.value.toLowerCase())
    );
    setItems(updateCari);
  };
  useEffect(
    () => {
      setItem(cari);
    },
    [cari]
  );
  return (
    <div className="">
      <form>
        <input type="text" placeholder="Search" onChange={filterList} />
      </form>
      <List items={items} />
    </div>
  );
};

const List = ({ items }) => {
  return (
    <ul>
      {items.map(i => {
        return (
          <li data-category={i} key={i}>
            {i}
          </li>
        );
      })}
    </ul>
  );
};
