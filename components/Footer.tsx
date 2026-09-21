import { useState } from 'react'
import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { roseMid } from '../src/colors'

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const textStyle = (key: string): CSSProperties => ({
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 700,
    fontSize: 20,
    color: hoveredLink === key ? '#490013' : '#f5d7cc',
    textDecoration: 'none',
  })

  return (
    <footer
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
      <Link to="/" style={textStyle('home')} onMouseEnter={() => setHoveredLink('home')} onMouseLeave={() => setHoveredLink(null)}>built-by-ann</Link>
      <Link to="/contact" style={textStyle('contact')} onMouseEnter={() => setHoveredLink('contact')} onMouseLeave={() => setHoveredLink(null)}>contact me</Link>
    </footer>
  )
}
