import type { CSSProperties } from 'react'

interface Project {
  num: string
  title: string
  tagline: string
  skills: string[]
  description: string[]
  github: string
  accent: string
}

const ACCENTS = ['#ed8466', '#f0c3e9', '#be7880', '#f5d7cc']

const projects: Project[] = [
  {
    num: '01',
    title: 'morningcall',
    tagline: 'an intelligent morning assistant app integrating voice interaction, habits, and task orchestration',
    skills: ['React Native', 'Expo', 'Fastify', 'MongoDB', 'Firebase Auth', 'TypeScript', 'Gemini API', 'ElevenLabs'],
    description: [
      "morningcall is an AI-powered mobile productivity assistant designed around adaptive routines, conversational interaction, and voice-first user experiences. built using react native, fastify, mongodb, firebase authentication, and google gemini integration within a collaborative monorepo architecture, the project combines full-stack mobile development with LLM-driven orchestration systems.",
      "with my teammates, i developed features including habit tracking, task management, conversational AI workflows, voice integration, and dynamic routine generation systems designed to adapt to user context and behavior over time. the application integrates backend API development, realtime mobile state management, authentication systems, and text-to-speech pipelines to support an end-to-end conversational productivity experience.",
      "working on morningcall taught me how to design software systems that extend beyond traditional CRUD applications into more stateful and interactive AI-driven experiences. one of the most interesting challenges was balancing technical infrastructure with user experience to build systems that functioned reliably across mobile and backend environments while also feeling intuitive, conversational, and personalized to users.",
      "the project also strengthened my understanding of mobile-first design, AI orchestration workflows, UX/UI principles, and scalable full-stack development. more importantly, it pushed me to think critically about how artificial intelligence can move beyond isolated chatbot interfaces and become embedded directly into everyday workflows and user interactions.",
    ],
    github: 'https://github.com/built-by-ann',
    accent: ACCENTS[0],
  },
  {
    num: '02',
    title: 'early wildfire smoke detection',
    tagline: 'a computer vision pipeline for early wildfire smoke and fire detection using YOLOv8m',
    skills: ['YOLOv8m', 'PyTorch', 'Ultralytics', 'Computer Vision', 'Python', 'Data Augmentation'],
    description: [
      "as part of a deep learning team project, i worked on a computer vision system for early wildfire smoke and fire detection using YOLOv8m and the D-Fire dataset. the project focused on building an object detection pipeline capable of identifying smoke and fire regions in real-world surveillance imagery, motivated by the importance of rapid wildfire detection in reducing spread and response time.",
      "our team developed a multi-stage training and evaluation workflow that included dataset preprocessing, class remapping, image-label validation, model fine-tuning, threshold optimization, and qualitative inference analysis. the project used transfer learning from COCO-pretrained YOLOv8m weights and explored different training configurations, including SGD and AdamW optimization strategies across both local apple MPS hardware and cloud GPU environments.",
      "my work involved contributing to evaluation workflows, qualitative inference analysis, and dataset processing while helping investigate how training configuration, preprocessing quality, and compute limitations affected model performance. one of the most interesting parts of the project was seeing how object detection systems behave outside of ideal benchmark settings. even when aggregate metrics appeared strong, qualitative predictions revealed confidence calibration issues and weaker detections in difficult smoke and low-visibility scenarios.",
      "the project strengthened my understanding of deep learning workflows, computer vision evaluation, and the practical challenges of training large-scale object detection systems on imperfect real-world datasets. it also reinforced the importance of balancing quantitative metrics with qualitative model behavior when evaluating machine learning systems intended for real-world environmental and safety applications.",
    ],
    github: 'https://github.com/built-by-ann',
    accent: ACCENTS[0],
  },
  {
    num: '03',
    title: 'pn-3 state policy roadmap redesign',
    tagline: 'a UX-focused react prototype built to make state policy information easier to navigate and compare',
    skills: ['React', 'TypeScript', 'Vite', 'React Router', 'Tailwind CSS', 'shadcn/Radix UI', 'React Simple Maps', 'Figma', 'UX/UI Design'],
    description: [
      "this group project redesigned the state policy roadmap for vanderbilt's prenatal-to-3 state policy impact center as a react prototype focused on improving navigation, content structure, and state-level policy exploration. working within an agile-style collaborative workflow, our team iterated on designs, gathered feedback, refined interaction patterns, and continuously adapted the structure of the application throughout development.",
      "my contributions focused heavily on UX thinking, interface structure, and frontend implementation. i worked on translating complex policy information into a more intuitive and navigable experience by applying design principles centered around visual hierarchy, progressive disclosure, consistency, and scannability. the goal was not just to modernize the interface visually, but to improve how users move through dense informational systems and access state-specific policy content.",
      "after developing design concepts in figma, we implemented the prototype using react, typescript, vite, react router, tailwind CSS, shadcn/radix UI, and react-simple-maps. the project emphasized reusable component architecture and iterative development, allowing the interface and information architecture to evolve quickly as new feedback and design decisions emerged.",
      "one of the most valuable parts of the experience was learning how collaborative product development balances user needs, technical constraints, and evolving project goals. working in a team environment strengthened my ability to communicate design rationale, iterate quickly, and think critically about how frontend systems support usability in large, content-heavy applications.",
    ],
    github: 'https://github.com/built-by-ann',
    accent: ACCENTS[0],
  },
  {
    num: '04',
    title: 'assessing medication discontinuation practices in electronic health records',
    tagline: 'clinical informatics research on EHR documentation and workflow behavior',
    skills: ['SQL', 'Clinical Data Analysis', 'EHR Systems', 'Data Extraction', 'Biomedical Informatics', 'Interdisciplinary Communication'],
    description: [
      "as a summer 2024 research intern in vanderbilt university medical center's department of biomedical informatics, i investigated inconsistencies in medication discontinuation practices within electronic health records. my work involved extracting and analyzing large-scale clinical encounter data to identify patterns in how medications marked for removal persisted on patient medication lists.",
      "in addition to quantitative analysis, i worked closely with physicians, nurses, and clinical researchers to better understand how these documentation issues emerge within real healthcare workflows. speaking directly with medical professionals helped me connect technical data patterns to the operational realities of patient care, provider coordination, and EHR system design.",
      "i also presented findings to mentors, phd researchers, medical students, and peers, learning how to communicate complex technical and clinical insights to interdisciplinary audiences. the experience showed me how healthcare technology challenges often exist at the intersection of data systems, human behavior, and clinical workflow constraints.",
    ],
    github: 'https://github.com/built-by-ann',
    accent: ACCENTS[0],
  },
  {
    num: '05',
    title: 'predicting land conversion in tennessee',
    tagline: 'deep learning for land conservation and development forecasting',
    skills: ['Python', 'PyTorch', 'ConvLSTM', 'QGIS', 'Rasterio', 'Remote Sensing', 'Geospatial Analysis'],
    description: [
      "as part of vanderbilt data science in 2024, i worked on a geospatial machine learning project in collaboration with the land trust of tennessee focused on forecasting future land conversion across the state. using NLCD satellite raster datasets, our team developed a ConvLSTM deep learning pipeline to model how natural and agricultural land may transition into developed areas over time.",
      "my work involved processing large geospatial raster datasets, extracting and filtering image patches with rasterio, and helping build preprocessing workflows for spatiotemporal prediction modeling. i also worked with geospatial visualization tools such as QGIS to analyze and interpret future land cover prediction maps. the project introduced challenges involving large GeoTIFF files, computational constraints, and balancing spatial accuracy with scalable machine learning workflows.",
      "beyond technical implementation, the experience showed me how machine learning and environmental science intersect with real conservation decision-making. collaborating on a project tied directly to land preservation efforts helped me think more critically about how predictive models can support real-world environmental planning, sustainability initiatives, and stakeholder needs.",
    ],
    github: 'https://github.com/built-by-ann',
    accent: ACCENTS[0],
  },
  {
    num: '06',
    title: 'illegal fishing detection with satellite imagery',
    tagline: 'a machine learning system using SAR imagery and vessel tracking data to identify potential illegal fishing activity',
    skills: ['TensorFlow/Keras', 'CNNs', 'SAR Imagery', 'AIS Data Processing', 'Python', 'Flask', 'React', 'Mapbox'],
    description: [
      "this in-progress project explores how satellite radar imagery and vessel tracking data can be used to detect potential illegal, unreported, and unregulated fishing activity. the system is designed around the idea that vessels may turn off AIS tracking to avoid detection, while synthetic aperture radar can still capture vessel presence regardless of weather or lighting.",
      "i built an early end-to-end prototype that preprocesses Sentinel-1 SAR imagery, aligns it with mock AIS vessel records, constructs training datasets, and trains a CNN classifier to distinguish likely fishing activity from non-fishing activity. the current version focuses on proving out the technical pipeline, including image preprocessing, timestamp alignment, model training, and prediction output.",
      "one of the main challenges has been the vessel data problem. reliable real-world AIS data is difficult to access, clean, and label, so the project currently uses mock AIS records while i continue exploring better approaches for real vessel movement data. this has made the project especially useful for understanding the difference between building a working prototype and building a model that can generalize to real-world conservation use cases.",
      "through this project, i've strengthened my understanding of remote sensing, computer vision, geospatial data alignment, and applied machine learning pipelines. it also pushed me to think more critically about data availability, model validity, and how environmental technology systems can be designed responsibly when working with incomplete or imperfect real-world data.",
    ],
    github: 'https://github.com/built-by-ann',
    accent: ACCENTS[0],
  },
  {
    num: '07',
    title: 'environmental similarity integration in herb-disease association prediction',
    tagline: 'augmenting biomedical prediction models with geospatial and climate-derived similarity data',
    skills: ['Python', 'Scientific Computing', 'Network Analysis', 'AUROC/AUPR Evaluation', 'Climate Similarity Modeling'],
    description: [
      "for my culminating research project in network analysis in healthcare, i worked in a two-person team to extend the HDAPM-NCP herb–disease association prediction framework by integrating environmental similarity data derived from climate, biome, and geographic occurrence records. the project explored whether medicinal plants growing in similar environmental conditions also exhibit similar therapeutic relationships.",
      "our work involved building reproducible data processing pipelines using python scientific computing tools, harvesting species occurrence data through GBIF, engineering climate similarity kernels using köppen–geiger climate classifications, and evaluating fusion strategies for integrating environmental and biochemical similarity measures. i also worked extensively with network analysis concepts, similarity matrices, and performance evaluation metrics such as AUROC and AUPR to assess predictive performance across multiple experimental configurations.",
      "one of the most interesting aspects of the project was discovering that meaningful research outcomes are not always defined by improved model performance. although environmental similarity produced minimal predictive gains, the work revealed important insights about feature redundancy, sparse environmental representations, and the complexity of translating ecological relationships into computational signals. the experience taught me how to critically evaluate negative or neutral results while still recognizing their scientific value and methodological contributions.",
      "the project strengthened my understanding of network medicine, machine learning evaluation, scientific research methodology, and reproducible computational workflows while exposing me to the intersection of environmental systems, pharmacology, and data science.",
    ],
    github: 'https://github.com/built-by-ann',
    accent: ACCENTS[0],
  },
  {
    num: '08',
    title: 'breast cancer classifier',
    tagline: 'medical machine learning classification',
    skills: ['Python', 'scikit-learn', 'TensorFlow/Keras', 'pandas', 'NumPy', 'GridSearchCV', 'Neural Networks'],
    description: [
      "this project explored how supervised machine learning models can support breast cancer diagnosis using numerical biopsy-derived cell nucleus features from the breast cancer wisconsin diagnostic dataset.",
      "i built and compared two classification pipelines: a random forest classifier using scikit-learn and a neural network implemented with tensorflow/keras. the project involved preprocessing clinical data, standardizing features for neural network training, tuning hyperparameters through cross-validation, and evaluating model performance using metrics such as accuracy, precision, and recall.",
      "one of the most interesting parts of the project was comparing how different machine learning architectures approached the same medical classification task. while the random forest model provided strong interpretability and high baseline performance, the neural network achieved slightly higher predictive accuracy after feature scaling and optimization. working through both approaches helped me better understand tradeoffs between classical machine learning methods and neural architectures in healthcare-focused prediction systems.",
      "the project also strengthened my understanding of model evaluation, reproducible ML pipelines, and the importance of balancing predictive performance with reliability in clinical applications. more broadly, it reinforced my interest in the intersection of machine learning and healthcare technology.",
    ],
    github: 'https://github.com/built-by-ann',
    accent: ACCENTS[0],
  },
  {
    num: '09',
    title: 'personal portfolio website',
    tagline: 'custom developer portfolio site',
    skills: ['React', 'TypeScript', 'Vite', 'Frontend Development', 'Responsive Design', 'Figma'],
    description: [
      "this portfolio website was fully designed and developed from scratch, beginning as a figma prototype before being translated into a production-ready react and typescript application. i designed every aspect of the experience myself, including layout systems, typography, color palette, navigation structure, interaction behavior, and overall visual identity.",
      "after completing the design process in figma, i built the site using react, typescript, vite, and react router, implementing the interface entirely through hand-written components and inline styling without relying on component libraries, CSS frameworks, or prebuilt design systems. the project involved creating reusable UI structures, managing routing and navigation behavior, implementing custom scaling logic for fixed-width responsiveness, and organizing a maintainable frontend architecture across multiple pages and shared components.",
      "one of the most valuable parts of the project was learning how design decisions translate into engineering constraints. building the site forced me to think carefully about visual hierarchy, spacing systems, interaction flows, maintainability, and how seemingly small frontend decisions affect the overall user experience. it also strengthened my ability to move fluidly between product thinking, interface design, and implementation rather than treating them as separate stages of development.",
      "the project reflects the kind of work i enjoy most: combining technical implementation with intentional design to create systems that feel cohesive, functional, and thoughtfully structured.",
    ],
    github: 'https://github.com/built-by-ann',
    accent: ACCENTS[0],
  },
  {
    num: '10',
    title: 'urban heat in nashville',
    tagline: 'GIS urban heat analysis',
    skills: ['QGIS', 'Raster Analysis', 'Spatial Data Visualization', 'MODIS LST', 'GIS Mapping'],
    description: [
      "this project explored the relationship between urbanization and land surface temperature in nashville through geospatial analysis and remote sensing data. using QGIS, i analyzed how impervious surfaces such as roads, buildings, and dense urban infrastructure contribute to elevated temperatures associated with the urban heat island effect.",
      "i worked with MODIS land surface temperature data, NLCD impervious surface datasets, and nashville GIS planning boundaries to preprocess, reproject, clip, and visualize spatial data layers within QGIS. the project involved creating heatmaps, overlay maps, and categorized surface analyses to identify patterns between urban development intensity and temperature distribution across the city.",
      "one of the most interesting aspects of the project was seeing how environmental patterns become visible through spatial analysis. comparing temperature maps with impervious surface coverage revealed clear geographic relationships between dense development and increased heat retention, especially in central urban areas. the experience strengthened my understanding of geospatial data processing, environmental analysis, and how GIS tools can be used to study real urban planning and sustainability challenges.",
      "the project also reinforced how technical mapping and visualization tools can support broader conversations around climate resilience, infrastructure planning, and environmental equity within rapidly growing cities.",
    ],
    github: 'https://github.com/built-by-ann',
    accent: ACCENTS[0],
  },
]

