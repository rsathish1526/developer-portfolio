import "./Experience.css"

import experienceTitle from "../../assets/Experience Title.png"
import experienceSection from "../../assets/Experience Section.png"

function Experience() {
  return (
    <section id="experience" className="experience">

      <img
        src={experienceTitle}
        alt="Experience"
        className="experience-title"
      />

      <img
        src={experienceSection}
        alt="Professional Experience"
        className="experience-section"
      />

    </section>
  )
}

export default Experience