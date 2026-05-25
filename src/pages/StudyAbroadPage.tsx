import { useState } from 'react'
import type { CSSProperties } from 'react'

const courses = [
  {
    title: 'operating systems',
    description:
      'systems-level computer science coursework focused on process management, memory systems, concurrency, and low-level operating system design.',
  },
  {
    title: 'artificial intelligence',
    description:
      'rigorous exploration of search algorithms, constraint satisfaction, probabilistic reasoning, machine learning, and intelligent agent design.',
  },
  {
    title: 'italian language and culture',
    description:
      'immersive coursework taught entirely in Italian with focus on conversational skills, reading comprehension, and grammatical precision across everyday registers.',
  },
  {
    title: 'international oil and energy policy',
    description:
      'examination of global energy systems, geopolitics, and international policy frameworks through the lens of oil markets, energy security, and sustainability.',
  }
]

const galleryPhotos = [
  { id: 1, caption: 'piazza del campo at golden hour', src: '/files/siena.png' },
  { id: 2, caption: 'siena\'s medieval streets', src: '/files/siena_medieval_buildings.png' },
  { id: 3, caption: 'carnevale di foiano della chiana', src: '/files/foiano_carnivale.png' },
  { id: 4, caption: 'evening walks with good company' },
  { id: 5, caption: 'the duomo, finally in person' },
  { id: 6, caption: 'market day in siena' },
  { id: 7, caption: 'pasta-making class gone slightly wrong' },
  { id: 8, caption: 'last weekend in rome' },
  { id: 9, caption: 'the view that made it all worth it' },
  { id: 10, caption: 'speaking italian badly but trying anyway' },
  { id: 11, caption: 'saturday morning, nowhere to be' },
  { id: 12, caption: 'the friends who made it a home' },
]

