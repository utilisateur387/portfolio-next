import { motion, AnimatePresence } from 'framer-motion';

const About = ({ toggleAbout, showAbout }) => {
  return (
    <AnimatePresence>
    { showAbout &&
      (<motion.div
        className="about"
        initial={{ y: '100vh' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, stiffness: 30 }}
        exit={{ y: '100vh' }}>
        <div className="about-close">

          <img
            src="images/general/cross.png" alt=""
            onClick={toggleAbout}
            className="img-cross-block cross-about"
            />
        </div>

        <div class="about-back" onClick={toggleAbout}>
          <img src="images/general/arrow_left.png" alt="" className="arrow-back-about" />
          Back
        </div>

        <div className="intro my-7">
          <p>
            I'm a web developer and digital designer deeply passionate about digital arts and crafting immersive experiences. Originally from France, I worked as a graphic designer in New York before returning home to complete Le Wagon's full-stack coding bootcamp in Nantes. After gaining experience as a fullstack developer in a company, I now freelance, blending my skills in design and development to craft captivating digital experiences.          </p>
          <p>
            Feel free to reach out for a chat, a project, or anything else.
          </p>
        </div>


        <div className="about-links">
          <div>
            <p className="about-section-title">Say hi</p>
            <a href="/" target="_blank">
              iyeyemim [at] gmail.com
            </a>
          </div>

          <div>
            <p className="about-section-title">Find me online</p>
            <span className="link nobreak">
              <a href="https://github.com/utilisateur387/" rel="noreferrer" target="_blank">
                Github <img src="images/general/arrow_slanted.png" className="arrow-slanted" alt="arrow" />
              </a>
            </span>
            <span className="link nobreak">
              <a href="https://www.linkedin.com/in/utilisateur387/" rel="noreferrer" target="_blank">
                LinkedIn <img src="images/general/arrow_slanted.png" className="arrow-slanted" alt="arrow" />
              </a>
            </span>
          </div>
        </div>

        <hr className="about-hr" />

        <div className="about-content">
          <div className="about-content-block">
            <p className="about-section-title">
              Experience
            </p>
            <p>
              <span className="uppercase">C-monetiquette, Bordeaux</span><br/>
              <span className="additional-infos">Web Developer</span>
            </p>
            <p>
              <span className="uppercase">Base Design, NYC</span><br/>
              <span className="additional-infos">Digital Designer</span>
            </p>
            <p>
              <span className="uppercase">Double Standards, Berlin</span><br/>
              <span className="additional-infos">Graphic Designer</span>
            </p>
            <p>
              <span className="uppercase">Studio150, Bangkok</span><br/>
              <span className="additional-infos">Design Intern</span>
            </p>
            <p>
              <span className="uppercase">UsBerlin, Berlin</span><br/>
              <span className="additional-infos">Design Intern</span>
            </p>
          </div>

          <div className="about-content-block">
            <p className="about-section-title">
              Education
            </p>
            <p>
              <span className="uppercase">Le Wagon coding bootcamp</span><br/>
              <span className="additional-infos">Fullstack Web Development</span>
            </p>
            <p>
              <span className="uppercase">MA Graphic Design</span><br/>
              <span className="additional-infos">ENSAAMA Olivier de Serres, Paris</span><br/>
              <span className="additional-infos link nobreak">
                <a rel="noreferrer" href="http://ensaama.net/site/home/diplomes/2018/dsaa-design-graphique/Iyeyemi-Miebi" target="_blank">
                  Graduation project <img src="images/general/arrow_slanted.png" className="arrow-slanted" alt="arrow" />
                </a>
              </span>
            </p>
            <p>
              <span className="uppercase">BA Graphic Design</span><br/>
              <span className="additional-infos">ESAAT, Roubaix</span>
            </p>
          </div>

          <div className="about-content-block">
            <p className="about-section-title">
              Clients / Collaborators
            </p>
            <p>
              Apple, Facebook, The New York Times, Equinox, RFK Human Rights, Dreamscape, IFAW, Matouk, MCR Labs, Mykita, Perlon, Funkhaus Berlin, Pfalzbau Theater, Münchner Kammerspiele
            </p>
          </div>

          <div className="about-content-block">
            <p className="about-section-title">
              Technologies / Tools
            </p>
            <p className="technologies">
              <div>
                ReactJS<br/>
                PHP<br/>
                Ruby on Rails<br/>
                ES6 Javascript<br/>
                HTML, CSS<br/>
                Git, GitHub<br/>
                SQL, Postgres<br/>
                Heroku, Clever Cloud<br/>
              </div>

              <div>
                Figma<br/>
                Adobe Creative Suite<br/>
                Blender 3D<br/>
                Resolume<br/>
                Arduino<br/>
                Max/MSP<br/>
              </div>
            </p>
          </div>


        </div>

      </motion.div> )}
    </AnimatePresence>

  )
}

export default About;
