import i18next from "i18next"
import { useTranslation } from "react-i18next"
import "./NavMenu.css"
import { useEffect, useState } from "react";

function navbarStyles() {
    const colorToApply = "#1C1C1D"
    const smoothShadow = " 0px 3.9px 0.3px -6px rgba(0, 0, 0, 0.183), 0px 4.9px 0.7px -6px rgba(0, 0, 0, 0.178), 0px 5.4px 1.1px -6px rgba(0, 0, 0, 0.173), 0px 5.6px 1.7px -6px rgba(0, 0, 0, 0.177), 0px 5.7px 2.4px -6px rgba(0, 0, 0, 0.191), 0px 5.7px 3.4px -6px rgba(0, 0, 0, 0.213), 0px 5.5px 4.8px -6px rgba(0, 0, 0, 0.242), 0px 5.3px 6.9px -6px rgba(0, 0, 0, 0.276), 0px 5.1px 10.7px -6px rgba(0, 0, 0, 0.316), 0px 5px 19px -6px rgba(0, 0, 0, 0.36) ";
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
        const isBurgerMenuActive = (window.innerWidth < 768)
        if (isBurgerMenuActive) {
            setMenuActive(!menuActive);
        }
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

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setMenuActive(false);
                toggleMenu();
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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