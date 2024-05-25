import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import themeIcon from '../../assets/sun.svg';
import twitterIcon from '../../assets/twitter-light.svg';
import githubIcon from '../../assets/github-light.svg';
import linkedinIcon from '../../assets/linkedin-light.svg';
import CV from '../../assets/cv.pdf';

function Hero() {
  return (
    <section id='hero' className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt='Profile Picture of Stephen Weaver'
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt='Color mode icon'
        />
      </div>
      <div className={styles.info}>
        <h1>
          Stephen
          <br />
          Weaver
        </h1>
        <h2>Full-Stack Developer</h2>
        <span>
          <a href='https://twitter.com/stepweaver1' target='_blank'>
            <img src={twitterIcon} alt='Twitter icon' />
          </a>
          <a href='https://github.com/stepweaver' target='_blank'>
            <img src={githubIcon} alt='Github icon' />
          </a>
          <a href='https://linkedin.com/stepweaver1' target='_blank'>
            <img src={linkedinIcon} alt='linkedin icon' />
          </a>
        </span>
        <p>
          With a passion for developing modern web applications. I'm always
          looking to level up my skills, excited to work on new projects and
          collaborate with other creators.
        </p>
        <a href={CV} download>
          <button className='hover'>Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
