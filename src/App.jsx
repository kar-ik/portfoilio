
import './App.css'
import Projects from './components/Projects'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Bio from './components/Bio'
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'
import Contact from './components/Contact'
import Eduction from './components/Eduction'
import Footer from './components/Footer'
function App() {

  return (
   <div className='relative h-full overflow-y-auto
   antialiased'>
    <div className='fixed inset-0 bg-fixed bg-cover bg-center
    bg-img'>

    </div>
    <div className='relative z-10 flex flex-col items-center
    p-4 space-y-8 container mx-auto'>
      <Navbar/>
      <Hero/>
      <Projects/>
      <Bio/>
      <Skills/>
      <WorkExperience/>
      <Eduction/>
      <Contact/>
      <Footer/>
    </div>
   </div>
  )
}

export default App
