import "./Projects.css"

import projectsTitle from "../../assets/Projects Title.png"
import firstProject from "../../assets/1st Project.png"
import secondProject from "../../assets/2nd Project.png"

function Projects() {
  return (
    <section id="projects" className="projects">

      <img
        src={projectsTitle}
        alt="Projects"
        className="projects-title"
      />

      <div className="projects-cards">

        <img
          src={firstProject}
          alt="First Project"
          className="project-image"
        />

        <img
          src={secondProject}
          alt="Second Project"
          className="project-image"
        />

      </div>

    </section>
  )
}

export default Projects