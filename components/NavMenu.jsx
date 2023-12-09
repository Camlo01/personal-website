import i18next from "i18next"
import { useTranslation } from "react-i18next"
import "./NavMenu.css"
import { useState } from "react";

function navbarStyles() {
    const colorToApply = "#1C1C1D"
    const smoothShadow = "0px 2.1px 7.8px rgba(0, 0, 0, 0.015), 0px 3.8px 18.8px rgba(0, 0, 0, 0.054), 0px 5.6px 36.2px rgba(0, 0, 0, 0.151), 0px 9px 80px rgba(0, 0, 0, 0.2)";
    const navbar = document.getElementById('navbar-container');
    const position = window.scrollY

    if (position > 55) {
        navbar.style.backgroundColor = colorToApply;
        navbar.style.boxShadow = smoothShadow;

    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.boxShadow = 'none';
    }
}

window.onscroll = function () {
    navbarStyles()
}

function NavMenu() {

    const { t, i18n } = useTranslation(["main"])
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    const changeLanguaje = () => {
        toggleMenu();

        setTimeout(() => {
            const actualLanguaje = i18n.language
            switch (actualLanguaje) {
                case "es":
                    i18next.changeLanguage("en")
                    break;
                case "en":
                    i18next.changeLanguage("es")
                    break;
            }
        }, 300);

    }

    return (
        <div className="navbar-container" id="navbar-container">
            <div className="navbar" id="navbar">
                <div className="menu-btn" onClick={toggleMenu}>
                    <div className="btn-line"></div>
                    <div className="btn-line"></div>
                    <div className="btn-line"></div>
                </div>
                <nav className={`menu ${menuActive ? 'active' : ''}`}>
                    <p onClick={toggleMenu} style={{ color: "white" }}>X</p>
                    <ul>
                        <li> <a href="#about" onClick={toggleMenu} > {t('navMenuItem1')} </a></li>
                        <li> <a href="#skills" onClick={toggleMenu}> {t('navMenuItem2')} </a></li>
                        <li> <a href="#experience" onClick={toggleMenu}> {t('navMenuItem3')} </a></li>
                        <li> <a href="#portfolio" onClick={toggleMenu}> {t('navMenuItem4')} </a></li>
                        <li> <a href="#contact" onClick={toggleMenu}> {t('navMenuItem5')} </a></li>
                        <li onClick={changeLanguaje}>{t('navMenuItem6')}</li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}


export default NavMenu;