import styles from './ProjectsStyles.module.css';
import mlmLogo from "../../assets/mlm.webp"
import easyNotesLogo from "../../assets/main.png"
import airBnbLogo from '../../assets/airbnb.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={mlmLogo}
          link="https://github.com/ritikyugatechno/MPS-MLM-Backend"
          h3="MLM Website"
          p="Marketing Web App"
        />
        <ProjectCard
          src={easyNotesLogo}
          link="https://github.com/karan-gander/easy-notes-frontend"
          h3="Easy Notes"
          p="Notes Provider"
        />
        <ProjectCard
          src={airBnbLogo}
          link="https://github.com/karan-gander/airbnb"
          h3="Airbnb Clone"
          p="Hotel Boolking website"
        />
        {/* <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        /> */}
      </div>
    </section>
  );
}

export default Projects;
