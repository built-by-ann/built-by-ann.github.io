const resumePdf = '/files/AnnMathew_CSResume_2026.pdf'

export default function ResumePage() {
  return (
    <div
      style={{
        backgroundColor: '#490013',
        paddingTop: 80,
        paddingBottom: 80,
        paddingLeft: 188,
        paddingRight: 188,
      }}
    >
      <h1
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 700,
          fontSize: 68,
          color: '#ed8466',
          lineHeight: 1,
          margin: 0,
          marginBottom: 16,
        }}
      >
        my resume!
      </h1>

      <p
        style={{
          fontFamily: "'Roboto', sans-serif",
          fontStyle: 'italic',
          fontSize: 24,
          color: '#f0c3e9',
          lineHeight: 1.4,
          marginBottom: 48,
        }}
      >
        what i've been up to
      </p>

      <div style={{ outline: '4px solid #be7880' }}>
        <iframe
          src={resumePdf}
          title="Ann Mathew Resume"
          style={{
            display: 'block',
            width: '100%',
            height: 1050,
            border: 'none',
          }}
        />
      </div>

    </div>
  )
}
