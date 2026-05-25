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
    title: 'morningcall',
    tagline: 'an intelligent morning assistant app integrating voice interaction, habits, and task orchestration',
    skills: ['React Native', 'Expo', 'Fastify', 'MongoDB', 'Firebase Auth', 'TypeScript', 'Gemini API', 'ElevenLabs'],
    description:
      "morningcall is an AI-powered mobile productivity assistant designed around adaptive routines, conversational interaction, and voice-first user experiences. built using react native, fastify, mongodb, firebase authentication, and google gemini integration within a collaborative monorepo architecture, the project combines full-stack mobile development with LLM-driven orchestration systems.\n\nwith my teammates, i developed features including habit tracking, task management, conversational AI workflows, voice integration, and dynamic routine generation systems designed to adapt to user context and behavior over time. the application integrates backend API development, realtime mobile state management, authentication systems, and text-to-speech pipelines to support an end-to-end conversational productivity experience.\n\nworking on morningcall taught me how to design software systems that extend beyond traditional CRUD applications into more stateful and interactive AI-driven experiences. one of the most interesting challenges was balancing technical infrastructure with user experience to build systems that functioned reliably across mobile and backend environments while also feeling intuitive, conversational, and personalized to users.\n\nthe project also strengthened my understanding of mobile-first design, AI orchestration workflows, UX/UI principles, and scalable full-stack development. more importantly, it pushed me to think critically about how artificial intelligence can move beyond isolated chatbot interfaces and become embedded directly into everyday workflows and user interactions.",
    github: '/files/MCPoster.pdf',
    label: 'view the poster →',
    bg: '#ed8466',
    id: 'morningcall',  },
  {
    num: '02',
    year: '2026',
    title: 'environmental similarity integration in herb-disease association prediction',
    tagline: 'augmenting biomedical prediction models with geospatial and climate-derived similarity data',
    skills: ['Python', 'Scientific Computing', 'Network Analysis', 'AUROC/AUPR Evaluation', 'Climate Similarity Modeling'],
    description:
      "for my culminating research project in network analysis in healthcare, i worked in a two-person team to extend the HDAPM-NCP herb–disease association prediction framework by integrating environmental similarity data derived from climate, biome, and geographic occurrence records. the project explored whether medicinal plants growing in similar environmental conditions also exhibit similar therapeutic relationships.\n\nour work involved building reproducible data processing pipelines using python scientific computing tools, harvesting species occurrence data through GBIF, engineering climate similarity kernels using köppen–geiger climate classifications, and evaluating fusion strategies for integrating environmental and biochemical similarity measures. i also worked extensively with network analysis concepts, similarity matrices, and performance evaluation metrics such as AUROC and AUPR to assess predictive performance across multiple experimental configurations.\n\none of the most interesting aspects of the project was discovering that meaningful research outcomes are not always defined by improved model performance. although environmental similarity produced minimal predictive gains, the work revealed important insights about feature redundancy, sparse environmental representations, and the complexity of translating ecological relationships into computational signals. the experience taught me how to critically evaluate negative or neutral results while still recognizing their scientific value and methodological contributions.\n\nthe project strengthened my understanding of network medicine, machine learning evaluation, scientific research methodology, and reproducible computational workflows while exposing me to the intersection of environmental systems, pharmacology, and data science.",
    github: 'https://github.com/Tobena-04/Climate-Informed-Herb-Disease-Association-Prediction/blob/a3779e362b1bd726f700ca354409b638d17ae9d0/%5BNEW%5DNetwork_Analysis_in_Healthcare_Final__Predicting_Herb_Disease_Associations_Informed_by_Climatic_Descriptors.pdf',
    bg: '#f0c3e9',
  },
  {
    num: '03',
    year: '2024',
    title: 'predicting land conversion in tennessee',
    tagline: 'deep learning for land conservation and development forecasting',
    skills: ['Python', 'PyTorch', 'ConvLSTM', 'QGIS', 'Rasterio', 'Remote Sensing', 'Geospatial Analysis'],
    description:
      "as part of vanderbilt data science in 2024, i worked on a geospatial machine learning project in collaboration with the land trust of tennessee focused on forecasting future land conversion across the state. using NLCD satellite raster datasets, our team developed a ConvLSTM deep learning pipeline to model how natural and agricultural land may transition into developed areas over time.\n\nmy work involved processing large geospatial raster datasets, extracting and filtering image patches with rasterio, and helping build preprocessing workflows for spatiotemporal prediction modeling. i also worked with geospatial visualization tools such as QGIS to analyze and interpret future land cover prediction maps. the project introduced challenges involving large GeoTIFF files, computational constraints, and balancing spatial accuracy with scalable machine learning workflows.\n\nbeyond technical implementation, the experience showed me how machine learning and environmental science intersect with real conservation decision-making. collaborating on a project tied directly to land preservation efforts helped me think more critically about how predictive models can support real-world environmental planning, sustainability initiatives, and stakeholder needs.",
    github: 'https://github.com/built-by-ann/land-trust-project',
    bg: '#be7880',
  },
  {
    num: '04',
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
