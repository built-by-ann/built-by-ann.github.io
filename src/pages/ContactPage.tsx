import { creamMuted } from '../colors'
import ExternalLink from '../ExternalLink'
import { fluid } from '../fluid'

export default function ContactPage() {
  const label = {
    fontFamily: "'Roboto', sans-serif" as const,
    fontWeight: 500,
    fontSize: 11,
    letterSpacing: '0.18em',
    textTransform: 'uppercase' as const,
    color: creamMuted,
    marginBottom: 10,
  }

  const value = {
    fontFamily: "'Outfit', sans-serif" as const,
    fontWeight: 700,
    fontSize: 'clamp(17px, 5.5vw, 24px)',
    color: '#f5d7cc',
    textDecoration: 'none',
    lineHeight: 1,
  }

  return (
    <div
      id="contact"
      style={{
        backgroundColor: '#2e4d62',
        minHeight: 'calc(100vh - 190px)',
        paddingTop: 'var(--section-y)',
        paddingBottom: 'var(--section-y)',
        paddingLeft: 'var(--gutter)',
        paddingRight: 'var(--gutter)',
      }}
    >
      {/* Header */}
      <div
        style={{
          fontFamily: "'Roboto', sans-serif",
          fontWeight: 500,
          fontSize: 12,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: creamMuted,
          marginBottom: 20,
        }}
      >
        get in touch
      </div>

      <h1
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 700,
          fontSize: fluid(80),
          color: '#f5d7cc',
          lineHeight: 1,
          margin: 0,
          marginBottom: 20,
        }}
      >
        say hello!
      </h1>

      <p
        style={{
          fontFamily: "'Roboto', sans-serif",
          fontStyle: 'italic',
          fontSize: 22,
          color: '#f0c3e9',
          lineHeight: 1.4,
          margin: 0,
          marginBottom: 64,
          opacity: 0.85,
        }}
      >
        i'm always happy to discuss projects, opportunities, or anything else! feel free to reach out to connect.
      </p>

      <div style={{ borderBottom: '1.5px solid rgba(245,215,204,0.2)', marginBottom: 64 }} />

      {/* Contact grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '48px 80px', maxWidth: 700 }}>

        <div>
          <div style={label}>email</div>
          <a href="mailto:ann.e.mathew154@gmail.com" style={value}>
            ann.e.mathew154@gmail.com
          </a>
        </div>

        <div>
          <div style={label}>phone</div>
          <a href="tel:+12169260479" style={value}>
            (216) 926-0479
          </a>
        </div>

        <div>
          <div style={label}>github</div>
          <ExternalLink href="https://github.com/built-by-ann" style={value}>
            github.com/built-by-ann
          </ExternalLink>
        </div>

        <div>
          <div style={label}>linkedin</div>
          <ExternalLink href="https://www.linkedin.com/in/ann-mathew154" style={value}>
            linkedin.com/in/ann-mathew154
          </ExternalLink>
        </div>

      </div>
    </div>
  )
}
