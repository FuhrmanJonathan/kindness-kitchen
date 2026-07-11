import "./App.css";

const CHAPTER_URL = "https://example.com/start-a-chapter";
const DONATE_URL = "https://example.com/donate";
const EMAIL = "kindnesskitchen2025@gmail.com";
const INSTAGRAM_URL = "https://www.instagram.com/kindnesskitchenorg/";
const EIN = "41-4306231";

const Flourish = ({ pos, src = "images/Flourish1.png" }) => (
  <img src={src} alt="" className={`flourish ${pos}`} />
);

function App() {
  return (
    <>
      <header className="app-header" id="home">
        <div className="container navbar">
          <a href="#home" className="logo">
            <img src="favicon.png" className="logo-image" alt="Kindness Kitchen logo" />
            <span>Kindness<br />Kitchen</span>
          </a>

          <nav className="nav-links">
            <a href="#home" className="active">Home</a>
            <a href="#cta">Start a Chapter</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href={DONATE_URL} target="_blank" rel="noreferrer" className="button button-light">Donate</a>
        </div>
      </header>

      <main>
        <section className="hero">
          <Flourish pos="flourish-hero-stars" src="images/Flourish1.png"/>

          <div className="container hero-grid">
            <div className="hero-content">
              <h1>Cooking homemade<br />meals,<br /><span>together.</span></h1>

              <p className="hero-description">
                Kindness Kitchen brings people together to fight food
                insecurity and spread kindness through meals, connection, and community.
              </p>

              <div className="button-row">
                <a href="#cta" className="button button-green">
                  Start a Chapter <span>→</span>
                </a>
                <a href={DONATE_URL} target="_blank" rel="noreferrer" className="button button-outline">Donate</a>
              </div>
            </div>

            <div className="hero-image">
              <img src="images/Image1.jpg" className="photo" alt="Kindness Kitchen volunteers" />
              <Flourish pos="flourish-hero-heart"  src="images/Heart.png"/>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <Flourish pos="flourish-contact-sparkle"  src="images/Sparkle.png"/>

          <div className="container contact-grid">
            <div className="contact-image">
              <img src="images/Image2.jpg" className="photo" alt="Students supporting Kindness Kitchen" />
              <Flourish pos="flourish-contact-squiggle"  src="images/Squiggle.png"/>
            </div>

            <div className="contact-content">
              <p className="section-label">WHO WE ARE</p>

              <p>
                Started at Palisades Charter High School, Kindness Kitchen is a student-led initiative that brings people together to fight food insecurity and spread kindness through meals, connection, and community. We are always looking for volunteers, donors, and new chapters to join our mission.
              </p>

              <ul className="contact-links">
                <li>Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
                <li>Instagram: <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">@kindnesskitchenorg</a></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="cta" id="cta">
          <div className="container chapter-banner">

            <div>
              <h2>Be part of the change.</h2>
              <p>
                Start a Kindness Kitchen chapter at your school. Gather a few friends,
                plan your first sessions, and we'll walk you through the rest. No experience
                needed!
              </p>
            </div>

            <a href={CHAPTER_URL} target="_blank" rel="noreferrer" className="button button-light button-large">
              Start a Chapter <span>→</span>
            </a>
          </div>
        </section>

      </main>

      <footer className="app-footer">
        <div className="container">
          <p>
            Kindness Kitchen is a registered 501(c)(3) nonprofit organization.
            Donations are tax-deductible to the extent permitted by law. EIN: {EIN}.
          </p>
          <p>© 2026 Kindness Kitchen. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;