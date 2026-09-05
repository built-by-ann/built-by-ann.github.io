import { useEffect, useState } from 'react'
import type { CSSProperties, ReactNode } from 'react'
import { MEDLENS_LIVE_URL, MEDLENS_DEMO_URL, MEDLENS_GITHUB_URL } from '../data/medlensLinks'

interface GalleryItem {
  src: string
  caption: string
}

const ink = '#490013'
const cream = '#f5d7cc'
const lavender = '#f0c3e9'
const coral = '#ed8466'
const steel = '#2e4d62'
const mauve = '#be7880'

const TECH_STACK = [
  'react', 'typescript', 'fastapi', 'python', 'postgresql',
  'sqlalchemy', 'docker', 'aws', 'gemini', 'medgemma',
]

const STEPS = [
  { num: '1', title: 'add a patient', copy: 'create a patient and their current medication list' },
  { num: '2', title: 'upload documents', copy: 'upload one or more synthetic clinical documents' },
  { num: '3', title: 'extract with ai', copy: 'an llm extracts structured medication data, including name, dosage, route, frequency, and status' },
  { num: '4', title: 'reconcile', copy: 'the extracted data passes into deterministic reconciliation logic' },
  { num: '5', title: 'surface discrepancies', copy: 'the application logic surfaces potential discrepancies for review' },
  { num: '6', title: 'review the evidence', copy: 'each finding links back to the document it came from, for review and resolution' },
]

const SHOTS = [
  { src: '/medlens_screenshots/dashboard.png', caption: 'dashboard' },
  { src: '/medlens_screenshots/patient-overview.png', caption: 'patient overview' },
  { src: '/medlens_screenshots/patient-med-management.png', caption: 'medication management' },
  { src: '/medlens_screenshots/medications-csv-import.png', caption: 'csv medication import' },
  { src: '/medlens_screenshots/analysis-ai-summary.png', caption: 'ai-generated summary' },
  { src: '/medlens_screenshots/analysis-reconciliation.png', caption: 'reconciliation findings' },
]

const FIGURES = [
  { src: '/medlens_figures/medication_detection.svg', caption: 'precision, recall & f1 by model' },
  { src: '/medlens_figures/reliability.svg', caption: 'output reliability by model' },
  { src: '/medlens_figures/by_difficulty.svg', caption: 'f1 by case difficulty' },
]

const EVAL_CARDS = [
  { model: 'gemini', stat: '93.5%', statLabel: 'end-to-end micro f1', sub: '100% evaluable case rate' },
  { model: 'medgemma', stat: '83.7%', statLabel: 'end-to-end micro f1', sub: '96.7% evaluable case rate' },
  { model: 'openbiollm', stat: '0', statLabel: 'evaluable cases', sub: 'no valid json under the standardized protocol' },
]

const DECISIONS = [
  {
    title: 'separating llm extraction from deterministic reconciliation',
    note: 'the model only reads documents. every comparison against the medication list runs in plain backend logic.',
  },
  {
    title: 'provider-agnostic model architecture',
    note: 'gemini, medgemma, and openbiollm all plug into the same extraction interface.',
  },
  {
    title: 'strict structured-output validation',
    note: 'extracted output is validated against a defined schema before it ever reaches reconciliation.',
  },
  {
    title: 'evidence-linked findings',
    note: 'every discrepancy points back to the exact document it was found in.',
  },
  {
    title: 'structured persistent application data',
    note: 'patients, medications, documents, and analyses are modeled and stored relationally in postgresql.',
  },
  {
    title: 'synthetic clinical data by design',
    note: 'every document and patient record in medlens is synthetic, with no real patient data involved.',
  },
]

const ARCHITECTURE = ['react + typescript frontend', 'fastAPI backend', 'application + deterministic reconciliation logic', 'postgreSQL']

function eyebrow(light: boolean): CSSProperties {
  return {
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 500,
    fontSize: 12,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: light ? 'rgba(245,215,204,0.5)' : 'rgba(73,0,19,0.45)',
    marginBottom: 20,
  }
}

function Eyebrow({ children, light }: { children: ReactNode; light: boolean }) {
  return <div style={eyebrow(light)}>{children}</div>
}

function heading(size: number, color: string): CSSProperties {
  return {
    fontFamily: "'Outfit', sans-serif",
    fontWeight: 700,
    fontSize: size,
    color,
    lineHeight: 1.05,
    margin: 0,
  }
}

