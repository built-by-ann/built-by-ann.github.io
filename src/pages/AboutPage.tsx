import type { CSSProperties } from 'react'

function ImagePlaceholder({ style }: { style?: CSSProperties }) {
  return (
    <div
      style={{
        backgroundColor: 'rgba(73,0,19,0.08)',
        border: '1.5px solid rgba(73,0,19,0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}
    >
      <span
        style={{
          fontFamily: "'Roboto', sans-serif",
          fontSize: 12,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'rgba(73,0,19,0.25)',
        }}
      >
        photo
      </span>
    </div>
  )
}

const interests = [
  { label: 'machine learning & AI', note: 'from computer vision to generative systems' },
  { label: 'healthcare technology', note: 'building tools that help real people' },
  { label: 'full-stack development', note: 'i like knowing how the whole thing works' },
  { label: 'UX & product thinking', note: 'design is part of engineering, not separate' },
  { label: 'geospatial & environmental tech', note: 'data that connects code to the physical world' },
  { label: 'systems thinking', note: 'how systems connect and affect each other' },
]

export default function AboutPage() {
  const ink = '#490013'

  const label: CSSProperties = {
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 500,
    fontSize: 12,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: 'rgba(73,0,19,0.4)',
    marginBottom: 20,
  }

  const body: CSSProperties = {
    fontFamily: "'Roboto', sans-serif",
    fontStyle: 'italic',
    fontSize: 20,
    color: ink,
    lineHeight: 1.65,
    margin: 0,
  }

  return (
    <div style={{ backgroundColor: '#f0c3e9' }}>

      {/* ─── INTRO ─── */}
      <div
        id="about"
        style={{
          padding: '100px 188px 80px',
          display: 'flex',
          gap: 80,
          alignItems: 'center',
        }}
      >
        <div style={{ flex: 3 }}>
          <div style={label}>about me</div>
          <h1
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: 88,
              color: ink,
              lineHeight: 1,
              margin: 0,
              marginBottom: 24,
            }}
          >
            hi, i'm ann!
          </h1>
          <p
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 700,
              fontSize: 20,
              color: ink,
              opacity: 0.6,
              margin: 0,
              marginBottom: 40,
            }}
          >
            b.s. in computer science, climate & environmental studies
            vanderbilt university
          </p>

          <p style={{ ...body, marginBottom: 20 }}>
            i'm a recent grad with a background that spans software engineering, machine learning, 
            full-stack development, geospatial data science, and UX. i have always pursued projects 
            where engineering, research, and human behavior intersect because i believe that the most 
            interesting problems sit at the edges between fields.
          </p>
          <p style={body}>
            i'm drawn to work that connects technical depth with real-world impact, especially in
            healthcare systems, environmental modeling, and tools that genuinely shape how people
            move through their day. i value understanding systems end-to-end, from backend
            infrastructure and data pipelines to user experience and interface design. that range
            lets me move fluidly between research, engineering, and product thinking while building
            systems that are both technically strong and actually useful to the people interacting
            with them.
          </p>
        </div>

        <div style={{ flex: 2 }}>
          <img
            src="/files/GradImage.png"
            alt="Ann Mathew"
            style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
          />
        </div>
      </div>

      {/* ─── WHAT DRIVES ME ─── */}
      <div style={{ backgroundColor: '#490013', padding: '80px 188px' }}>
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
          areas of interest
        </div>
        <h2
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 700,
            fontSize: 56,
            color: '#f5d7cc',
            lineHeight: 1,
            margin: 0,
            marginBottom: 56,
          }}
        >
          what drives me
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: 24,
          }}
        >
          {interests.map(item => (
            <div
              key={item.label}
              style={{
                borderTop: '1.5px solid #be7880',
                paddingTop: 24,
              }}
            >
              <div
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  fontSize: 19,
                  color: '#ed8466',
                  marginBottom: 10,
                  lineHeight: 1.2,
                }}
              >
                {item.label}
              </div>
              <p
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontStyle: 'italic',
                  fontSize: 16,
                  color: '#f0c3e9',
                  lineHeight: 1.55,
                  margin: 0,
                  opacity: 0.8,
                }}
              >
                {item.note}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ─── CURRENTLY ─── */}
      <div style={{ padding: '80px 188px' }}>
        <div style={label}>right now</div>
        <h2
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 700,
            fontSize: 56,
            color: ink,
            lineHeight: 1,
            margin: 0,
            marginBottom: 48,
          }}
        >
          what i'm up to
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {[
            ['education', 'computer science and climate & environmentalstudies @ vanderbilt university'],
            ['building', 'full-stack applications, machine learning systems, and experimental AI projects'],
            ['exploring', 'healthcare technology, geospatial systems, and human-centered AI'],
            ['looking for', 'internships and opportunities in software engineering, ML, and product engineering'],
          ].map(([key, val]) => (
            <div
              key={key}
              style={{
                display: 'flex',
                gap: 40,
                alignItems: 'baseline',
                borderBottom: '1.5px solid rgba(73,0,19,0.15)',
                padding: '24px 0',
              }}
            >
              <span
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 500,
                  fontSize: 12,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(73,0,19,0.4)',
                  minWidth: 120,
                  flexShrink: 0,
                }}
              >
                {key}
              </span>
              <span
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontStyle: 'italic',
                  fontSize: 20,
                  color: ink,
                  lineHeight: 1.4,
                }}
              >
                {val}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── BEYOND THE CODE ─── */}
      <div style={{ backgroundColor: '#2e4d62', padding: '96px 188px' }}>
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
          the fuller picture
        </div>
        <h2
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 700,
            fontSize: 56,
            color: '#f5d7cc',
            lineHeight: 1,
            margin: 0,
            marginBottom: 64,
          }}
        >
          beyond the code
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          {[
            {
              role: 'student centers',
              context: 'vanderbilt university',
              description:
                'managed event logistics and cross-team coordination for some of the largest events on campus. the experience taught me real-time problem solving, adaptability, and how much strong operations work shapes the success of everything around it.',
            },
            {
              role: 'teaching assistant',
              context: 'vanderbilt university',
              description:
                'served as a teaching assistant for the climate studies department, holding office hours and providing feedback on academic and research writing. it taught me that explaining complex ideas clearly is a skill entirely separate from understanding them yourself.',
            },
            {
              role: 'enviro-equity health initiative',
              context: 'nonprofit research',
              description:
                'spent a summer conducting research for a nonprofit focused on environmental justice and skin health in underserved agricultural communities. it reinforced how different technical and research work feels when the people affected by it are visible and immediate.',
            },
            {
              role: 'retail',
              context: 'customer-facing work',
              description:
                'worked retail throughout college, which grounded me in ways academic environments often don\'t. it taught me patience, adaptability, resilience, and how much communication and proactive thinking matter in fast-moving, unpredictable situations.',
            },
            {
              role: 'youth violin instructor',
              context: 'independent teaching',
              description:
                'through high school and college, i had the unique opportunity to teach violin to students of all ages and skill levels. as someone who was deeply involved in music my whole life, it was incredibly rewarding for me to be able to impart that love to others while doing something truly meaningful and enjoyable.',
            },
            {
              role: 'dance team choreographer',
              context: 'vanderbilt university',
              description:
                'co-choreographed and performed for MUA, a vietnamese dance team at vanderbilt. seeing a performance evolve from early choreography sessions to a fully staged production taught me a lot about collaboration, creative direction, and the amount of invisible work behind something that looks effortless on stage.',
            },
          ].map(({ role, context, description }) => (
            <div
              key={role}
              style={{
                borderTop: '1.5px solid rgba(245,215,204,0.25)',
                paddingTop: 28,
              }}
            >
              <div
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  fontSize: 28,
                  color: '#f5d7cc',
                  lineHeight: 1.1,
                  marginBottom: 8,
                }}
              >
                {role}
              </div>
              <div
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 500,
                  fontSize: 11,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(245,215,204,0.45)',
                  marginBottom: 20,
                }}
              >
                {context}
              </div>
              <p
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontStyle: 'italic',
                  fontSize: 19,
                  color: '#f0c3e9',
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
