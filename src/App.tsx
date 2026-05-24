import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HomePage from './pages/HomePage'
import ResumePage from './pages/ResumePage'
import ProjectsPage from './pages/ProjectsPage'
import SpotlightsPage from './pages/SpotlightsPage'
import StudyAbroadPage from './pages/StudyAbroadPage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash.slice(1))
        if (el) el.scrollIntoView()
      }, 0)
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ width: 1440, backgroundColor: '#490013' }}>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/spotlights" element={<SpotlightsPage />} />
          <Route path="/study-abroad" element={<StudyAbroadPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
