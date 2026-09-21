import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HomePage from './pages/HomePage'
import ResumePage from './pages/ResumePage'
import ProjectsPage from './pages/ProjectsPage'
import SpotlightsPage from './pages/SpotlightsPage'
import StudyAbroadPage from './pages/StudyAbroadPage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import MedlensPage from './pages/MedlensPage'

function SkipLink() {
  // Native anchor navigation to a tabIndex={-1} target already moves focus in most
  // evergreen browsers, but this backstops that explicitly so it's reliable everywhere.
  const focusMain = () => {
    document.getElementById('main-content')?.focus()
  }

  return (
    <a href="#main-content" className="skip-link" onClick={focusMain}>
      skip to main content
    </a>
  )
}

const SITE_TITLE = 'Ann Mathew | Portfolio'
const PAGE_TITLES: Record<string, string> = {
  '/about': 'About',
  '/resume': 'Resume',
  '/projects': 'Projects',
  '/spotlights': 'Spotlights',
  '/study-abroad': 'Study Abroad',
  '/medlens': 'Medlens',
  '/contact': 'Contact',
}

// Client-side navigation doesn't reset focus or update the title the way a page load does, so
// do both here. Focus lands on the page's <h1> (given tabindex=-1 so it's focusable by script
// only, never in the Tab order); the focus move is what screen readers announce, so there is no
// separate live region. Skipped on first load and for hash-only navigation (in-page anchors).
function RouteAnnouncer() {
  const { pathname, hash } = useLocation()
  const previousPath = useRef(pathname)

  useEffect(() => {
    const name = PAGE_TITLES[pathname]
    document.title = name ? `${name} | Ann Mathew` : SITE_TITLE
  }, [pathname])

  useEffect(() => {
    if (previousPath.current === pathname) return
    previousPath.current = pathname
    if (hash) return
    const target = document.querySelector<HTMLElement>('#main-content h1') ?? document.getElementById('main-content')
    if (!target) return
    if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1')
    target.focus({ preventScroll: true })
  }, [pathname, hash])

  return null
}

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
        <SkipLink />
        <ScrollToTop />
        <RouteAnnouncer />
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/spotlights" element={<SpotlightsPage />} />
            <Route path="/study-abroad" element={<StudyAbroadPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/medlens" element={<MedlensPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
