import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { steelDeep } from '../src/colors'

const researchPhoto = '/files/research-photo.png'
const italyPhoto = '/files/italy-photo.png'

function ImageCard({ src, width = 532, to, labelledBy }: { src: string; width?: number; to?: string; labelledBy?: string }) {
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
              }}
    >
      <div style={{ width: 345, height: 345, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
        <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }} />
      </div>
    </div>
  )
  return to ? <Link to={to} aria-labelledby={labelledBy} style={{ flexShrink: 0 }}>{inner}</Link> : inner
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
    color: steelDeep,
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
    <div style={{ marginTop: 276, paddingLeft: 188, paddingBottom: 100 }}>
      {/* Row 1 */}
      <div style={{ display: 'flex' }}>
        {/* Top-left: Research text card */}
        <section aria-labelledby="spotlight-vumc-title" style={textCardBase}>
          <h2
            id="spotlight-vumc-title"
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
          </h2>
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
        </section>

        {/* Top-right: Italy photo */}
        <ImageCard src={italyPhoto} width={531} to="/spotlights#vumc" labelledBy="spotlight-vumc-title" />
      </div>

      {/* Row 2 */}
      <div style={{ display: 'flex' }}>
        {/* Bottom-left: Research photo */}
        <ImageCard src={researchPhoto} to="/study-abroad" labelledBy="spotlight-siena-title" />

        {/* Bottom-right: Italy text card */}
        <section aria-labelledby="spotlight-siena-title" style={{ ...textCardBase, width: 531 }}>
          <h2
            id="spotlight-siena-title"
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
          </h2>
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
        </section>
      </div>
    </div>
  )
}
