import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import ExternalLink from '../src/ExternalLink'
import { fluid } from '../src/fluid'

const annPhoto = '/files/ann-photo.png'
const maskSvg = '/files/hero-mask.svg'

export default function Hero() {
  const btnStyle: CSSProperties = {
    flex: '1 1 260px',
    maxWidth: 474,
    minHeight: 86,
    padding: '16px 24px',
    textAlign: 'center',
    backgroundColor: '#1e3f55',
    color: '#f5d7cc',
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 400,
    fontSize: 24,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
  }

  return (
    <div
      style={{
        backgroundColor: '#490013',
        padding: 'clamp(40px, 7vw, 80px) var(--gutter) clamp(48px, 7vw, 86px)',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 'clamp(32px, 5vw, 56px) clamp(32px, 6vw, 68px)',
      }}
    >
      {/* Hero text */}
      <div style={{ flex: '1 1 340px', maxWidth: 463 }}>
        <h1
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 700,
            fontSize: fluid(68),
            color: '#f5d7cc',
            lineHeight: 1,
            marginBottom: 20,
          }}
        >
          welcome to my portfolio!
        </h1>
        <p
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontStyle: 'italic',
            fontSize: 24,
            color: '#f0c3e9',
            lineHeight: 1.4,
            marginBottom: 16,
          }}
        >
          i'm{' '}
          <strong style={{ fontWeight: 700, color: '#ed8466', fontStyle: 'italic' }}>ann mathew</strong>
          , and i'm a recent grad with a b.s. in computer science and climate & environmental studies from vanderbilt university. i'm passionate about using technology to drive meaningful, real-world change.
        </p>
        <p
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontStyle: 'italic',
            fontSize: 24,
            color: '#f0c3e9',
            lineHeight: 1.4,
          }}
        >
          this portfolio is a window into the work i've done so far: projects, research, and innovations that i've poured my heart into. i'm thrilled to share it with you, so thanks for stopping by!
        </p>
      </div>

      {/* Ann's photo with SVG mask. The link wraps the masked photo (not the other way round) so the
          focus ring isn't clipped by the mask. The link box is cropped to the mask's circle
          (525 of the original 544x725 photo box), and the mask is sized in percentages so the
          whole thing scales with the available width. */}
      <Link
        to="/about"
        aria-label="learn more about ann mathew"
        style={{ flex: '1 1 300px', maxWidth: 544, aspectRatio: '544 / 525', display: 'block', position: 'relative' }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-19.05%',
            left: 0,
            width: '100%',
            aspectRatio: '544 / 725',
            maskImage: `url('${maskSvg}')`,
            maskSize: '96.5% 72.4%',
            maskRepeat: 'no-repeat',
            maskPosition: '47.4% 50%',
            WebkitMaskImage: `url('${maskSvg}')`,
            WebkitMaskSize: '96.5% 72.4%',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskPosition: '47.4% 50%',
          } as CSSProperties}
        >
          <img
            src={annPhoto}
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      </Link>

      {/* CTA buttons */}
      <div style={{ flex: '1 0 100%', display: 'flex', flexWrap: 'wrap', gap: '24px clamp(24px, 8vw, 115px)' }}>
        <Link to="/spotlights" style={btnStyle}>
          check out my projects!
        </Link>
        <ExternalLink href="/files/AnnMathew_Resume.pdf" style={btnStyle}>
          download my resume!
        </ExternalLink>
      </div>
    </div>
  )
}