const descStyle: CSSProperties = {
  fontFamily: "'Roboto', sans-serif",
  fontStyle: 'italic',
  fontSize: 22,
  color: '#f0c3e9',
  lineHeight: 1.55,
  maxWidth: '100%',
  margin: 0,
  marginBottom: 16,
}

function ProjectCard({ project, isLast }: { project: Project; isLast: boolean }) {
  const chipStyle: CSSProperties = {
    border: `1.5px solid ${project.accent}`,
    color: project.accent,
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 500,
    fontSize: 15,
    padding: '6px 18px',
    whiteSpace: 'nowrap',
  }

  return (
    <div
      style={{
        paddingTop: 48,
        paddingBottom: isLast ? 48 : 64,
        borderTop: '1.5px solid #be7880',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 20 }}>
        <div
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 500,
            fontSize: 13,
            color: '#be7880',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: 10,
          }}
        >
          project {project.num}
        </div>
        <h2
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 700,
            fontSize: 56,
            color: project.accent,
            lineHeight: 1,
            margin: 0,
            marginBottom: 14,
          }}
        >
          {project.title}
        </h2>
        <p style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700, fontSize: 20, color: '#f5d7cc', margin: 0 }}>
          {project.tagline}
        </p>
      </div>

      {/* Skill chips */}
      <div style={{ display: 'flex', gap: 10, flexWrap: 'nowrap', marginBottom: 36 }}>
        {project.skills.map(skill => (
          <span key={skill} style={chipStyle}>{skill}</span>
        ))}
      </div>

      {/* Description paragraphs */}
      <div>
        {project.description.map((para, i) => (
          <p key={i} style={{ ...descStyle, marginBottom: i < project.description.length - 1 ? 16 : 0 }}>
            {para}
          </p>
        ))}
      </div>

      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        style={{
          display: 'inline-block',
          marginTop: 28,
          backgroundColor: '#1e3f55',
          color: '#f5d7cc',
          fontFamily: "'Roboto', sans-serif",
          fontWeight: 400,
          fontSize: 18,
          padding: '14px 32px',
          textDecoration: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        view on github →
      </a>
    </div>
  )
}

export default function ProjectsPage() {
  return (
    <div
      style={{
        backgroundColor: '#490013',
        paddingTop: 80,
        paddingBottom: 100,
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
        projects!
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
        everything i've built, broken, fixed, collaborated on, and learned from
      </p>

      <div style={{ borderBottom: '1.5px solid #be7880' }}>
        {projects.map((project, i) => (
          <ProjectCard key={project.num} project={project} isLast={i === projects.length - 1} />
        ))}
      </div>
    </div>
  )
}
