import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAnglesLeft, faBars, faL, faMoon, faSun, fas } from '@fortawesome/free-solid-svg-icons'
import { useCookies } from 'react-cookie';
import MenuPanel from "./MenuPanel";
import "./TitleBar.css";

library.add(fas, faBars, faAnglesLeft, faMoon, faSun)

function TitleBar({ data, onThemeChange }) {
    const [cookies, setCookie, removeCookie] = useCookies(['theme']);
    const [menuIcon, setMenuIcon] = useState(faBars);
    const [theme, setTheme] = useState(cookies.theme || 'light');
    const [dayIcon, setDayIcon] = useState(cookies.theme === 'dark' ? faMoon : faSun);
    const [showMenu, setShowMenu] = useState(false);

    const menuClick = () => {
        setMenuIcon(menuIcon === faBars ? faAnglesLeft : faBars);
        //눌렀을때 나왔다가 들어갔다가 할 수 있도록 해야되는데 내용은 계속 변경되어야 한다.
        setShowMenu(!showMenu);
    };

    const dayClick = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        //쿠키저장
        setCookie('theme', newTheme);
        //테마처리
        setTheme(newTheme);
        //아이콘 처리
        setDayIcon(newTheme === "light" ? faSun : faMoon);
        //상위 데이터 업데이트
        onThemeChange(newTheme);
    };

    const style = {
        titleBar: {
            backgroundColor: dayIcon === faSun ? "white" : "black",
        },
        title: {
            color: dayIcon === faSun ? "black" : "gray",
        },
        themeButton: {
            color: dayIcon === faSun ? "black" : "lightgray",
        },
        menuButton: {
            color: dayIcon === faSun ? "black" : "lightgray",
        },
    };

    return (
        <div className="component-titlebar" style={style.titleBar}>
            <div className="container">
                <div className="column left">
                    <button onClick={menuClick} className="title menu" style={style.menuButton}>
                        <FontAwesomeIcon icon={menuIcon} size="3x" />
                    </button>
                    {/* <button onClick={props.loadButtonClick}>
                        <text>마지막 결과값 불러오기</text>
                    </button> */}
                </div>
                <div className="column center" style={style.title}>Calculator</div>
                <div className="column right">
                    {/* <button>
                        <text>랜덤 탬플릿색상 변경 </text>
                    </button> */}
                    <button onClick={dayClick} className="title theme" style={style.themeButton}>
                        <FontAwesomeIcon icon={dayIcon} size="3x" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TitleBar;