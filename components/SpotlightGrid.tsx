import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { steelDeep } from '../src/colors'

const researchPhoto = '/files/research-photo.png'
const italyPhoto = '/files/italy-photo.png'

const CARD_PAD = 'clamp(24px, 4vw, 49px)'

function ImageCard({ src, to, labelledBy }: { src: string; to?: string; labelledBy?: string }) {
  return (
    <Link to={to ?? '/'} aria-labelledby={labelledBy} style={{ display: 'flex', minWidth: 0 }}>
      <div
        style={{
          flex: 1,
          aspectRatio: '532 / 533',
          backgroundColor: '#ed8466',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <div style={{ width: '65%', aspectRatio: '1', borderRadius: '50%', overflow: 'hidden' }}>
          <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }} />
        </div>
      </div>
    </Link>
  )
}

export default function SpotlightGrid() {
  const textCard = (align: 'left' | 'right'): CSSProperties => ({
    backgroundColor: '#f0c3e9',
    minWidth: 0,
    padding: `clamp(32px, 4vw, 44px) ${CARD_PAD} clamp(32px, 4vw, 52px)`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: align === 'left' ? 'flex-start' : 'flex-end',
    textAlign: align,
  })

  const titleStyle: CSSProperties = {
    fontFamily: "'Outfit', sans-serif",
    fontWeight: 700,
    fontSize: 32,
    color: '#490013',
    maxWidth: 416,
    lineHeight: 1.2,
    margin: 0,
  }

  const blurbStyle: CSSProperties = {
    marginTop: 'clamp(20px, 3vw, 36px)',
    marginBottom: 'clamp(28px, 4vw, 40px)',
    fontFamily: "'Roboto', sans-serif",
    fontStyle: 'italic',
    fontSize: 24,
    color: '#2e4d62',
    maxWidth: 428,
    lineHeight: 1.4,
  }

  // The button runs flush to the card's edge, as in the original design.
  const btnStyle = (flush: 'left' | 'right'): CSSProperties => ({
    marginTop: 'auto',
    minHeight: 72,
    padding: '12px 24px',
    textAlign: 'center',
    backgroundColor: '#ed8466',
    color: steelDeep,
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 700,
    fontSize: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    width: `calc(100% + ${CARD_PAD})`,
    maxWidth: `calc(448px + ${CARD_PAD})`,
    ...(flush === 'left' ? { marginLeft: `calc(-1 * ${CARD_PAD})` } : { marginRight: `calc(-1 * ${CARD_PAD})` }),
  })

  return (
    <div
      className="spotlight-grid"
      style={{
        marginTop: 'clamp(72px, 19.17vw, 276px)',
        paddingLeft: 'var(--gutter)',
        paddingRight: 'var(--gutter)',
        paddingBottom: 'clamp(56px, 7vw, 100px)',
      }}
    >
      {/* Top-left: Research text card */}
      <section aria-labelledby="spotlight-vumc-title" style={textCard('left')}>
        <h2 id="spotlight-vumc-title" style={titleStyle}>
          my summer of research with vanderbilt university medical center
        </h2>
        <p style={blurbStyle}>
          in summer 2024, i worked with dr. allison mccoy to study gaps in electronic health records.
          i was able to take a deeper look into how small documentation errors can ripple into
          real-world care, and how better systems can help fix them.
        </p>
        <Link to="/spotlights#vumc" style={btnStyle('left')}>
          click here to explore my research!
        </Link>
      </section>

      {/* Top-right: photo */}
      <ImageCard src={italyPhoto} to="/spotlights#vumc" labelledBy="spotlight-vumc-title" />

      {/* Bottom-left: photo */}
      <ImageCard src={researchPhoto} to="/study-abroad" labelledBy="spotlight-siena-title" />

      {/* Bottom-right: Italy text card */}
      <section aria-labelledby="spotlight-siena-title" style={textCard('right')}>
        <h2 id="spotlight-siena-title" style={titleStyle}>
          the most underrated city in the world: my time in siena, italy
        </h2>
        <p style={blurbStyle}>
          i spent a semester in siena, italy studying computer science, environmental policy,
          and italian language and culture. in five months time, i met, fell in love with,
          and adopted siena as a second home.
        </p>
        <Link to="/study-abroad" style={btnStyle('right')}>
          read all about my experience!
        </Link>
      </section>
    </div>
  )
}
