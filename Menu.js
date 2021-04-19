import React from 'react';

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((menuItems) => {
        const { id, title, price, img, desc } = menuItems;
        return (
          <article key={id} className="menu-item">
            <img src={img} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <div className="price">${price}</div>
              </header>
              <div className="item-text">
                {desc}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
