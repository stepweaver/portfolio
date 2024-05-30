import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === 'dark' ? checkMarkIconDark : checkMarkIconLight;

  return (
    <section id='skills' className={styles.container}>
      <h1 className='sectionTitle'>Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill='HTML' />
        <SkillList src={checkMarkIcon} skill='CSS' />
        <SkillList src={checkMarkIcon} skill='Javascript' />
        <SkillList src={checkMarkIcon} skill='Node.js' />
        <SkillList src={checkMarkIcon} skill='MongoDB' />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill='React' />
        <SkillList src={checkMarkIcon} skill='Express' />
        <SkillList src={checkMarkIcon} skill='Tailwind CSS' />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill='Redux' />
        <SkillList src={checkMarkIcon} skill='Git' />
        <SkillList src={checkMarkIcon} skill='Bootstrap' />
      </div>
    </section>
  );
}

export default Skills;
