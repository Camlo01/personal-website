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
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__body">
          <h2>{t('about__body-h2')}</h2>
          <p>{t('about__body-p1')}</p>
          <p>{t('about__body-p2')}</p>
        </div>
        <div className="about__photo">
          <h2>{t('about__photo-h2')}</h2>
          <p>{t('about__photo-p')}</p>
          <img src={"../photos/profile_1.jpeg"} alt="" />
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
            <a href="#skills">{t('feature__learn-more')}</a>
          </div>
        </div>
        <div className="features__card">
          <img src="" alt="" />
          <h2>{t('feature__title_2')}</h2>
          <p>{t('feature__body_2')}</p>
          <div className="feature__card-link">
            <a href="#experience">{t('feature__learn-more')}</a>
          </div>
        </div>
        <div className="features__card">
          <img src="" alt="" />
          <h2>{t('feature__title_3')}</h2>
          <p>{t('feature__body_3')}</p>
          <div className="feature__card-link">
            <a href="#portfolio">{t('feature__learn-more')}</a>
          </div>
        </div>

      </div>
    </section>
  )
}

function Skills() {

  const { t } = useTranslation(["main"])
  return (
    <section className="skills" id="skills">
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
            <h2>Desing</h2>
            <p>HTML5 Y CSS3</p>
          </div>
          <div className="skill__card">
            <h2>Adobe</h2>
            <p>Creative Cloud</p>
          </div>
          <div className="skill__card">
            <h2>JS</h2>
            <p>React JS</p>
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
    <section className="experience" id="experience">
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
      <section className="portfolio" id="portfolio">
        <div className="portfolio__container">
          <h2>{t('portfolio__title')}</h2>
        </div>
      </section>

      <section className="portfolio__projects">
        <p>{t('portfolio__text')}</p>
      </section>
    </>
  )
}

function Contact() {

  const { t } = useTranslation(["main"])
  return (
    <section className="contact" id="contact">
      <div className="contact__container">

        <div className="contact__body">
          <h2>{t('contact__body-title')}</h2>
          <p>{t('contact__body-text_1')}</p>
          <a href="tel: +57 322 6823615">{t('contact__body-text_2')}</a>
          <a href="mailto: contact@camilobeltran.com">{t('contact__body-text_3')}</a>
          <div className="contact__body-media">
            <h3>{t('contact__body-subtitle')}</h3>
            <div className="social_media">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>

        <form action="">
          <input type="text" placeholder={t('contact__form_name')} />
          <input type="text" placeholder={t('contact__form_email')} />
          <textarea name="" id="" placeholder={t('contact__form_message')}></textarea>
          <button type="submit"> {t('contact__form_button')} </button>
        </form>

      </div>
    </section>
  )
}

function Footer() {

  const { t } = useTranslation(["main"])
  return (
    <footer className="footer">
      <section className="footer__container">
        <div className="footer__items">
          <a href="#about">{t('navMenuItem1')}</a>
          <a href="#skills">{t('navMenuItem2')}</a>
          <a href="#experience">{t('navMenuItem3')}</a>
          <a href="#portfolio">{t('navMenuItem4')}</a>
          <a href="#contact">{t('navMenuItem5')}</a>
        </div>
      </section>
    </footer>
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
      <Contact />
      <Footer />
    </>
  )
}

export default App
