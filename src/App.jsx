import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import ExperienceWith from "./components/ExperienceWith/ExperienceWith"
import Projects from "./components/Projects/Projects"
import Experience from "./components/Experience/Experience"
import Footer from "./components/Footer/Footer"

import "./App.css"

function App() {
  return (
    <div className="app">

      <Header />

      <main>

        <Hero />

        <ExperienceWith />

        <Projects />

        <Experience />

      </main>

      <Footer />

    </div>
  )
}

export default App