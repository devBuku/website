export const experience = [
  {
    role: "Full-Stack Developer (Team Lead)",
    company: "College ERP System",
    period: "2024 – 2025",
    description:
      "Led a team of four to build a comprehensive College ERP system from scratch — managing attendance, grades, notices, timetables, and faculty-student communication.",
    highlights: [
      "Architected the full system — MongoDB schemas, Express REST APIs, React frontend, role-based access",
      "Implemented JWT authentication with role-based access control for students, faculty, and admins",
      "Designed and normalized MongoDB schemas for students, faculty, courses, attendance, and grades",
      "Built RESTful API endpoints with pagination, filtering, and aggregation pipelines",
      "Deployed on AWS EC2 with Nginx reverse proxy, PM2 process management, and SSL via Let's Encrypt",
      "Used Git for version control with feature branching and code review workflows",
      "Collaborated via Discord for daily standups, task tracking, and pair debugging sessions",
    ],
    tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "AWS EC2", "Nginx", "PM2"],
  },
  {
    role: "Backend Developer",
    company: "Swarlipi — AI Video Dubbing (SIH 2023 Finalist)",
    period: "Aug 2023 – Dec 2023",
    description:
      "Built the backend processing pipeline for an AI-powered video dubbing platform as part of a 5-member team selected for the Smart India Hackathon 2023 national finale.",
    highlights: [
      "Integrated OpenAI Whisper for speech recognition with chunked audio processing for long videos",
      "Built Flask REST API with Celery-based async task queue for video processing jobs",
      "Implemented audio-video synchronization using OpenCV and ffmpeg with word-level timestamp alignment",
      "Designed API endpoints for video upload, transcription, and dubbing with progress polling",
    ],
    tech: ["Python", "Flask", "OpenAI Whisper", "OpenCV", "Celery", "React"],
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
