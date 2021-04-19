import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setmenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setmenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setmenuItems(newItems);
  }

  return <section className="menu">
    <h1 className="title">Our Menu</h1>
    <div className="underline"></div>
    <Categories categories={categories} filterItems={filterItems} />
    <Menu items={menuItems} />
  </section>
}

export default App;
