import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { roseMid } from '../src/colors'
import ExternalLink from '../src/ExternalLink'

export default function Navbar() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  // Only used below 1060px, where the links collapse behind the menu button (see styles.css).
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const menuOpenRef = useRef(false)
  menuOpenRef.current = menuOpen
  const { key: locationKey } = useLocation()

  // Close the menu whenever a navigation happens (the location key also changes when the link for the
  // current page is clicked). A real route change moves focus to the new page's heading; if focus is
  // still inside the menu that is about to hide, hand it to the menu button so it isn't lost.
  useEffect(() => {
    if (!menuOpenRef.current) return
    if (navRef.current?.contains(document.activeElement)) toggleRef.current?.focus()
    setMenuOpen(false)
  }, [locationKey])

  // Escape closes the menu, returning focus to the button if it was inside the menu.
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      if (navRef.current?.contains(document.activeElement)) toggleRef.current?.focus()
      setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const navLink = (to: string) => ({ isActive }: { isActive: boolean }) => ({
    fontFamily: "'Roboto', sans-serif" as const,
    fontWeight: 700,
    fontStyle: (isActive || hoveredLink === to) ? 'italic' as const : 'normal' as const,
    fontSize: 19,
    color: (isActive || hoveredLink === to) ? '#490013' : '#f5d7cc',
    textDecoration: 'none' as const,
    whiteSpace: 'nowrap' as const,
  })

  return (
    <header>
    <nav
      ref={navRef}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: roseMid,
        minHeight: 95,
        padding: '16px var(--gutter)',
        flexWrap: 'wrap',
        gap: '12px 32px',
        width: '100%',
      }}
    >
      <Link
        to="/"
        style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700, fontSize: 20, color: hoveredLink === 'logo' ? '#490013' : '#f5d7cc', textDecoration: 'none', whiteSpace: 'nowrap' }}
        onMouseEnter={() => setHoveredLink('logo')}
        onMouseLeave={() => setHoveredLink(null)}
       
      >
        built-by-ann
      </Link>

      <button
        ref={toggleRef}
        type="button"
        className="nav-toggle"
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={() => setMenuOpen(open => !open)}
      >
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" aria-hidden="true" focusable="false">
          {menuOpen ? <path d="M6 6l16 16M22 6L6 22" /> : <path d="M4 7h20M4 14h20M4 21h20" />}
        </svg>
      </button>

      <div id="primary-navigation" className={`nav-links${menuOpen ? ' is-open' : ''}`}>
        <NavLink to="/about" style={navLink('/about')} onMouseEnter={() => setHoveredLink('/about')} onMouseLeave={() => setHoveredLink(null)}>about</NavLink>
        <NavLink to="/resume" style={navLink('/resume')} onMouseEnter={() => setHoveredLink('/resume')} onMouseLeave={() => setHoveredLink(null)}>resume</NavLink>
        <ExternalLink
          href="https://github.com/built-by-ann"
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 700,
            fontStyle: hoveredLink === 'github' ? 'italic' : 'normal',
            fontSize: 19,
            color: hoveredLink === 'github' ? '#490013' : '#f5d7cc',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={() => setHoveredLink('github')}
          onMouseLeave={() => setHoveredLink(null)}
         
        >
          github
        </ExternalLink>
        <NavLink to="/spotlights" style={navLink('/spotlights')} onMouseEnter={() => setHoveredLink('/spotlights')} onMouseLeave={() => setHoveredLink(null)}>spotlights</NavLink>
        <NavLink to="/projects" style={navLink('/projects')} onMouseEnter={() => setHoveredLink('/projects')} onMouseLeave={() => setHoveredLink(null)}>projects</NavLink>
        <NavLink to="/medlens" style={navLink('/medlens')} onMouseEnter={() => setHoveredLink('/medlens')} onMouseLeave={() => setHoveredLink(null)}>medlens</NavLink>
        <NavLink to="/study-abroad" style={navLink('/study-abroad')} onMouseEnter={() => setHoveredLink('/study-abroad')} onMouseLeave={() => setHoveredLink(null)}>study abroad</NavLink>
        <NavLink to="/contact" style={navLink('/contact')} onMouseEnter={() => setHoveredLink('/contact')} onMouseLeave={() => setHoveredLink(null)}>contact me</NavLink>
      </div>
    </nav>
    </header>
  )
}
