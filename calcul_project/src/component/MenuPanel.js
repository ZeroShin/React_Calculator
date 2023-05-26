import React, { useState } from 'react';
import './MenuPanel.css';

function MenuPanel() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`menu-container ${isMenuOpen ? 'open' : ''}`}>
      <button onClick={handleButtonClick}>메뉴</button>
      <div className="menu-content">
        <ul>
          <li>메뉴 항목 1</li>
          <li>메뉴 항목 2</li>
          <li>메뉴 항목 3</li>
        </ul>
      </div>
    </div>
  );
}

export default MenuPanel;
