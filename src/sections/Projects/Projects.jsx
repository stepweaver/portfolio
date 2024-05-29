import styles from './ProjectsStyles.module.css';
import html from '../../assets/html.png';
import javascript from '../../assets/javascript.png';
import reactjs from '../../assets/reactjs.png';
import moon from '../../assets/moon.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        {/* TODO: Replace placeholder projects with your own projects */}
        <ProjectCard
          src={html}
          link='https://github.com/stepweaver/stepweaver.git'
          h3='HTML'
          p='Project 1 placeholder'
        />
        <ProjectCard
          src={javascript}
          link='https://github.com/stepweaver/stepweaver.git'
          h3='Javascript'
          p='Project 2 Placeholder'
        />
        <ProjectCard
          src={reactjs}
          link='https://github.com/stepweaver/stepweaver.git'
          h3='React'
          p='Project 3 placeholder'
        />
        <ProjectCard
          src={moon}
          link='https://github.com/stepweaver/stepweaver.git'
          h3='To the Moon'
          p='Project 4 placeholder'
        />
      </div>
    </section>
  );
}

export default Projects;
