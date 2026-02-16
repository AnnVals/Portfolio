import Hero from './components/Hero';
import Timeline from './components/Timeline';
import About from './components/About';
import TechnicalSkills from './components/Technicalskills';
import ContactMe from './components/Contactme';
import i18n from './i18n/config';
import LanguageSelector from './components/LanguageSelector';
import './App.css'

function App() {

  return (
    <>
      <LanguageSelector />
      <Hero />
      <Timeline />
      <TechnicalSkills />
      <About />
      <ContactMe />
    </>
  )
}

export default App
