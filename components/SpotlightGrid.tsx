import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'

const researchPhoto = 'http://localhost:3845/assets/18457b0c6c584b1d8f3f366489f33583f436a87d.png'
const italyPhoto = 'http://localhost:3845/assets/70e1be8aec55093a5e2647e978cd1a74cdf28a51.png'

function ImageCard({ src, width = 532, to }: { src: string; width?: number; to?: string }) {
  const inner = (
    <div
      style={{
        width,
        height: 533,
        backgroundColor: '#ed8466',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        flexShrink: 0,
        cursor: to ? 'pointer' : undefined,
      }}
    >
      <div style={{ width: 345, height: 345, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
        <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }} />
      </div>
    </div>
  )
  return to ? <Link to={to} style={{ flexShrink: 0 }}>{inner}</Link> : inner
}

export default function SpotlightGrid() {
  const textCardBase: CSSProperties = {
    width: 532,
    height: 533,
    backgroundColor: '#f0c3e9',
    position: 'relative',
    overflow: 'hidden',
    flexShrink: 0,
  }

  const btnStyle: CSSProperties = {
    height: 72,
    backgroundColor: '#ed8466',
    color: '#2e4d62',
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 700,
    fontSize: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    position: 'absolute',
    width: 448,
  }

  return (
    <section style={{ marginTop: 276, paddingLeft: 188, paddingBottom: 100 }}>
      {/* Row 1 */}
      <div style={{ display: 'flex' }}>
        {/* Top-left: Research text card */}
        <div style={textCardBase}>
          <h3
            style={{
              position: 'absolute',
              left: 49,
              top: 41,
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: 32,
              color: '#490013',
              width: 416,
              lineHeight: 1.2,
            }}
          >
            my summer of research with vanderbilt university medical center
          </h3>
          <p
            style={{
              position: 'absolute',
              left: 49,
              top: 189,
              fontFamily: "'Roboto', sans-serif",
              fontStyle: 'italic',
              fontSize: 24,
              color: '#2e4d62',
              width: 428,
              lineHeight: 1.4,
            }}
          >
            in summer 2024, i worked with dr. allison mccoy to study gaps in electronic health records.
            i was able to take a deeper look into how small documentation errors can ripple into
            real-world care, and how better systems can help fix them.
          </p>
          <Link to="/spotlights#vumc" style={{ ...btnStyle, left: 0, top: 409 }}>
            click here to explore my research!
          </Link>
        </div>

        {/* Top-right: Italy photo */}
        <ImageCard src={italyPhoto} width={531} to="/spotlights#vumc" />
      </div>

      {/* Row 2 */}
      <div style={{ display: 'flex' }}>
        {/* Bottom-left: Research photo */}
        <ImageCard src={researchPhoto} to="/study-abroad" />

        {/* Bottom-right: Italy text card */}
        <div style={{ ...textCardBase, width: 531 }}>
          <h3
            style={{
              position: 'absolute',
              right: 52,
              top: 48,
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: 32,
              color: '#490013',
              width: 340,
              lineHeight: 1.2,
              textAlign: 'right',
            }}
          >
            the most underrated city in the world: my time in siena, italy
          </h3>
          <p
            style={{
              position: 'absolute',
              right: 51,
              top: 193,
              fontFamily: "'Roboto', sans-serif",
              fontStyle: 'italic',
              fontSize: 24,
              color: '#2e4d62',
              width: 428,
              lineHeight: 1.4,
              textAlign: 'right',
            }}
          >
            i spent a semester in siena, italy studying computer science, environmental policy, 
            and italian language and culture. in five months time, i met, fell in love with, 
            and adopted siena as a second home.
          </p>
          <Link to="/study-abroad" style={{ ...btnStyle, right: 0, top: 402, left: 'auto' }}>
            read all about my experience!
          </Link>
        </div>
      </div>
    </section>
  )
}
