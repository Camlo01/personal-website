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

  const { t } = useTranslation(["main"])
  return (
    <section className="features">
      <div className="features__container">

        <div className="features__card">
          <img src="" alt="" />
          <h2>{t('feature_title_1')}</h2>
          <p>{t('feature_body_1')}</p>
          <div className="feature__card-link">
            <a>{t('feature_learn-more')}</a>
          </div>
        </div>
        <div className="features__card">
          <img src="" alt="" />
          <h2>{t('feature_title_2')}</h2>
          <p>{t('feature_body_2')}</p>
          <div className="feature__card-link">
            <a>{t('feature_learn-more')}</a>
          </div>
        </div>
        <div className="features__card">
          <img src="" alt="" />
          <h2>{t('feature_title_3')}</h2>
          <p>{t('feature_body_3')}</p>
          <div className="feature__card-link">
            <a>{t('feature_learn-more')}</a>
          </div>
        </div>

      </div>
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
