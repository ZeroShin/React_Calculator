import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAnglesLeft, faBars, faMoon, faSun, fas } from '@fortawesome/free-solid-svg-icons'
import "./TitleBar.css";

library.add(fas, faBars, faAnglesLeft, faMoon, faSun)

function TitleBar() {
    const [menuIcon, setMenuIcon] = useState(faBars);
    const [dayIcon, setDayIcon] = useState(faSun);

    const menuClick = () => {
        setMenuIcon(menuIcon === faBars ? faAnglesLeft : faBars);
    };

    const dayClick = () => {
        setDayIcon(dayIcon === faSun ? faMoon : faSun);
    };

    const style = {
        titleBar: {
          backgroundColor: dayIcon === faSun ? "white" : "black",
        },
        title: {
          color: dayIcon === faSun ? "black" : "gray",
        },
      };

    return (
        <div className="component-titlebar" style={style.titleBar}>
            <div className="container">
                <div className="column left">
                    <button onClick={menuClick} >
                        <FontAwesomeIcon icon={menuIcon} size="3x" />
                    </button>
                    <button>
                        <text>결과 가져오기</text>
                    </button>
                </div>
                <div className="column center" style={style.title}>Calculator</div>
                <div className="column right">
                    <button>
                        <text>랜덤 탬플릿색상 변경 </text>
                    </button>
                    <button onClick={dayClick} >
                        <FontAwesomeIcon icon={dayIcon} size="3x" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TitleBar;