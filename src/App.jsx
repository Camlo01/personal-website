import { useTranslation } from "react-i18next"
import NavMenu from "../components/NavMenu"

import "./App.css"

function Header() {

  const { t } = useTranslation(["main"])

  return (
    <header className="header">
      <NavMenu />
      <div className="header__body">
        <h1>{t('header__body-h1')}</h1>
        <p>{t('header__body-p')}</p>
      </div>
      <div className="header__social">
        <div className="header__social-container"></div>
        <div className="header__social-container"></div>
        <div className="header__social-container"></div>
      </div>
    </header>
  )
}

function About() {
  const { t } = useTranslation(["main"])
  return (
    <section className="about">
      <div className="about__container">
        <div className="about__body">
          <h2>{t('about__body-h2')}</h2>
          <p>{t('about__body-p1')}</p>
          <p>{t('about__body-p2')}</p>
        </div>
        <div className="about__photo">
          <h2>{t('about__photo-h2')}</h2>
          <p>{t('about__photo-p')}</p>
          <img src="" alt="" />
        </div>
      </div>
    </section>
  )
}

function Features() {
  return (
    <section className="features">
      {/* Content for features section */}
    </section>
  )
}

function App() {
  return (
    <>
      <Header />
      <About />
      <Features />
    </>
  )
}

export default App
