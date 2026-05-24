export default function ContactPage() {
  const label = {
    fontFamily: "'Roboto', sans-serif" as const,
    fontWeight: 500,
    fontSize: 11,
    letterSpacing: '0.18em',
    textTransform: 'uppercase' as const,
    color: 'rgba(245,215,204,0.45)',
    marginBottom: 10,
  }

  const value = {
    fontFamily: "'Outfit', sans-serif" as const,
    fontWeight: 700,
    fontSize: 24,
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
        paddingTop: 100,
        paddingBottom: 100,
        paddingLeft: 188,
        paddingRight: 188,
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
          color: 'rgba(245,215,204,0.45)',
          marginBottom: 20,
        }}
      >
        get in touch
      </div>

      <h1
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 700,
          fontSize: 80,
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
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px 80px', maxWidth: 700 }}>

        <div>
          <div style={label}>email</div>
          <a href="mailto:ann.e.mathew@vanderbilt.edu" style={value}>
            ann.e.mathew@vanderbilt.edu
          </a>
        </div>

        <div>
          <div style={label}>phone</div>
          <a href="tel:+1xxxxxxxxxx" style={value}>
            (216) 926-0479
          </a>
        </div>

        <div>
          <div style={label}>github</div>
          <a href="https://github.com/built-by-ann" target="_blank" rel="noreferrer" style={value}>
            github.com/built-by-ann
          </a>
        </div>

        <div>
          <div style={label}>linkedin</div>
          <a href="https://linkedin.com/in/" target="_blank" rel="noreferrer" style={value}>
            linkedin.com/in/ann-mathew
          </a>
        </div>

      </div>
    </div>
  )
}
