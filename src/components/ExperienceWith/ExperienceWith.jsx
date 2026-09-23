import "./ExperienceWith.css"

import experienceWith from "../../assets/EXPERIENCE WITH.png"
import logos from "../../assets/Logos.png"

function ExperienceWith() {
  return (
    <section className="experience-with">

      <img
        src={experienceWith}
        alt="Experience With"
        className="experience-with-title"
      />

      <img
        src={logos}
        alt="Technology Logos"
        className="experience-with-logos"
      />

    </section>
  )
}

export default ExperienceWith