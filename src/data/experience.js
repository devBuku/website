export const experience = [
  {
    role: "Backend Developer",
    company: "College ERP System (Final-Year Project)",
    period: "2024 – 2025",
    description:
      "Contributed backend modules to a comprehensive College ERP system built by a student team to centralize academic and administrative workflows — covering authentication & RBAC, admissions, academics, faculty management, attendance, examination & results, routines/timetables, fee management, and library management. We built it specifically to solve problems we personally ran into during four years at college: fragmented systems, manual attendance/fee/library processes, and poor inter-department communication. Deployed and demoed on a VPS during development (later taken down due to hosting costs); the college is currently evaluating it for production use.",
    highlights: [
      "Built all backend APIs for the Library Management module — book catalog, issue/return workflow, overdue tracking, and library reports",
      "Built all backend APIs for the Examination & Result Management module — exam scheduling, marks entry, grade calculation, and transcript generation",
      "Contributed backend support for Admin dashboard reporting and analytics endpoints",
      "System used PostgreSQL with Redis for caching, Docker/Docker Compose for local dev, and Nginx as reverse proxy",
      "Auth and RBAC layer covered student, faculty, and admin roles with JWT-based sessions",
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
  },
  {
    role: "Backend Developer",
    company: "Swarlipi — AI Video Dubbing (SIH 2023 Finalist)",
    period: "Aug 2023 – Dec 2023",
    description:
      "Built the backend processing pipeline for an AI-powered video dubbing platform as part of a 5-member team selected for the Smart India Hackathon 2023 national finale. Transcribes speech with OpenAI Whisper, translates via Google Translate, generates dubbed audio with gTTS, and re-syncs audio back into the video using moviepy and pydub.",
    highlights: [
      "Built a full transcription-to-translation-to-dubbing pipeline with OpenAI Whisper, Google Translate, and gTTS",
      "Used pydub to time-stretch audio segments for sync with original video timing",
      "Used moviepy to split video into per-segment clips, swap in translated audio, and reassemble the final video",
      "Designed Flask REST API with Celery-based async task queue for video processing jobs",
    ],
    tech: ["Python", "Flask", "OpenAI Whisper", "Google Translate API", "gTTS", "moviepy", "pydub"],
  },
  {
    role: "Coding Club Group Leader",
    company: "Swami Vivekananda Institute of Science & Technology",
    period: "2023 – Present",
    description:
      "Leading the college coding club, mentoring juniors in full-stack development, and organizing technical workshops.",
    highlights: [
      "Conducted hands-on workshops on React, Node.js, and MongoDB for junior students",
      "Guided project architecture reviews and code reviews for club members' projects",
      "Organized hackathon preparation sessions and mock coding interviews",
    ],
    tech: ["React", "Node.js", "Mentoring", "Workshops"],
  },
];
