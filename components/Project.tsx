import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { roseDeep, roseMid } from '../src/colors'

export default function OceanProject() {
  const btnStyle: CSSProperties = {
    width: 358,
    height: 86,
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
        height: 740,
        position: 'relative',
      }}
    >
      <h2
        id="morningcall-feature-title"
        style={{
          position: 'absolute',
          left: 188,
          top: 87,
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 700,
          fontSize: 68,
          color: '#490013',
          width: 708,
          lineHeight: 1,
          margin: 0,
        }}
      >
        i built an app!
      </h2>

      <p
        style={{
          position: 'absolute',
          left: 191,
          top: 190,
          fontFamily: "'Roboto', sans-serif",
          fontWeight: 700,
          fontSize: 24,
          color: roseDeep,
          width: 376,
          lineHeight: 1.3,
        }}
      >
        morningcall: AI-powered morning assistant for adaptive routines and conversational productivity
      </p>

      <p
        style={{
          position: 'absolute',
          left: 188,
          top: 320,
          fontFamily: "'Roboto', sans-serif",
          fontStyle: 'italic',
          fontSize: 24,
          color: '#2e4d62',
          width: 572,
          lineHeight: 1.4,
        }}
      >
        for my culminating project at vanderbilt, i built an end-to-end mobile productivity system
        that combines task management, habit tracking, and voice interaction into a personalized
        morning experience. the platform integrates react native, fastify, mongoDB, firebase
        authentication, and LLM orchestration to support conversational workflows, context-aware
        routine generation, and responsive cross-platform user interaction.
      </p>

      <Link to="/spotlights" aria-label="read more about it! (my mobile morning productivity app)" style={{ ...btnStyle, position: 'absolute', left: 893, top: 260 }}>
        read more about it!
      </Link>
      <a href="https://www.youtube.com/watch?v=GAFjmWF82tA" target="_blank" rel="noreferrer" style={{ ...btnStyle, position: 'absolute', left: 894, top: 420, width: 357 }}>
        try out the demo!
      </a>
    </section>
  )
}
