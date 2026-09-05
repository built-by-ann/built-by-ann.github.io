import type { CSSProperties } from 'react'

interface Spotlight {
  num: string
  year: string
  title: string
  tagline: string
  skills: string[]
  description: string
  github: string
  label?: string
  bg: string
  id?: string
}

const spotlights: Spotlight[] = [
  {
    num: '01',
    year: '2026',
    title: 'medlens',
    tagline: 'building an AI-powered clinical documentation reconciliation platform inspired by clinical informatics research',
    skills: ['FastAPI', 'Python', 'React', 'TypeScript', 'PostgreSQL', 'SQLAlchemy', 'Alembic', 'Docker', 'Google Gemini', 'OpenBioLLM', 'MedGemma', 'AWS', 'GitHub Actions', 'Pytest', 'Pydantic'],
    description:
      "medlens is my flagship software engineering project and was inspired by research i conducted at vanderbilt university medical center on medication documentation inconsistencies within electronic health records. the application simulates a simplified EHR environment where users can upload synthetic clinical documents, including visit notes, discharge summaries, progress notes, and medication reconciliation forms, then compare those documents against an existing medication list to identify potential reconciliation issues. every finding is linked directly to supporting evidence so users can review exactly why a discrepancy was detected before deciding whether to update the medication list.\n\ni built the application with a react and typescript frontend and a fastapi backend backed by postgresql, sqlalchemy, alembic, and docker. authentication is handled with JWT, analyses and uploaded documents are stored in a relational database, and the application is deployed on AWS using EC2 and S3. the AI layer is intentionally modular so different language models can be evaluated without changing the surrounding application architecture. the current implementation uses google gemini to extract structured medication information from clinical documents before deterministic reconciliation logic analyzes the extracted data and identifies potential discrepancies.\n\none of my primary goals with medlens has been to build it the way a professional software engineering team would approach a production application. i planned the project before writing code, organized development into iterative sprints, tracked work through github projects, wrote technical documentation for major architectural decisions, and treated every feature as an individual engineering task with its own requirements and testing strategy. the project also includes automated testing with pytest, CI workflows through github actions, containerized development with docker, and cloud deployment on AWS so the engineering process is just as important as the final product.\n\nbuilding medlens has strengthened my understanding of backend architecture, REST API design, authentication, database modeling, AI-assisted information extraction, and healthcare data workflows. one of the questions i find most interesting is whether specialized medical language models actually perform better than general-purpose models for structured clinical information extraction when evaluated under the same conditions. rather than assuming one model is better, i want to compare them using the same prompts, validation logic, and evaluation criteria to understand where each approach succeeds and falls short.\n\nbecause the application uses only synthetic patient data, medlens is intended solely as an educational and portfolio project. its purpose is to explore how AI can fit into realistic clinical workflows while demonstrating modern software engineering practices from planning and architecture through deployment and testing.",
    github: 'https://medlenshealth.com',
    label: 'view the live site →',
    bg: '#f0c3e9',
    id: 'medlens',
  },
  {
    num: '02',
    year: '2026',
    title: 'morningcall',
    tagline: 'an intelligent morning assistant app integrating voice interaction, habits, and task orchestration',
    skills: ['React Native', 'Expo', 'Fastify', 'MongoDB', 'Firebase Auth', 'TypeScript', 'Gemini API', 'ElevenLabs'],
    description:
      "morningcall is an AI-powered mobile productivity assistant designed around adaptive routines, conversational interaction, and voice-first user experiences. built using react native, fastify, mongoDB, firebase authentication, and google gemini integration within a collaborative monorepo architecture, the project combines full-stack mobile development with LLM-driven orchestration systems.\n\nwith my teammates, i developed features including habit tracking, task management, conversational AI workflows, voice integration, and dynamic routine generation systems designed to adapt to user context and behavior over time. the application integrates backend API development, realtime mobile state management, authentication systems, and text-to-speech pipelines to support an end-to-end conversational productivity experience.\n\nworking on morningcall taught me how to design software systems that extend beyond traditional CRUD applications into more stateful and interactive AI-driven experiences. one of the most interesting challenges was balancing technical infrastructure with user experience to build systems that functioned reliably across mobile and backend environments while also feeling intuitive, conversational, and personalized to users.\n\nthe project also strengthened my understanding of mobile-first design, AI orchestration workflows, UX/UI principles, and scalable full-stack development. more importantly, it pushed me to think critically about how artificial intelligence can move beyond isolated chatbot interfaces and become embedded directly into everyday workflows and user interactions.",
    github: 'https://github.com/built-by-ann/morningcall',
    bg: '#ed8466',
    id: 'morningcall',
  },
  {
    num: '03',
    year: '2024',
    title: 'assessing medication discontinuation practices in electronic health records',
    tagline: 'clinical informatics research on EHR documentation and workflow behavior',
    skills: ['SQL', 'Clinical Data Analysis', 'EHR Systems', 'Data Extraction', 'Biomedical Informatics', 'Interdisciplinary Communication'],
    description:
      "as a summer 2024 research intern in vanderbilt university medical center's department of biomedical informatics, i investigated inconsistencies in medication discontinuation practices within electronic health records. my work involved extracting and analyzing large-scale clinical encounter data to identify patterns in how medications marked for removal persisted on patient medication lists.\n\nin addition to quantitative analysis, i worked closely with physicians, nurses, and clinical researchers to better understand how these documentation issues emerge within real healthcare workflows. speaking directly with medical professionals helped me connect technical data patterns to the operational realities of patient care, provider coordination, and EHR system design.\n\ni also presented findings to mentors, phd researchers, medical students, and peers, learning how to communicate complex technical and clinical insights to interdisciplinary audiences. the experience showed me how healthcare technology challenges often exist at the intersection of data systems, human behavior, and clinical workflow constraints.",
    github: '/files/AnnMathew_Abstract.pdf',
    label: 'view the abstract →',
    bg: '#f5d7cc',
    id: 'vumc',
  },
]

