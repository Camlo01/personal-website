import { useState } from "react"
import { useTranslation } from "react-i18next"
import NavMenu from "./components/NavMenu"
import FormAlert from "./components/formAlert"

import iconX from '/icons/icon_x.png'
import iconLinkedIn from '/icons/icon_linkedin.png'
import iconInstagram from '/icons/icon_instagram.png'
import iconGithub from '/icons/icon_github.png'
import profilePicture from '/photos/profile_1.jpeg'
import iconFire from '/icons/icon_fire.png'
import iconStar from '/icons/icon_star.png'
import iconBag from '/icons/icon_bag.png'
import timeLinePic1 from '/photos/timeline_1.jpeg'
import timeLinePic2 from '/photos/timeline_2.jpeg'
import iconGithubSVG from '/icons/svg/icon_github.svg'
import iconInstagramSVG from '/icons/svg/icon_instagram.svg'
import iconLinkedinSVG from '/icons/svg/icon_linkedin.svg'
import iconXSVG from '/icons/svg/icon_x.svg'

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
        <div className="header__social-container">
          <a target="_blank" href="https://x.com/camlo1824?lang=es">
            <img className="twitter" src={iconX} alt="Twitter icon" />
          </a>
        </div>
        <div className="header__social-container">
          <a target="_blank" href="https://www.linkedin.com/in/camilo-beltran-c/">
            <img className="linkedin" src={iconLinkedIn} alt="Linkedin icon" />
          </a>
        </div>
        <div className="header__social-container">
          <a target="_blank" href="https://www.instagram.com/camil.mp4/">
            <img href="" className="instagram" src={iconInstagram} alt="Instagram icon" />
          </a>
        </div>
        <div className="header__social-container">
          <a target="_blank" href="https://github.com/Camlo01">
            <img href="" className="github" src={iconGithub} alt="Instagram icon" />
          </a>
        </div>
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
          <img src={profilePicture} alt="" />
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
          <div>
            <img src={iconFire} alt="Fire icon" />
          </div>
          <h2>{t('feature__title_1')}</h2>
          <p>{t('feature__body_1')}</p>
          <div className="feature__card-link">
            <a href="#skills">{t('feature__learn-more')}</a>
          </div>
        </div>
        <div className="features__card">
          <div>
            <img src={iconStar} alt="Star icon" />
          </div>
          <h2>{t('feature__title_2')}</h2>
          <p>{t('feature__body_2')}</p>
          <div className="feature__card-link">
            <a href="#experience">{t('feature__learn-more')}</a>
          </div>
        </div>
        <div className="features__card">
          <div>
            <img src={iconBag} alt="Bag icon" />
          </div>
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
              <img src={timeLinePic1} alt="Autoretrado de Camilo Beltrán en el día de grabación de un video para el área de TI" />
            </div>
            <div className="timeline__card education">
              <h3>{t('experience__timeline_title_1')}</h3>
              <p>{t('experience__timeline_body_1')}</p>
            </div>
          </div>
          <div className="timeline__container">
            <div className="timeline__card">
              <img src={timeLinePic2} alt="Fotografía Camilo Beltrán con el ingeniero Raul Blum durante mis prácticas en Gerdau Diaco" />
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

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [showFormAlert, setShowFormAlert] = useState(false);
  const [responsePost, setResponsePost] = useState({});

  const [formDisabled, setFormDisabled] = useState(false)

  const [nameWhoSendEmail, setNameWhoSendEmail] = useState('')

  const { t } = useTranslation(["main", "alertMessages"]);

  function isValidEmail(email) {
    return /^(?=.{1,40}$)[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const handleSubmit = async (e) => {


    e.preventDefault();

    const formData = {
      name: name,
      email: email,
      message: message
    }

    try {


      if (formData.name == '' || formData.email == '' || formData.message == '') {
        alert(t('form_alert_case_empty-fields', { ns: 'alertMessages' }))
        return null
      }

      if (!isValidEmail(formData.email)) {
        alert(t('form_alert_case_no-valid-email', { ns: 'alertMessages' }))
        return null
      }

      if (formData.message.length > 250) {
        alert(t('form_alert_case-msg-exceeds-limit', { ns: 'alertMessages' }))
        return null
      }

      // For testing purposes
      // const simulateSuccessfulResponse = () => {
      //   return Promise.resolve({
      //     success: true,
      //     message: 'Correo enviado correctamente'
      //   });
      // };
      // const response = await simulateSuccessfulResponse()

      // For production
      const response = await fetch('https://camilobeltran.com/server/sendMail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      }).then(response => response.json())

      if (response?.success) {
        setResponsePost(response) //set the response
        setShowFormAlert(true) // set status for show the message  

        setNameWhoSendEmail(name);

        //define values for form
        setFormDisabled(true)
        setName('')
        setEmail('')
        setMessage('')
      }

    } catch (error) {
      console.error('There was a problem !', error);
      setResponsePost(undefined) //set the response
      setShowFormAlert(true) // set status for show the message

      //Reset 
      setTimeout(() => {
        setShowFormAlert(false)
      }, 7000);
    }


  };

  return (
    <section className="contact" id="contact">
      {showFormAlert && <FormAlert props={{ responseData: responsePost, setShowFormAlert, name: nameWhoSendEmail }} />}
      <div className="contact__container">
        <div className="contact__body">
          <h2>{t('contact__body-title', { ns: 'main' })}</h2>
          <p>{t('contact__body-text_1', { ns: 'main' })}</p>
          <a href="tel: +57 322 6823615">{t('contact__body-text_2', { ns: 'main' })}</a>
          <a href="mailto: contact@camilobeltran.com">{t('contact__body-text_3', { ns: 'main' })}</a>
          <div className="contact__body-media">
            <h3>{t('contact__body-subtitle', { ns: 'main' })}</h3>
            <div className="social_media">
              <a target="_blank" href="https://github.com/Camlo01" className="github">
                <img src={iconGithubSVG} alt="Github Icon" />
              </a>
              <a target="_blank" href="https://www.instagram.com/camil.mp4/" className="instagram">
                <img src={iconInstagramSVG} alt="" />
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/camilo-beltran-c/" className="linkedin">
                <img src={iconLinkedinSVG} alt="" />
              </a>
              <a target="_blank" href="https://x.com/camlo1824?lang=es" className="x">
                <img src={iconXSVG} alt="" />
              </a>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} >
          <input name="name" type="text" placeholder={t('contact__form_name', { ns: 'main' })} value={name} onChange={(e) => { setName(e.target.value) }} disabled={formDisabled} />
          <input name="email" type="text" placeholder={t('contact__form_email', { ns: 'main' })} value={email} onChange={(e) => { setEmail(e.target.value) }} disabled={formDisabled} />
          <textarea name="message" placeholder={t('contact__form_message', { ns: 'main' })} value={message} onChange={(e) => { setMessage(e.target.value) }} disabled={formDisabled}></textarea>
          <button type="submit" disabled={formDisabled}> {t('contact__form_button', { ns: 'main' })} </button>
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