function body(color: string, size = 20): CSSProperties {
  return {
    fontFamily: "'Roboto', sans-serif",
    fontStyle: 'italic',
    fontSize: size,
    color,
    lineHeight: 1.65,
    margin: 0,
  }
}

// Reused across "how it works" and the architecture diagram — a small bordered numeral badge
function Badge({ children, border }: { children: ReactNode; border: string }) {
  return (
    <div
      style={{
        width: 40,
        height: 40,
        flexShrink: 0,
        border: `1.5px solid ${border}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Outfit', sans-serif",
        fontWeight: 700,
        fontSize: 16,
        color: border,
      }}
    >
      {children}
    </div>
  )
}

// Full-size viewer for the screenshot and figure grids — click an image to open it, arrow keys
// or the on-screen arrows move through the rest of that group, escape or the backdrop closes it.
function Lightbox({ items, index, onClose, onStep }: { items: GalleryItem[]; index: number; onClose: () => void; onStep: (dir: -1 | 1) => void }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') onStep(-1)
      else if (e.key === 'ArrowRight') onStep(1)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose, onStep])

  const current = items[index]
  const arrowStyle: CSSProperties = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    color: cream,
    fontFamily: "'Outfit', sans-serif",
    fontSize: 40,
    lineHeight: 1,
    cursor: 'pointer',
    padding: 16,
    opacity: 0.7,
    transition: 'opacity 0.15s ease',
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={current.caption}
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(73,0,19,0.92)',
        zIndex: 1000,
      }}
    >
      <button
        type="button"
        aria-label="close"
        onClick={onClose}
        style={{
          position: 'absolute',
          top: 32,
          right: 40,
          background: 'none',
          border: 'none',
          color: cream,
          fontSize: 28,
          cursor: 'pointer',
          opacity: 0.7,
          transition: 'opacity 0.15s ease',
        }}
        onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
        onMouseLeave={e => (e.currentTarget.style.opacity = '0.7')}
      >
        ✕
      </button>

      {items.length > 1 && (
        <button
          type="button"
          aria-label="previous"
          onClick={e => { e.stopPropagation(); onStep(-1) }}
          style={{ ...arrowStyle, left: 24 }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '0.7')}
        >
          ←
        </button>
      )}

      {/* Explicit inset box (not vw/vh — this site applies a CSS zoom on <html> that scales
          viewport units unpredictably) so the image can size itself unambiguously via percentages. */}
      <div style={{ position: 'absolute', top: 90, left: 130, right: 130, bottom: 108, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img
          src={current.src}
          alt={current.caption}
          onClick={e => e.stopPropagation()}
          style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto', objectFit: 'contain', border: `1.5px solid ${cream}` }}
        />
      </div>

      <div style={{ position: 'absolute', bottom: 24, left: 0, right: 0, textAlign: 'center' }}>
        <p style={{ fontFamily: "'Roboto', sans-serif", fontStyle: 'italic', fontSize: 18, color: cream, margin: 0, marginBottom: 8 }}>
          {current.caption}
        </p>
        {items.length > 1 && (
          <div style={{ fontFamily: "'Roboto', sans-serif", fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,215,204,0.5)' }}>
            {index + 1} / {items.length}
          </div>
        )}
      </div>

      {items.length > 1 && (
        <button
          type="button"
          aria-label="next"
          onClick={e => { e.stopPropagation(); onStep(1) }}
          style={{ ...arrowStyle, right: 24 }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '0.7')}
        >
          →
        </button>
      )}
    </div>
  )
}

export default function MedlensPage() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [hoveredShot, setHoveredShot] = useState<number | null>(null)
  const [lightbox, setLightbox] = useState<{ items: GalleryItem[]; index: number } | null>(null)

  const openLightbox = (items: GalleryItem[], index: number) => setLightbox({ items, index })
  const stepLightbox = (dir: -1 | 1) =>
    setLightbox(lb => (lb ? { ...lb, index: (lb.index + dir + lb.items.length) % lb.items.length } : lb))

  const buttonStyle = (key: string, primary: boolean, bg: string, fg: string): CSSProperties => {
    const active = hoveredLink === key
    const filled = primary || active
    return {
      height: 56,
      padding: '0 26px',
      backgroundColor: filled ? fg : 'transparent',
      color: filled ? bg : fg,
      border: `1.5px solid ${fg}`,
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
    <div>

      {/* ─── HERO ─── */}
      <div style={{ backgroundColor: lavender, padding: '120px 188px 100px' }}>
        <Eyebrow light={false}>flagship project</Eyebrow>
        <h1 style={{ ...heading(96, ink), marginBottom: 32 }}>medlens</h1>
        <p style={{ ...body(steel, 26), maxWidth: 780, marginBottom: 48 }}>
          an ai-assisted medication reconciliation platform that extracts structured medication
          information from clinical documents and uses deterministic application logic to surface
          discrepancies against a patient's current medication list.
        </p>

        <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap', marginBottom: 56 }}>
          <a
            href={MEDLENS_LIVE_URL}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => setHoveredLink('live')}
            onMouseLeave={() => setHoveredLink(null)}
            style={buttonStyle('live', true, lavender, ink)}
          >
            view the live site →
          </a>
          <a
            href={MEDLENS_DEMO_URL}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => setHoveredLink('demo')}
            onMouseLeave={() => setHoveredLink(null)}
            style={buttonStyle('demo', false, lavender, ink)}
          >
            watch the demo →
          </a>
          <a
            href={MEDLENS_GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => setHoveredLink('github')}
            onMouseLeave={() => setHoveredLink(null)}
            style={buttonStyle('github', false, lavender, ink)}
          >
            view on github →
          </a>
        </div>

        <div style={{ borderTop: '1.5px solid rgba(73,0,19,0.15)', paddingTop: 24 }}>
          <div style={{ ...eyebrow(false), marginBottom: 16 }}>built with</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {TECH_STACK.map(tech => (
              <span
                key={tech}
                style={{
                  border: `1.5px solid ${ink}`,
                  color: ink,
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  padding: '6px 18px',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ─── WHY MEDLENS ─── */}
      <div style={{ backgroundColor: ink, padding: '96px 188px' }}>
        <Eyebrow light>01 · why medlens</Eyebrow>
        <h2 style={{ ...heading(56, cream), marginBottom: 36, maxWidth: 700 }}>
          medication data lives in too many places
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 820 }}>
          <p style={body(lavender)}>
            medication information is often scattered across medication lists, clinical notes,
            discharge documentation, and other records. medlens explores how ai can assist with
            extracting that information while keeping the actual reconciliation process
            transparent and deterministic.
          </p>
          <p style={body(lavender)}>
            the project was inspired by my previous biomedical informatics research on medication
            documentation, but medlens is an independent software engineering portfolio project
            built entirely with synthetic clinical data.
          </p>
        </div>
      </div>

      {/* ─── HOW IT WORKS ─── */}
      <div style={{ backgroundColor: cream, padding: '96px 188px' }}>
        <Eyebrow light={false}>02 · how it works</Eyebrow>
        <h2 style={{ ...heading(56, ink), marginBottom: 56 }}>from documents to reconciled data</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {[STEPS.slice(0, 2), STEPS.slice(2, 4), STEPS.slice(4, 6)].map((row, i) => (
            <div key={i}>
              <div style={{ display: 'flex', gap: 40 }}>
                {row.map(step => (
                  <div key={step.num} style={{ flex: 1, display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <Badge border={ink}>{step.num}</Badge>
                    <div>
                      <div style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700, fontSize: 18, color: ink, marginBottom: 4 }}>
                        {step.title}
                      </div>
                      <div style={{ fontFamily: "'Roboto', sans-serif", fontSize: 15, lineHeight: 1.5, color: steel }}>
                        {step.copy}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {i < 2 && (
                <div
                  aria-hidden="true"
                  style={{ fontFamily: "'Outfit', sans-serif", fontSize: 20, color: 'rgba(73,0,19,0.3)', margin: '16px 0 0 20px' }}
                >
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>

        <p style={{ ...body(steel, 15), marginTop: 40, opacity: 0.75, maxWidth: 700 }}>
          the llm's role is limited to step 3: extraction. every comparison against the medication
          list is handled by deterministic application logic, not the model.
        </p>
      </div>

      {/* ─── PRODUCT ─── */}
      <div style={{ backgroundColor: steel, padding: '96px 188px' }}>
        <Eyebrow light>03 · product</Eyebrow>
        <h2 style={{ ...heading(56, cream), marginBottom: 56 }}>inside the application</h2>

        {/* hover to reveal the caption — same treatment as the photo grid at the bottom of the study abroad page. click to open full-size. */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          {SHOTS.map((shot, i) => (
            <button
              type="button"
              key={shot.src}
              onClick={() => openLightbox(SHOTS, i)}
              style={{
                position: 'relative',
                aspectRatio: '16/10',
                overflow: 'hidden',
                border: '1.5px solid rgba(245,215,204,0.25)',
                padding: 0,
                background: 'none',
                cursor: 'pointer',
                display: 'block',
                width: '100%',
              }}
              onMouseEnter={() => setHoveredShot(i)}
              onMouseLeave={() => setHoveredShot(null)}
            >
              <img
                src={shot.src}
                alt={shot.caption}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
              />

              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(73,0,19,0.88)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 20,
                  opacity: hoveredShot === i ? 1 : 0,
                  transition: 'opacity 0.2s ease',
                }}
              >
                <p
                  style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontStyle: 'italic',
                    fontSize: 16,
                    color: cream,
                    textAlign: 'center',
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {shot.caption}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ─── UNDER THE HOOD ─── */}
      <div style={{ backgroundColor: lavender, padding: '96px 188px' }}>
        <Eyebrow light={false}>04 · under the hood</Eyebrow>
        <h2 style={{ ...heading(56, ink), marginBottom: 36, maxWidth: 700 }}>how it's built</h2>
        <p style={{ ...body(steel), maxWidth: 780, marginBottom: 64 }}>
          medlens is a full-stack application: a react + typescript frontend, a fastapi backend,
          postgresql persistence, dockerized deployment, https on aws ec2, and automated
          frontend and backend testing.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, marginBottom: 32 }}>
          {ARCHITECTURE.map((layer, i) => (
            <div key={layer} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div
                style={{
                  border: `1.5px solid ${ink}`,
                  width: 480,
                  minHeight: 76,
                  padding: '12px 32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 700,
                  fontSize: 17,
                  lineHeight: 1.3,
                  color: ink,
                  textAlign: 'center',
                }}
              >
                {layer}
              </div>
              {i < ARCHITECTURE.length - 1 && (
                <div aria-hidden="true" style={{ fontFamily: "'Outfit', sans-serif", fontSize: 22, color: 'rgba(73,0,19,0.4)', padding: '6px 0' }}>
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ backgroundColor: coral, padding: '18px 32px', maxWidth: 480 }}>
            <p style={{ fontFamily: "'Roboto', sans-serif", fontStyle: 'italic', fontSize: 15, color: ink, lineHeight: 1.6, margin: 0, textAlign: 'center' }}>
              the backend separately calls a provider-agnostic model layer for medication
              extraction only.
            </p>
          </div>
        </div>
      </div>

      {/* ─── WHERE AI FITS ─── */}
      <div style={{ backgroundColor: ink, padding: '96px 188px' }}>
        <Eyebrow light>05 · where ai fits</Eyebrow>
        <h2 style={{ ...heading(56, cream), marginBottom: 36, maxWidth: 700 }}>one job, done well</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 820, marginBottom: 40 }}>
          <p style={body(lavender)}>
            the model has one focused responsibility: extracting structured medication information
            from unstructured clinical text.
          </p>
          <p style={body(lavender)}>
            reconciliation is handled separately by deterministic backend logic. this separation
            makes the comparison behavior easier to inspect, test, and reason about.
          </p>
          <p style={body(lavender)}>
            the ai layer supports multiple providers through the same interface, including gemini,
            medgemma, and openbiollm.
          </p>
        </div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {['gemini', 'medgemma', 'openbiollm'].map(m => (
            <span
              key={m}
              style={{
                border: `1.5px solid ${mauve}`,
                color: lavender,
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 500,
                fontSize: 14,
                padding: '6px 18px',
              }}
            >
              {m}
            </span>
          ))}
        </div>
      </div>

      {/* ─── MODEL EVALUATION ─── */}
      <div style={{ backgroundColor: cream, padding: '96px 188px' }}>
        <Eyebrow light={false}>06 · model evaluation</Eyebrow>
        <h2 style={{ ...heading(56, ink), marginBottom: 24 }}>putting the models to the test</h2>
        <p style={{ ...body(steel), maxWidth: 780, marginBottom: 48 }}>
          i benchmarked all three models on the same 30 synthetic medication-extraction cases,
          using a standardized prompt and evaluation pipeline.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 40 }}>
          {EVAL_CARDS.map(card => (
            <div key={card.model} style={{ border: `1.5px solid ${ink}`, padding: '32px 28px' }}>
              <div style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', color: coral, marginBottom: 20 }}>
                {card.model}
              </div>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 48, color: ink, lineHeight: 1, marginBottom: 8 }}>
                {card.stat}
              </div>
              <div style={{ fontFamily: "'Roboto', sans-serif", fontSize: 14, color: steel, marginBottom: 14 }}>
                {card.statLabel}
              </div>
              <div style={{ fontFamily: "'Roboto', sans-serif", fontStyle: 'italic', fontSize: 14, color: steel, opacity: 0.75, lineHeight: 1.5 }}>
                {card.sub}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 40 }}>
          {FIGURES.map((fig, i) => (
            <div key={fig.src}>
              <button
                type="button"
                onClick={() => openLightbox(FIGURES, i)}
                style={{ border: `1.5px solid ${ink}`, marginBottom: 14, padding: 0, background: 'none', cursor: 'pointer', display: 'block', width: '100%' }}
              >
                <img src={fig.src} alt={fig.caption} style={{ width: '100%', display: 'block' }} />
              </button>
              <div style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700, fontSize: 14, color: steel, opacity: 0.7 }}>
                {fig.caption}
              </div>
            </div>
          ))}
        </div>

        <p style={{ ...body(steel, 15), opacity: 0.8, maxWidth: 780 }}>
          this benchmark evaluates medication extraction only, not reconciliation or general
          clinical reasoning. openbiollm's result reflects performance under this standardized
          protocol only, not proof that the model is universally incapable of medication
          extraction.
        </p>
      </div>

      {/* ─── ENGINEERING DECISIONS ─── */}
      <div style={{ backgroundColor: ink, padding: '96px 188px' }}>
        <Eyebrow light>07 · engineering decisions</Eyebrow>
        <h2 style={{ ...heading(56, cream), marginBottom: 56 }}>decisions that shaped the build</h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
          {DECISIONS.map(d => (
            <div key={d.title} style={{ borderTop: `1.5px solid ${mauve}`, paddingTop: 24 }}>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 18, color: coral, marginBottom: 10, lineHeight: 1.25 }}>
                {d.title}
              </div>
              <p style={{ fontFamily: "'Roboto', sans-serif", fontStyle: 'italic', fontSize: 15, color: lavender, lineHeight: 1.55, margin: 0, opacity: 0.85 }}>
                {d.note}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ─── CLOSING ─── */}
      <div style={{ backgroundColor: cream, padding: '96px 188px' }}>
        <h2 style={{ ...heading(56, ink), marginBottom: 40 }}>explore medlens</h2>

        <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap', marginBottom: 40 }}>
          <a
            href={MEDLENS_LIVE_URL}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => setHoveredLink('closing-live')}
            onMouseLeave={() => setHoveredLink(null)}
            style={buttonStyle('closing-live', true, cream, ink)}
          >
            launch medlens →
          </a>
          <a
            href={MEDLENS_DEMO_URL}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => setHoveredLink('closing-demo')}
            onMouseLeave={() => setHoveredLink(null)}
            style={buttonStyle('closing-demo', false, cream, ink)}
          >
            watch the demo →
          </a>
          <a
            href={MEDLENS_GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => setHoveredLink('closing-github')}
            onMouseLeave={() => setHoveredLink(null)}
            style={buttonStyle('closing-github', false, cream, ink)}
          >
            view the code →
          </a>
        </div>

        <p style={{ fontFamily: "'Roboto', sans-serif", fontStyle: 'italic', fontSize: 13, color: ink, opacity: 0.5, lineHeight: 1.6, maxWidth: 640, marginTop: 16 }}>
          medlens uses synthetic clinical data only and is an educational software engineering
          portfolio project. it is not intended for clinical use.
        </p>
      </div>

      {lightbox && (
        <Lightbox
          items={lightbox.items}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
          onStep={stepLightbox}
        />
      )}

    </div>
  )
}
