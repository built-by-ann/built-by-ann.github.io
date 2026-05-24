import SpotlightsSection from '../../components/SpotlightsSection'

export default function SpotlightsPage() {
  return (
    <>
      <div
        style={{
          backgroundColor: '#490013',
          paddingTop: 80,
          paddingBottom: 64,
          paddingLeft: 188,
          paddingRight: 188,
        }}
      >
        <h1
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 700,
            fontSize: 68,
            color: '#f5d7cc',
            lineHeight: 1,
            margin: 0,
            marginBottom: 16,
          }}
        >
          spotlights!
        </h1>
        <p
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontStyle: 'italic',
            fontSize: 24,
            color: '#f0c3e9',
            lineHeight: 1.4,
            margin: 0,
          }}
        >
          my favorite projects from the past few years
        </p>
      </div>
      <SpotlightsSection />
    </>
  )
}
