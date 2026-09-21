import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { roseDeep, roseMid } from '../src/colors'
import ExternalLink from '../src/ExternalLink'
import { fluid } from '../src/fluid'

export default function OceanProject() {
  const btnStyle: CSSProperties = {
    width: '100%',
    minHeight: 86,
    padding: '16px 24px',
    textAlign: 'center',
    backgroundColor: roseMid,
    color: '#f5d7cc',
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 500,
    fontSize: 24,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
  }

  return (
    <section
      aria-labelledby="morningcall-feature-title"
      style={{
        backgroundColor: '#f5d7cc',
        padding: 'clamp(56px, 7vw, 87px) var(--gutter) clamp(56px, 10vw, 150px)',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: '40px clamp(32px, 6vw, 80px)',
      }}
    >
      <div style={{ flex: '1 1 340px', maxWidth: 708 }}>
        <h2
          id="morningcall-feature-title"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 700,
            fontSize: fluid(68),
            color: '#490013',
            lineHeight: 1,
            margin: 0,
          }}
        >
          i built an app!
        </h2>

        <p
          style={{
            marginTop: 35,
            paddingLeft: 3,
            maxWidth: 376,
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 700,
            fontSize: 24,
            color: roseDeep,
            lineHeight: 1.3,
          }}
        >
          morningcall: AI-powered morning assistant for adaptive routines and conversational productivity
        </p>

        <p
          style={{
            marginTop: 8,
            maxWidth: 572,
            fontFamily: "'Roboto', sans-serif",
            fontStyle: 'italic',
            fontSize: 24,
            color: '#2e4d62',
            lineHeight: 1.4,
          }}
        >
          for my culminating project at vanderbilt, i built an end-to-end mobile productivity system
          that combines task management, habit tracking, and voice interaction into a personalized
          morning experience. the platform integrates react native, fastify, mongoDB, firebase
          authentication, and LLM orchestration to support conversational workflows, context-aware
          routine generation, and responsive cross-platform user interaction.
        </p>
      </div>

      <div style={{ flex: '1 1 260px', maxWidth: 358, display: 'flex', flexDirection: 'column', gap: 74 }}>
        <Link to="/spotlights" aria-label="read more about it! (my mobile morning productivity app)" style={btnStyle}>
          read more about it!
        </Link>
        <ExternalLink href="https://www.youtube.com/watch?v=GAFjmWF82tA" style={btnStyle}>
          try out the demo!
        </ExternalLink>
      </div>
    </section>
  )
}
