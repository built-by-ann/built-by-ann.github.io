import { useState } from 'react'
import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { MEDLENS_LIVE_URL, MEDLENS_DEMO_URL, MEDLENS_GITHUB_URL } from '../src/data/medlensLinks'
import LinkLabel from '../src/LinkLabel'
import ExternalLink from '../src/ExternalLink'
import { fluid } from '../src/fluid'

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
  }

  const buttonStyle = (key: string, primary = false): CSSProperties => {
    const active = hoveredLink === key
    const filled = primary || active
    return {
      minHeight: 56,
      padding: '8px 26px',
      textAlign: 'center',
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
      opacity: primary && active ? 0.85 : 1,
      transition: 'background-color 0.15s ease, color 0.15s ease, opacity 0.15s ease',
    }
  }

  return (
    <section
      aria-labelledby="medlens-feature-title"
      style={{
        backgroundColor: '#f0c3e9',
        padding: 'clamp(48px, 6vw, 64px) var(--gutter) clamp(56px, 7vw, 94px)',
        marginTop: 'clamp(64px, 9vw, 130px)',
      }}
    >
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '48px clamp(40px, 7vw, 100px)' }}>
        <div style={{ flex: '1 1 340px', maxWidth: 600 }}>
          {/* Eyebrow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
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
            id="medlens-feature-title"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: fluid(68),
              color: '#490013',
              lineHeight: 1,
              margin: 0,
            }}
          >
            medlens
          </h2>

          {/* Skill chips */}
          <div style={{ marginTop: 22, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {CHIPS.map(chip => (
              <span key={chip} style={chipStyle}>{chip}</span>
            ))}
          </div>

          {/* Description */}
          <p
            style={{
              marginTop: 30,
              fontFamily: "'Roboto', sans-serif",
              fontStyle: 'italic',
              fontSize: 24,
              lineHeight: 1.4,
              color: '#2e4d62',
            }}
          >
            medlens is an ai-assisted medication reconciliation platform that extracts structured medication information from clinical documents and helps surface discrepancies against a patient's current medication list, with evidence-linked review and reconciliation workflows.
          </p>
        </div>

        {/* How it works: fills the right column with the same 3-step pipeline described at left */}
        <div style={{ flex: '1 1 300px', maxWidth: 400, display: 'flex', flexDirection: 'column', gap: 26 }}>
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
      </div>

      {/* Actions, spread across the full content width */}
      <div style={{ marginTop: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 18, flexWrap: 'wrap' }}>
        <ExternalLink
          href={MEDLENS_LIVE_URL}
          onMouseEnter={() => setHoveredLink('live')}
          onMouseLeave={() => setHoveredLink(null)}
          style={buttonStyle('live', true)}
        >
          <LinkLabel text="view the live site →" />
        </ExternalLink>

        <ExternalLink
          href={MEDLENS_DEMO_URL}
          onMouseEnter={() => setHoveredLink('demo')}
          onMouseLeave={() => setHoveredLink(null)}
          style={buttonStyle('demo')}
        >
          <LinkLabel text="watch the demo →" />
        </ExternalLink>

        <Link
          to="/medlens"
          onMouseEnter={() => setHoveredLink('page')}
          onMouseLeave={() => setHoveredLink(null)}
          style={buttonStyle('page')}
        >
          <LinkLabel text="more about medlens →" />
        </Link>

        <ExternalLink
          href={MEDLENS_GITHUB_URL}
          onMouseEnter={() => setHoveredLink('github')}
          onMouseLeave={() => setHoveredLink(null)}
          style={buttonStyle('github')}
        >
          <LinkLabel text="view on github →" />
        </ExternalLink>
      </div>
    </section>
  )
}
