export const projects = [
  {
    id: "college-erp",
    title: "College ERP System",
    tagline: "Full-stack ERP system for academic & administrative workflows — final-year project",
    description:
      "A comprehensive College ERP system built by a student team to centralize academic and administrative workflows — covering authentication & RBAC, admissions, academics, faculty management, attendance, examination & results, routines/timetables, fee management, and library management. Built to solve problems we personally ran into during four years at college. Deployed and demoed on a VPS during development (later taken down due to hosting costs); the college is currently evaluating it for production use.",
    highlights: [
      "Built all backend APIs for the Library Management module — book catalog, issue/return workflow, overdue tracking, and library reports",
      "Built all backend APIs for the Examination & Result Management module — exam scheduling, marks entry, grade calculation, and transcript generation",
      "Contributed backend support for Admin dashboard reporting and analytics endpoints",
      "Implemented JWT-based auth and RBAC covering student, faculty, and admin roles",
    ],
    tech: [
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Nginx",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "TanStack Query",
      "Zod",
    ],
    category: "production",
    githubBackend: "https://github.com/devbuku/collegeerpserver",
    githubFrontend: "https://github.com/devBuku/CollegeERPFrontend",
    live: "#",
    icon: "Library",
    problem:
      "Colleges rely on fragmented systems — separate portals for attendance, fees, library, exams — with no central data layer. Our four years of living this motivated us to build a unified ERP.",
    architecture:
      "Monolithic backend with modular route separation. PostgreSQL with Redis caching; Docker Compose for local dev, Nginx reverse proxy on a VPS. JWT auth with RBAC across student/faculty/admin tiers.",
    challenges: [
      "Coordinating 4 team members across frontend, backend, and deployment without a dedicated PM",
      "Modeling RBAC that felt natural for each role without overcomplicating the permission tree",
      "Handling concurrent exam scheduling edge cases (clashing rooms, faculty assignments, rescheduled papers)",
    ],
    engineeringDecisions: [
      { decision: "PostgreSQL over MongoDB", rationale: "The domain is inherently relational — students, courses, faculty, attendance, fees, library. Relational integrity mattered more than schema flexibility." },
      { decision: "JWT over session-based auth", rationale: "Stateless tokens meant we didn't need a session store, simplifying horizontal scaling if the college ever adopted it." },
      { decision: "Monolithic repo with clear module boundaries", rationale: "A microservices split would have added deployment overhead for a 4-person student team. Module-level separation was enough." },
    ],
    results:
      "Deployed and demoed on a VPS. The college is currently evaluating it for production adoption. Taken down after dev due to hosting costs — but it ran reliably for the demo period.",
    lessonsLearned: [
      "Real-world RBAC is harder than tutorials make it look — every role has invisible edge cases",
      "Docker Compose is invaluable for on-boarding new contributors without 'works on my machine' syndrome",
      "Building something you personally need keeps motivation high through boring CRUD work",
    ],
  },
  {
    id: "vagdevi",
    title: "VagDevi.ai",
    tagline: "Gemini-powered multilingual chatbot — College Tech Fest Winner",
    description:
      "An AI chatbot leveraging Google's Gemini API for text and image understanding with multilingual translation support. Recognized with 1st prize at the college tech fest for technical innovation and practical utility.",
    highlights: [
      "Integrated Gemini API for text-to-text and image-to-text conversational capabilities",
      "Built multilingual translation support for real-time query processing",
      "Implemented JWT-based session management and user authentication",
      "Awarded 1st place at College Tech Fest for innovation and real-world application",
    ],
    tech: ["React", "Flask", "MongoDB", "Gemini API", "JWT"],
    category: "production",
    github: "https://github.com/devBuku/VagDevi.ai",
    live: "#",
    icon: "Sparkles",
  },
  {
    id: "swarlipi",
    title: "Swarlipi",
    tagline: "AI Video Dubbing Pipeline — SIH 2023 Finalist",
    description:
      "An AI-driven video dubbing pipeline built for Smart India Hackathon 2023. Transcribes speech with OpenAI Whisper, translates it via Google Translate, and generates dubbed audio with gTTS — then uses moviepy and pydub to re-sync and stitch the translated audio back into the original video, segment by segment.",
    highlights: [
      "Built a full transcription-to-translation-to-dubbing pipeline: OpenAI Whisper for speech-to-text, Google Translate for text translation, gTTS for speech synthesis in the target language",
      "Used pydub to time-stretch each generated audio segment so dubbed speech stays in sync with the original video's timing",
      "Used moviepy to split the source video into per-segment clips, swap in translated audio, and reassemble the final dubbed video",
      "Selected as a national-level finalist team project for Smart India Hackathon 2023",
    ],
    tech: ["Flask", "OpenAI Whisper", "Google Translate API", "gTTS", "moviepy", "pydub"],
    category: "completed",
    github: "https://github.com/devBuku/swarlipi-full-project-demo",
    icon: "MicVocal",
    problem:
      "Video dubbing traditionally requires expensive software licenses or manual audio engineering. The goal was to build an automated pipeline that transcribes, translates, and re-syncs dubbed audio — accessible to anyone.",
    architecture:
      "Flask backend with OpenAI Whisper for speech-to-text, Google Translate for cross-language translation, gTTS for text-to-speech, and moviepy + pydub for timeline-accurate audio replacement.",
    challenges: [
      "Preventing cumulative audio drift across consecutive dubbed segments in a single video",
      "Handling code-switching (mixing languages in one video) without corrupting the output track",
      "Optimizing the pipeline for hackathon demo conditions where processing time was limited",
    ],
    engineeringDecisions: [
      { decision: "Whisper over cloud STT", rationale: "OpenAI Whisper runs locally and doesn't require internet for transcriptions — critical for hackathon demo reliability." },
      { decision: "gTTS over neural TTS", rationale: "gTTS is free, fast, and supports 100+ languages. Output quality was sufficient for the target use case (educational content)." },
    ],
    results:
      "National finalist at Smart India Hackathon 2023. The pipeline demonstrated end-to-end dubbing on a live demo video during judging.",
    lessonsLearned: [
      "Pipelines with sequential failure points need robust error handling at each stage",
      "Hackathon projects benefit from aggressive scope management — perfect sync wasn't the goal, a working demo was",
    ],
  },
  {
    id: "uber-clone",
    title: "Uber Clone",
    tagline: "Mobile-first MERN ride-booking application",
    description:
      "A responsive ride-booking web application featuring role-based authentication (Rider and Captain interfaces), cookie-based sessions, location-based workflows, and live state updates across ride requests.",
    highlights: [
      "Role-based authentication with dedicated user portals for Riders and Captains",
      "Cookie-based session management ensuring secure authorization persistence",
      "Complete ride workflow from initial request and acceptance to trip completion",
      "Mobile-first responsive UI constructed with Tailwind CSS and React",
    ],
    tech: ["React", "Tailwind CSS", "Express.js", "MongoDB", "JWT"],
    category: "ongoing",
    github: "https://github.com/devBuku/Uber",
    ongoing: true,
    icon: "Car",
    problem:
      "Building a ride-booking platform from scratch to understand real-time geolocation, role-based flows, and the complete ride lifecycle from request to payment.",
    architecture:
      "MERN stack with cookie-based JWT sessions. Socket.io for real-time ride status updates between riders and captains. MongoDB for flexible ride/trip data.",
    challenges: [
      "Synchronizing ride state between rider and captain without race conditions",
      "Implementing fair ride-matching logic without a complex dispatching algorithm",
      "Handling ride cancellations and refund flows in a consistent way",
    ],
    engineeringDecisions: [
      { decision: "Cookie-based auth over localStorage JWT", rationale: "Cookies with HttpOnly flags are more resistant to XSS attacks, important for a two-sided platform handling payments." },
      { decision: "Socket.io for real-time updates", rationale: "WebSocket-based communication for ride status changes (requested → accepted → started → completed) eliminated the need for polling." },
    ],
    results:
      "Working prototype demonstrating the full ride flow: rider request, captain acceptance, live tracking, and trip completion.",
  },
  {
    id: "quickbute",
    title: "Quickbute",
    tagline: "MERN food ordering platform with full e-commerce flow",
    description:
      "A full-stack food ordering platform featuring JWT authentication, role-based access control (RBAC), Stripe payment integration, and a complete order lifecycle from cart management to delivery tracking, accompanied by an admin portal.",
    highlights: [
      "JWT authentication with RBAC for customers, restaurant staff, and administrators",
      "End-to-end order processing lifecycle: cart, checkout, payment verification, and order history",
      "Stripe payment gateway integration for secure transaction processing",
      "Admin management dashboard for tracking orders, updates, and platform analytics",
    ],
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Stripe", "JWT"],
    category: "production",
    github: "https://github.com/devBuku/Tomato",
    live: "#",
    image: "/tomato.gif",
  },
  {
    id: "spotify-mern",
    title: "Spotify MERN",
    tagline: "Music streaming web app with playlist management",
    description:
      "A MERN-stack music streaming platform offering user registration, custom playlist creation, audio playback controls, and a responsive media player UI.",
    highlights: [
      "User authentication and session persistence using JWT",
      "Dynamic playlist creation, track editing, and library management",
      "Responsive audio player UI with progress seeking and playback controls",
    ],
    tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
    category: "ongoing",
    github: "#",
    ongoing: true,
    icon: "Music",
  },
  {
    id: "realtime-chat",
    title: "Real-Time Chat",
    tagline: "WebSocket-powered chat application",
    description:
      "A real-time web chat application utilizing Socket.io for instant bi-directional communication, custom room creation, and persistent message logs stored in MongoDB.",
    highlights: [
      "Real-time event-driven messaging via Socket.io WebSockets",
      "Dynamic room creation, joining, and user status broadcasting",
      "Message history persistence backed by MongoDB schema design",
    ],
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io", "JWT"],
    category: "ongoing",
    github: "#",
    ongoing: true,
    icon: "MessageCircle",
  },
  {
    id: "ledger",
    title: "Ledger",
    tagline: "Banking transaction system with audit trails",
    description:
      "A secure banking transaction ledger implementing role-based authorization, account balance calculation logic, transaction logging, and immutable audit trails.",
    highlights: [
      "Role-based access control (RBAC) and token-based authentication via JWT",
      "Comprehensive audit trail recording for financial transaction history",
      "Account balance updates with transaction verification checks",
    ],
    tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
    category: "ongoing",
    github: "#",
    ongoing: true,
    icon: "Landmark",
  },
  {
    id: "device-tracker",
    title: "Real-Time Device Tracker",
    tagline: "Live location tracking with WebSocket streaming",
    description:
      "A real-time location tracking system that streams device geolocation coordinates over WebSockets for live visualization on an interactive map.",
    highlights: [
      "Live geolocation streaming using Socket.io WebSockets",
      "Interactive map rendering showing active device movements",
      "Multi-device concurrent location tracking without page reloads",
    ],
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io"],
    category: "ongoing",
    github: "#",
    ongoing: true,
    icon: "MapPin",
  },
  {
    id: "instacart",
    title: "Instacart",
    tagline: "E-commerce web app with Stripe payments",
    description:
      "An e-commerce web platform featuring product catalog search, shopping cart management, Stripe checkout integration, user authentication, and an administrative panel.",
    highlights: [
      "Full e-commerce flow: catalog browsing, cart operations, checkout, and payment",
      "Stripe payment gateway integration for secure transaction execution",
      "Admin interface for catalog item management and order status tracking",
    ],
    tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Stripe"],
    category: "ongoing",
    github: "#",
    ongoing: true,
    icon: "ShoppingCart",
  },
  {
    id: "random-walk",
    title: "random-walk",
    tagline: "SDL2 multi-threaded visualization in C",
    description:
      "A multi-threaded C graphics application using SDL2 to render dynamic 2D random walk simulations with rainbow-colored agents executing concurrently.",
    highlights: [
      "Multi-threaded rendering and concurrent execution using POSIX threads in C",
      "Graphics rendering pipeline constructed with SDL2 library bindings",
      "Dynamic color gradient rendering for simulated random walk trajectories",
    ],
    tech: ["C", "SDL2"],
    category: "experiments",
    github: "https://github.com/devBuku/random-walk",
    image: "/output.gif",
  },
];
