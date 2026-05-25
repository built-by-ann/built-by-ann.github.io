import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const textStyle: CSSProperties = {
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 700,
    fontSize: 20,
    color: '#f5d7cc',
    textDecoration: 'none',
  }

  return (
    <footer
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#be7880',
        height: 95,
        padding: '0 189px',
        width: '100%',
      }}
    >
      <Link to="/" style={textStyle}>built-by-ann</Link>
      <Link to="/contact" style={textStyle}>contact me</Link>
    </footer>
  )
}
