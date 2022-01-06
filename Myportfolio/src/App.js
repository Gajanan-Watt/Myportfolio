import "./App.css"
import { AboutSection } from "./Components/AboutSection"
import { BlogSection } from "./Components/BlogSection"
import { ContactSection } from "./Components/ContactSection"
import { HeroSection } from "./Components/HeroSection"
import { Navbar } from "./Components/Navbar"
import { ProjectsSection } from "./Components/ProjectsSection"
import { SkillsSection } from "./Components/SkillsSection"

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      {/* <BlogSection /> */}
      <ContactSection />
    </div>
  )
}

export default App
