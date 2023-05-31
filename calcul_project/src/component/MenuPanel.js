import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAnglesLeft, faCalculator, faCode, faFlask, fas } from '@fortawesome/free-solid-svg-icons'
import './MenuPanel.css';

library.add(fas, faAnglesLeft, faCalculator, faFlask, faCode)

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
          <li>
            <FontAwesomeIcon icon={faCalculator} />
            표준
          </li>
          <li>
            <FontAwesomeIcon icon={faFlask} />
            공학용
          </li>
          <li>
            <FontAwesomeIcon icon={faCode} />
            프로그래머
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MenuPanel;