function SpotlightCard({ s }: { s: Spotlight }) {
  const ink = '#490013'

  const chipStyle: CSSProperties = {
    border: `1.5px solid ${ink}`,
    color: ink,
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 500,
    fontSize: 14,
    padding: '5px 16px',
  }

  return (
    <div
      id={s.id}
      style={{ backgroundColor: s.bg, padding: '96px 188px' }}
    >
      {/* Label */}
      <div
        style={{
          fontFamily: "'Roboto', sans-serif",
          fontWeight: 500,
          fontSize: 13,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: ink,
          opacity: 0.5,
          marginBottom: 20,
        }}
      >
        spotlight {s.num} · {s.year}
      </div>

      {/* Title */}
      <h2
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 700,
          fontSize: 72,
          color: ink,
          lineHeight: 1,
          margin: 0,
          marginBottom: 18,
        }}
      >
        {s.title}
      </h2>

      {/* Tagline */}
      <p
        style={{
          fontFamily: "'Roboto', sans-serif",
          fontStyle: 'italic',
          fontSize: 22,
          color: ink,
          margin: 0,
          marginBottom: 56,
          opacity: 0.65,
        }}
      >
        {s.tagline}
      </p>

      {/* 2-col: description + skills */}
      <div style={{ display: 'flex', gap: 96, marginBottom: 52, alignItems: 'flex-start' }}>
        <div style={{ flex: 3, display: 'flex', flexDirection: 'column', gap: 20 }}>
          {s.description.split('\n\n').map((para, i) => (
            <p
              key={i}
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontStyle: 'italic',
                fontSize: 20,
                color: ink,
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {para}
            </p>
          ))}
        </div>

        <div style={{ flex: 2 }}>
          <div
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 500,
              fontSize: 11,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: ink,
              opacity: 0.45,
              marginBottom: 18,
            }}
          >
            tools &amp; skills
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {s.skills.map(skill => (
              <span key={skill} style={chipStyle}>{skill}</span>
            ))}
          </div>
        </div>
      </div>

      {/* GitHub button */}
      <a
        href={s.github}
        target="_blank"
        rel="noreferrer"
        style={{
          display: 'inline-block',
          backgroundColor: ink,
          color: s.bg,
          fontFamily: "'Roboto', sans-serif",
          fontWeight: 400,
          fontSize: 18,
          padding: '14px 32px',
          textDecoration: 'none',
        }}
      >
        {s.label ?? 'view on github →'}
      </a>
    </div>
  )
}

export default function SpotlightsSection() {
  return (
    <section>
      {spotlights.map((s) => (
        <SpotlightCard key={s.num} s={s} />
      ))}
    </section>
  )
}
