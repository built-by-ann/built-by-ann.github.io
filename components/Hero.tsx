import type { CSSProperties } from 'react'
import { useNavigate } from 'react-router-dom'

const annPhoto = '/files/ann-photo.png'
const maskSvg = '/files/hero-mask.svg'

export default function Hero() {
  const navigate = useNavigate()
  const btnStyle: CSSProperties = {
    width: 474,
    height: 86,
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
    <section
      style={{
        backgroundColor: '#490013',
        height: 846,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Hero text */}
      <div style={{ position: 'absolute', left: 188, top: 109, width: 463 }}>
        <h1
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 700,
            fontSize: 68,
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

      {/* Ann's photo with SVG mask */}
      <div
        onClick={() => navigate('/about')}
        style={{
          position: 'absolute',
          left: 719,
          top: 26,
          width: 544,
          height: 725,
          cursor: 'pointer',
          maskImage: `url('${maskSvg}')`,
          maskSize: '525px 525px',
          maskRepeat: 'no-repeat',
          maskPosition: '9px 100px',
          WebkitMaskImage: `url('${maskSvg}')`,
          WebkitMaskSize: '525px 525px',
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskPosition: '9px 100px',
        } as CSSProperties}
      >
        <img
          src={annPhoto}
          alt="Ann Mathew"
          style={{ width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }}
        />
      </div>

      {/* CTA buttons */}
      <a href="https://github.com/built-by-ann" target="_blank" rel="noreferrer" style={{ ...btnStyle, position: 'absolute', left: 188, top: 760 }}>
        check out my github!
      </a>
      <a href="/files/AnnMathew_CSResume_2026.pdf" target="_blank" rel="noreferrer" style={{ ...btnStyle, position: 'absolute', left: 777, top: 760 }}>
        download my resume!
      </a>
    </section>
  )
}
