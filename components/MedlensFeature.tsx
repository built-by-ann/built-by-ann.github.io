import { useState } from 'react'
import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { MEDLENS_LIVE_URL, MEDLENS_DEMO_URL, MEDLENS_GITHUB_URL } from '../src/data/medlensLinks'

const CHIPS = ['FastAPI', 'React', 'PostgreSQL', 'Google Gemini']

const STEPS = [
  { num: '1', title: 'extract', copy: 'pulls structured medication data out of clinical documents' },
  { num: '2', title: 'detect', copy: 'flags discrepancies against the current medication list' },
  { num: '3', title: 'resolve', copy: 'evidence-linked review before reconciling' },
]

export default function MedlensFeature() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  const chipStyle: CSSProperties = {
    border: '1.5px solid #490013',
    color: '#490013',
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 500,
    fontSize: 15,
    padding: '6px 18px',
    whiteSpace: 'nowrap',
  }

  const buttonStyle = (key: string, primary = false): CSSProperties => {
    const active = hoveredLink === key
    const filled = primary || active
    return {
      height: 56,
      padding: '0 26px',
      backgroundColor: filled ? '#490013' : 'transparent',
      color: filled ? '#f5d7cc' : '#490013',
      border: '1.5px solid #490013',
      fontFamily: "'Roboto', sans-serif",
      fontWeight: 500,
      fontSize: 18,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      opacity: primary && active ? 0.85 : 1,
      transition: 'background-color 0.15s ease, color 0.15s ease, opacity 0.15s ease',
    }
  }

  return (
    <section
      style={{
        backgroundColor: '#f0c3e9',
        height: 660,
        position: 'relative',
        marginTop: 130,
      }}
    >
      {/* Eyebrow */}
      <div style={{ position: 'absolute', left: 188, top: 64, display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ width: 10, height: 10, backgroundColor: '#ed8466', flexShrink: 0 }} />
        <span
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 700,
            fontSize: 14,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#490013',
          }}
        >
          flagship project
        </span>
      </div>

      {/* Title */}
      <h2
        style={{
          position: 'absolute',
          left: 188,
          top: 100,
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 700,
          fontSize: 68,
          color: '#490013',
          lineHeight: 1,
          margin: 0,
        }}
      >
        medlens
      </h2>

      {/* Skill chips */}
      <div style={{ position: 'absolute', left: 188, top: 190, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        {CHIPS.map(chip => (
          <span key={chip} style={chipStyle}>{chip}</span>
        ))}
      </div>

      {/* Description */}
      <p
        style={{
          position: 'absolute',
          left: 188,
          top: 250,
          width: 600,
          fontFamily: "'Roboto', sans-serif",
          fontStyle: 'italic',
          fontSize: 24,
          lineHeight: 1.4,
          color: '#2e4d62',
          margin: 0,
        }}
      >
        medlens is an ai-assisted medication reconciliation platform that extracts structured medication information from clinical documents and helps surface discrepancies against a patient's current medication list, with evidence-linked review and reconciliation workflows.
      </p>

      {/* How it works — fills the right column with the same 3-step pipeline described at left */}
      <div style={{ position: 'absolute', left: 850, top: 190, width: 400, display: 'flex', flexDirection: 'column', gap: 26 }}>
        {STEPS.map((step, i) => (
          <div key={step.num} style={{ display: 'flex', alignItems: 'flex-start', gap: 18, position: 'relative' }}>
            {i < STEPS.length - 1 && (
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: 21,
                  top: 44,
                  width: 1.5,
                  height: 44,
                  backgroundColor: 'rgba(73, 0, 19, 0.3)',
                }}
              />
            )}
            <div
              style={{
                width: 44,
                height: 44,
                flexShrink: 0,
                border: '1.5px solid #490013',
                backgroundColor: '#f0c3e9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 700,
                fontSize: 18,
                color: '#490013',
                position: 'relative',
                zIndex: 1,
              }}
            >
              {step.num}
            </div>
            <div>
              <div style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700, fontSize: 19, color: '#490013', marginBottom: 4 }}>
                {step.title}
              </div>
              <div style={{ fontFamily: "'Roboto', sans-serif", fontSize: 16, lineHeight: 1.4, color: '#2e4d62', maxWidth: 320 }}>
                {step.copy}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Actions — spread across the same width as the content above (left text block + steps column) */}
      <div style={{ position: 'absolute', left: 188, top: 510, width: 1062, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 18, flexWrap: 'wrap' }}>
        <a
          href={MEDLENS_LIVE_URL}
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => setHoveredLink('live')}
          onMouseLeave={() => setHoveredLink(null)}
          style={buttonStyle('live', true)}
        >
          view the live site →
        </a>

        <a
          href={MEDLENS_DEMO_URL}
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => setHoveredLink('demo')}
          onMouseLeave={() => setHoveredLink(null)}
          style={buttonStyle('demo')}
        >
          watch the demo →
        </a>

        <Link
          to="/medlens"
          onMouseEnter={() => setHoveredLink('page')}
          onMouseLeave={() => setHoveredLink(null)}
          style={buttonStyle('page')}
        >
          more about medlens →
        </Link>

        <a
          href={MEDLENS_GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => setHoveredLink('github')}
          onMouseLeave={() => setHoveredLink(null)}
          style={buttonStyle('github')}
        >
          view on github →
        </a>
      </div>
    </section>
  )
}
