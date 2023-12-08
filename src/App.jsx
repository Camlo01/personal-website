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
          <img src={""} alt="" />
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
          <h2>{t('feature__title_1')}</h2>
          <p>{t('feature__body_1')}</p>
          <div className="feature__card-link">
            <a>{t('feature__learn-more')}</a>
          </div>
        </div>
        <div className="features__card">
          <img src="" alt="" />
          <h2>{t('feature__title_2')}</h2>
          <p>{t('feature__body_2')}</p>
          <div className="feature__card-link">
            <a>{t('feature__learn-more')}</a>
          </div>
        </div>
        <div className="features__card">
          <img src="" alt="" />
          <h2>{t('feature__title_3')}</h2>
          <p>{t('feature__body_3')}</p>
          <div className="feature__card-link">
            <a>{t('feature__learn-more')}</a>
          </div>
        </div>

      </div>
    </section>
  )
}

function Skills() {

  const { t } = useTranslation(["main"])
  return (
    <section className="skills">
      <div className="skills__container">

        <div className="skills__body">
          <h2>{t('skills__body-title')}</h2>
          <p>{t('skills__body-text')}</p>
        </div>

        <div className="skills__skills">

          <div className="skill__card">
            <h2>Java</h2>
            <p>Spring Boot</p>
          </div>
          <div className="skill__card">
            <h2>JS</h2>
            <p>React JS</p>
          </div>
          <div className="skill__card">
            <h2>Desing</h2>
            <p>HTML5 y CSS3</p>
          </div>
          <div className="skill__card">
            <h2>SQL</h2>
            <p>Databases</p>
          </div>

        </div>


      </div>
    </section>
  )
}

function Languajes() {

  const { t } = useTranslation(["main"])
  return (
    <>
      <section className="languaje">
        <div className="languaje__container">

          <h2>{t('languaje__title')}</h2>

          <div className="languaje__languajes">
            <div className="languaje__card">
              <h3>{t('languaje__card-languaje_1')}</h3>
              <p>{t('languaje__card-level_1')}</p>
            </div>
            <div className="languaje__card">
              <h3>{t('languaje__card-languaje_2')}</h3>
              <p>{t('languaje__card-level_2')}</p>
            </div>

            {/* <div className="languaje__card">
              <h3>{t('languaje__card-languaje_3')}</h3>
              <p>{t('languaje__card-level_3')}</p>
            </div> */}

          </div>

        </div>
      </section>
    </>
  )
}

function Experience() {

  const { t } = useTranslation(["main"])
  return (
    <section className="experience">
      <div className="experience__container">

        <h2>{t('experience__body-title')}</h2>
        <p>{t('experience__body-text')}</p>

        <div className="experience__timeline">
          <div className="timeline__container">
            <div className="timeline__card">
              <img src={"../photos/timeline_1.jpeg"} alt="" />
            </div>
            <div className="timeline__card education">
              <h3>{t('experience__timeline_title_1')}</h3>
              <p>{t('experience__timeline_body_1')}</p>
            </div>
          </div>
          <div className="timeline__container">
            <div className="timeline__card">
              <img src={"../photos/timeline_2.jpeg"} alt="" />
            </div>
            <div className="timeline__card work">
              <h3>{t('experience__timeline_title_2')}</h3>
              <p>{t('experience__timeline_body_2')}</p>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

function Portfolio() {

  const { t } = useTranslation(["main"])
  return (
    <>
      <section className="portfolio">
        <div className="portfolio__container">
          <h2>Portfolio</h2>
        </div>
      </section>

      <section className="portfolio__projects">
        <p>{t('portfolio__text')}</p>
      </section>
    </>
  )
}

function App() {
  return (
    <>
      <Header />
      <About />
      <Features />
      <Skills />
      <Languajes />
      <Experience />
      <Portfolio />
    </>
  )
}

export default App
