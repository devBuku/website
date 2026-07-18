---
title: "Building Our College ERP — From Idea to Deployment"
date: "2025-06-15"
readTime: "10 min read"
tags: ["Project Deep Dive", "MERN", "Architecture", "Team Collaboration"]
excerpt: "How a team of four students designed, built, and deployed a full College ERP system — covering architecture, authentication, database design, and lessons from real-world team collaboration."
---

## The Problem

Every semester, our college relied on a fragmented system of Excel sheets, PDF notices, and hallway conversations to manage attendance, grades, timetables, and student-faculty communication. As students, we felt the pain firsthand:

- Checking attendance meant waiting for faculty to share updated sheets
- Grade announcements were posted on physical notice boards
- Timetable changes spread through word of mouth
- No central place for students to access course materials, notices, or their academic records

We decided to fix this. A team of four of us — two backend engineers, one frontend developer, and one designer — set out to build a **College ERP System** during our third year.

## Planning Phase

### Requirements Gathering

Before writing any code, we spent two weeks interviewing:

- **Students** — What features would make your academic life easier?
- **Faculty** — What administrative tasks take up most of your time?
- **Administration** — What data do you need to track and report?

The key requirements we identified:

| Role | Needs |
|------|-------|
| Student | View attendance, grades, timetable, notices, course materials |
| Faculty | Mark attendance, upload grades, post notices, manage courses |
| Admin | Manage users, courses, departments, generate reports |

### Tech Stack Decision

We chose the MERN stack because:

1. **JavaScript everywhere** — The whole team could contribute to both frontend and backend
2. **MongoDB** — Flexible schemas for diverse data (attendance records, grade sheets, notices)
3. **React** — Component reusability for the dashboard-heavy UI
4. **Express** — Mature, well-documented REST API framework

## Architecture

```
┌─────────────────────────────────────┐
│         React Frontend              │
│  ┌─────────┐ ┌────────┐ ┌────────┐ │
│  │ Student │ │Faculty │ │ Admin  │ │
│  │ Dashboard│ │Dashboard│ │Panel   │ │
│  └─────────┘ └────────┘ └────────┘ │
└──────────────┬──────────────────────┘
               │ REST API (JWT Auth)
┌──────────────▼──────────────────────┐
│       Express.js Backend             │
│  ┌──────┐ ┌──────┐ ┌─────────────┐ │
│  │ Auth │ │ CRUD │ │ Aggregation │ │
│  │Routes│ │Routes│ │  Pipelines  │ │
│  └──────┘ └──────┘ └─────────────┘ │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│         MongoDB                     │
│  ┌────┐ ┌──────┐ ┌──────┐ ┌──────┐ │
│  │Users│ │Courses│ │Grades│ │Attend│ │
│  └────┘ └──────┘ └──────┘ └──────┘ │
└─────────────────────────────────────┘
```

## Database Design

One of the most critical decisions was how to structure our MongoDB schemas. Here's the core of our user schema:

```javascript
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ['student', 'faculty', 'admin'],
    required: true,
  },
  department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
  // Role-specific fields
  studentProfile: {
    enrollmentNo: String,
    semester: Number,
    section: String,
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
  },
  facultyProfile: {
    employeeId: String,
    designation: String,
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
  },
}, { timestamps: true });
```

The key insight was using **embedded vs. referenced** data wisely:

- **Attendance records** — Embedded as arrays within course documents (high read frequency, no independent queries)
- **Users & Courses** — Referenced (queried independently, need integrity)
- **Grades** — Hybrid: embedded summary in student profile + detailed records in a separate collection

## Authentication & Authorization

We implemented JWT-based authentication with three roles:

```javascript
const requireRole = (...roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({ message: 'Insufficient permissions' });
  }
  next();
};

// Usage
router.get('/attendance', requireRole('faculty', 'admin'), getAttendance);
```

The JWT payload included:

- `userId` — For database lookups
- `role` — For route-level authorization checks
- `departmentId` — For data scoping

## Frontend Architecture

We used React with Context API for state management:

```javascript
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Verify token on mount
      api.get('/auth/me').then(setUser).finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
```

Each role had its own dashboard with role-specific widgets:

- **Student Dashboard**: Attendance percentage, upcoming exams, recent grades, notices
- **Faculty Dashboard**: Course list, mark attendance button, upload grades, post notices
- **Admin Panel**: User management, course allocation, department management, system reports

## Deployment

We deployed on an **AWS EC2 t2.micro** instance (free tier) with:

```nginx
server {
    listen 80;
    server_name erp.devbuku.me;

    location /api {
        proxy_pass http://localhost:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    location / {
        root /var/www/erp/build;
        try_files $uri $uri/ /index.html;
    }
}
```

- **Nginx** as reverse proxy
- **PM2** for Node.js process management
- **Let's Encrypt** for SSL certificates
- **GitHub Actions** for CI/CD — automated builds and deployments on push to main

## Challenges We Faced

### 1. Schema Design Iterations

We went through three schema redesigns before getting it right. Our first attempt had everything embedded in a single User document, which made querying course-level data impossible. Lesson: **think about access patterns before designing schemas**.

### 2. Real-time Attendance Updates

Faculty wanted to see attendance marked in real-time during class. We initially used Socket.io, but it added complexity we didn't need. We settled on optimistic UI updates with periodic polling — simpler and more reliable.

### 3. File Uploads for Course Materials

Handling PDF uploads for course materials required Multer configuration, file size limits, and secure storage paths. We stored files on the server filesystem with database references, which worked well for our scale.

### 4. Team Coordination

Working as a team of four presented its own challenges:

- **Merge conflicts** — Frequent, especially in the first month. We adopted feature branching and smaller, more frequent commits.
- **API contract disagreements** — Solved by writing OpenAPI documentation before implementing endpoints.
- **Different skill levels** — Pair programming sessions helped bring everyone up to speed.

## What I Learned

1. **Start with the data model** — Everything flows from how you structure your data. Schema design is worth investing time in.

2. **Authentication is harder than it looks** — JWT implementation is straightforward, but handling token refresh, role-based access, and edge cases (expired tokens during active sessions) requires careful thought.

3. **Deployment is not the finish line** — Monitoring, logging, backups, and security updates are ongoing responsibilities. We learned this after our server went down at 2 AM due to an expired SSL certificate.

4. **Team velocity > individual brilliance** — A team that communicates well and reviews each other's code will ship faster than a team of rockstars working in silos.

5. **Real users expose real bugs** — No amount of testing prepares you for how actual users interact with your software. Get early users, watch them use your app, and iterate.

## Impact

The ERP system handled over **500 student records** and **30 faculty accounts** during our pilot semester. Students could check attendance, view grades, and receive notices from their phones. Faculty saved hours previously spent on manual Excel tracking.

But the biggest impact was on our team. We went from being students who had only built tutorial projects to engineers who had shipped a production system used by real people — complete with the scars and battle stories to prove it.

---

*The ERP codebase is private (institutional data), but I'm happy to discuss architecture decisions and lessons learned. Reach out on [GitHub](https://github.com/devBuku) or [LinkedIn](https://www.linkedin.com/in/shubhayan-bagchi-b83522275).*