function ImagePlaceholder({ style }: { style?: CSSProperties }) {
  return (
    <div
      style={{
        backgroundColor: 'rgba(190,120,128,0.18)',
        border: '1.5px solid rgba(190,120,128,0.35)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}
    >
      <span
        style={{
          fontFamily: "'Roboto', sans-serif",
          fontSize: 13,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'rgba(245,215,204,0.3)',
        }}
      >
        photo
      </span>
    </div>
  )
}

export default function StudyAbroadPage() {
  const [hoveredPhoto, setHoveredPhoto] = useState<number | null>(null)

  const sectionLabel = (text: string, light = true): CSSProperties => ({
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 500,
    fontSize: 12,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: light ? 'rgba(245,215,204,0.5)' : 'rgba(73,0,19,0.45)',
    marginBottom: 20,
  })

  return (
    <div>

      {/* ─── HERO ─── */}
      <div
        id="study-abroad"
        style={{
          backgroundColor: '#490013',
          paddingTop: 120,
          paddingBottom: 100,
          paddingLeft: 188,
          paddingRight: 188,
        }}
      >
        <div style={sectionLabel('spring 2025 · cet siena')}>
          spring 2025 · cet siena
        </div>
        <h1
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 700,
            fontSize: 96,
            color: '#f0c3e9',
            lineHeight: 1,
            margin: 0,
            marginBottom: 48,
          }}
        >
          siena, italy
        </h1>
        <div style={{ borderBottom: '1.5px solid #be7880', marginBottom: 48 }} />
        <p
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontStyle: 'italic',
            fontSize: 26,
            color: '#f5d7cc',
            lineHeight: 1.55,
            maxWidth: 900,
            margin: 0,
          }}
        >
          somewhere between late trains, broken italian, 
          and getting lost more often than not, i started 
          to feel very much at home.
        </p>
      </div>

      {/* ─── THE EXPERIENCE ─── */}
      <div style={{ backgroundColor: '#f5d7cc', padding: '96px 188px' }}>
        <div style={{ display: 'flex', gap: 80, alignItems: 'center' }}>
          <div style={{ flex: 3 }}>
            <div style={sectionLabel('the experience', false)}>the experience</div>
            <h2
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 700,
                fontSize: 56,
                color: '#490013',
                lineHeight: 1.05,
                margin: 0,
                marginBottom: 36,
              }}
            >
              more than i hoped for
            </h2>
            <p
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontStyle: 'italic',
                fontSize: 20,
                color: '#2e4d62',
                lineHeight: 1.65,
                margin: 0,
                marginBottom: 20,
              }}
            >
              i chose siena because it was small, quiet, and off the usual study-abroad circuit. i
              wanted to learn somewhere that felt immersive and authentic. siena gave me more than i
               hoped for.
            </p>
            <p
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontStyle: 'italic',
                fontSize: 20,
                color: '#2e4d62',
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              the semester really pushed me in ways i didn't anticipate. as much as i gained academically, 
              it was the things i wasn’t graded on, like navigating daily life in another language, 
              learning to move at a slower pace, and building relationships across different backgrounds, 
              that shaped how i now think about the world and interact with others. i learned new ways to 
              communicate, became more adaptable, and started to really understand what it means to create 
              a home in a new place. i think the most important thing i learned studying abroad in siena was 
              how to become utterly unafraid of change. 
            </p>
          </div>

          <div style={{ flex: 2, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <img
              src="/files/siena_main.png"
              alt="Siena"
              style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      </div>

      {/* ─── COURSEWORK ─── */}
      <div style={{ backgroundColor: '#490013', padding: '96px 188px' }}>
        <div style={sectionLabel('academics')}>academics</div>
        <h2
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 700,
            fontSize: 56,
            color: '#f5d7cc',
            lineHeight: 1.05,
            margin: 0,
            marginBottom: 56,
          }}
        >
          what i studied
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 24,
          }}
        >
          {courses.map(course => (
            <div
              key={course.title}
              style={{
                border: '1.5px solid #be7880',
                padding: '36px 40px',
              }}
            >
              <h3
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  fontSize: 22,
                  color: '#ed8466',
                  margin: 0,
                  marginBottom: 14,
                  lineHeight: 1.2,
                }}
              >
                {course.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontStyle: 'italic',
                  fontSize: 18,
                  color: '#f0c3e9',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {course.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ─── CULTURE & LANGUAGE ─── */}
      <div style={{ backgroundColor: '#f0c3e9', padding: '96px 188px' }}>
        <div style={sectionLabel('language, history & people', false)}>
          language, history & people
        </div>

        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 700,
            fontSize: 44,
            color: '#490013',
            lineHeight: 1.2,
            margin: 0,
            marginBottom: 72,
            maxWidth: 860,
          }}
        >
          "the best thing about learning a language is that it teaches you how to listen."
        </p>

        <div style={{ display: 'flex', gap: 80, alignItems: 'flex-start' }}>
          <p
            style={{
              flex: 3,
              fontFamily: "'Roboto', sans-serif",
              fontStyle: 'italic',
              fontSize: 20,
              color: '#490013',
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            as someone who grew up trilingual and multicultural, i was eager to speak a new language and learn a new culture. 
            i didn't expect to find that more than teaching you to know all the answers, the best thing about learning a language is that it 
            teaches you how to listen. i arrived speaking maybe five carefully constructed sentences and left thinking 
            in fragments of cultural context, colloquialisms, and muscle memory. somewhere in that process was a lot of embarrassing mispronunciation, 
            very patient locals, and the reinforcement that language fluency is less about grammar and more about being willing to 
            sound foolish for long enough. i still miss the adrenaline rush of ordering my gelato in italian and having the waiter 
            actually respond back in italian rather than immediately noticing my very obvious foreignness. 
            <br />
            <br />
            from a cultural perspective, the history was everywhere in siena, literally in the walls. 
            walking past medieval palazzos on the way to the grocery store, sitting in the piazza that 
            had been there for centuries, visiting museums in buildings that used to be something else 
            entirely. even the external architecture of my school and apartment buildings were preserved from the 
            medieval period. it made history feel less like a subject and more like a context. beyond the history itself, 
            tuscan life was slow-paced and intentional in all aspects. once i got used to the pace, i found myself appreciating 
            a passegiata, an aperitivo, or sitting around in the piazza for a few hours on a sunny day. what i cherish the most is 
            the rich relationships i developed over the semester: my friends, my italian roommates, random americans we bonded with 
            on our travels, the barista who always remembered our orders, and everyone else who made my time in europe deeply memorable. 
          </p>

          <div style={{ flex: 2, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <ImagePlaceholder style={{ aspectRatio: '4/3', width: '100%' }} />
            <ImagePlaceholder style={{ aspectRatio: '4/3', width: '100%' }} />
            <ImagePlaceholder style={{ aspectRatio: '4/3', width: '100%' }} />
          </div>
        </div>
      </div>

      {/* ─── CORRESPONDENT ─── */}
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
          program correspondent
        </div>
        <h2
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 700,
            fontSize: 56,
            color: '#f5d7cc',
            lineHeight: 1.05,
            margin: 0,
            marginBottom: 36,
          }}
        >
          the art of standing out
        </h2>
        <p
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontStyle: 'italic',
            fontSize: 20,
            color: '#f0c3e9',
            lineHeight: 1.65,
            maxWidth: 860,
            margin: 0,
            marginBottom: 48,
          }}
        >
          during my semester abroad, i worked as a student correspondent for CET, writing
          about the experience of living and studying in italy for the program's publication.   
          <br /><br />
          my article explores what it means to be a first-timer an immersive environment and feel like you're
           doing everything wrong. i reflected on being "too american" despite attempting to blend in, and 
           the idea that the mistakes and miscommunications that come with being a foreigner are actually the whole point 
           of the experience. even more special is how those moments ended up being the ones that 
           connected me most deeply to my friendships in the city.
        </p>
        <a
          href="https://cetacademicprograms.com/the-art-of-standing-out/"
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'inline-block',
            backgroundColor: '#f5d7cc',
            color: '#2e4d62',
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 700,
            fontSize: 18,
            padding: '14px 32px',
            textDecoration: 'none',
          }}
        >
          read the full article →
        </a>
      </div>

      {/* ─── GALLERY ─── */}
      <div style={{ backgroundColor: '#490013', padding: '96px 188px' }}>
        <div style={sectionLabel('in pictures')}>in pictures</div>
        <h2
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 700,
            fontSize: 56,
            color: '#f5d7cc',
            lineHeight: 1.05,
            margin: 0,
            marginBottom: 16,
          }}
        >
          a semester in moments!
        </h2>
        <p
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontStyle: 'italic',
            fontSize: 18,
            color: '#f0c3e9',
            opacity: 0.7,
            margin: 0,
            marginBottom: 56,
          }}
        >
          hover over a photo to see italy through my eyes
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 12,
          }}
        >
          {galleryPhotos.map((photo, i) => (
            <div
              key={photo.id}
              style={{
                position: 'relative',
                aspectRatio: '1',
                overflow: 'hidden',
                cursor: 'pointer',
                backgroundColor: 'rgba(190,120,128,0.2)',
              }}
              onMouseEnter={() => setHoveredPhoto(i)}
              onMouseLeave={() => setHoveredPhoto(null)}
            >
              {photo.src ? (
                <img
                  src={photo.src}
                  alt={photo.caption}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              ) : (
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor:
                      i % 3 === 0
                        ? 'rgba(190,120,128,0.25)'
                        : i % 3 === 1
                          ? 'rgba(240,195,233,0.15)'
                          : 'rgba(237,132,102,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: 12,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'rgba(245,215,204,0.25)',
                    }}
                  >
                    photo
                  </span>
                </div>
              )}

              {/* Hover overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(73,0,19,0.88)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 20,
                  opacity: hoveredPhoto === i ? 1 : 0,
                  transition: 'opacity 0.2s ease',
                }}
              >
                <p
                  style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontStyle: 'italic',
                    fontSize: 16,
                    color: '#f5d7cc',
                    textAlign: 'center',
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
