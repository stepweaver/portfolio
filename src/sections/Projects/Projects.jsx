import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        {/* TODO: Replace placeholder projects with your own projects */}
        <a href='https://github.com/stepweaver/stepweaver.git' target='_blank'>
          <img className='hover' src={viberr} alt='Viberr logo' />
          <h3>Viberr</h3>
          <p>Streaming App</p>
        </a>
      </div>
    </section>
  );
}

export default Projects;
