import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { roseMid } from '../src/colors'

export default function Navbar() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

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
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: roseMid,
        height: 95,
        padding: '0 189px',
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
      <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
        <NavLink to="/about" style={navLink('/about')} onMouseEnter={() => setHoveredLink('/about')} onMouseLeave={() => setHoveredLink(null)}>about</NavLink>
        <NavLink to="/resume" style={navLink('/resume')} onMouseEnter={() => setHoveredLink('/resume')} onMouseLeave={() => setHoveredLink(null)}>resume</NavLink>
        <a
          href="https://github.com/built-by-ann"
          target="_blank"
          rel="noreferrer"
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
        </a>
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
