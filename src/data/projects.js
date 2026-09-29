const placeholder = (w = 1200, h = 700, text = 'Project+Image') =>
  `https://via.placeholder.com/${w}x${h}.png?text=${encodeURIComponent(text)}`;

const projects = [
  {
    id: 1,
    name: "Medyx",
    subtitle:
      "OPD EMR for Indian clinics — live token queue, consultations, prescriptions, billing, and a patient portal.",
    description:
      "Small Indian OPDs still run on paper tokens, WhatsApp, and scattered Excel sheets — which means lost records, queue chaos, and slow billing. Medyx is an all-in-one clinic EMR: reception runs a realtime walk-in token queue, doctors work from a consultation workspace with notes, labs, and prescriptions, and billing generates itemized or flat-fee PDF receipts. Patients can book online, join a patient portal for upcoming visits and past prescriptions, and clinics stay isolated with role-based staff access (admin, doctor, receptionist). Built as a production Next.js app on Supabase Auth + PostgreSQL via Prisma, deployed on Vercel.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Supabase",
      "Supabase Auth",
      "Tailwind CSS",
      "Zod",
      "React PDF",
      "Vitest",
      "Playwright",
    ],
    role: "Full-Stack Developer & Product Builder",
    responsibilities: [
      "Shipped a full OPD workflow: walk-in token queue, patient MRNs, consultations, prescriptions, billing, and clinic settings",
      "Built realtime queue sync so reception and doctor desks share the same live token board without refresh",
      "Implemented role-based access for admin, doctor, and receptionist with clinic-scoped data isolation",
      "Designed online appointment booking plus a patient portal for visits, queue status, and prescription history",
      "Generated prescription and billing PDFs with @react-pdf/renderer for print-ready clinic receipts",
      "Modeled the domain in Prisma on PostgreSQL (Supabase) with migrations, seed data, and Vitest + Playwright coverage",
    ],
    architectureImage: placeholder(1000, 400, 'Medyx+Architecture'),
    challenges: [
      "Keeping walk-in token state consistent across concurrent reception desks without stale queue boards",
      "Enforcing clinic-level data isolation so staff only see their own patients, visits, and billing",
      "Designing one consultation workspace that covers notes, labs, and prescriptions without slowing busy OPDs",
      "Producing reliable PDF prescriptions and receipts that clinics can print immediately",
      "Balancing public clinic listing + online booking with authenticated staff workflows in the same Next.js app",
    ],
    codeSnippet: `// Clinic-scoped patient portal booking flow (simplified)
export async function bookAppointment(input: BookingInput) {
  const clinic = await prisma.clinic.findFirst({
    where: { slug: input.clinicSlug, isListed: true },
  });
  if (!clinic) throw new Error("Clinic not available for booking");

  return prisma.appointment.create({
    data: {
      clinicId: clinic.id,
      patientId: input.patientId,
      doctorId: input.doctorId,
      scheduledAt: input.slot,
      status: "BOOKED",
      source: "ONLINE",
    },
  });
}`,
    metrics: [
      "Live at medyx-bay.vercel.app",
      "Core OPD modules: queue, records, consultations, prescriptions, billing, patient portal",
      "3 staff roles with permission-scoped clinic workflows",
      "Supabase Auth + Prisma/PostgreSQL multi-clinic data model",
      "PDF prescription & billing receipts for print workflows",
    ],
    github: "https://github.com/Mil9nn/Medyx",
    demo: "https://medyx-bay.vercel.app",
    onlineScreenshots: [
      "/projects/medyx/queue.png",
      "/projects/medyx/records.png",
    ],
    images: [
      "/projects/medyx/queue.png",
      "/projects/medyx/records.png",
      "/projects/medyx/prescriptions.png",
    ],
  },
  {
    id: 2,
    name: "EasyCare",
    subtitle: "A full-stack medical appointment management platform with AI-powered symptom analysis and real-time admin controls.",
    description: "Managing healthcare appointments through phone calls or manual systems leads to missed bookings, poor record-keeping, and slow admin response times. EasyCare solves this with a complete patient-to-admin workflow: patients register, browse doctors by specialization, pick a date and time, and submit appointment requests. Admins receive instant email notifications, review requests via a real-time dashboard, and schedule or cancel with automated patient email confirmations. The platform also integrates GPT-4o-mini as an AI symptom checker that returns structured medical insights including possible conditions, urgency level, recommended specialist, and warning signs. Built as a production-deployed full-stack application with JWT authentication, Cloudinary file uploads, Socket.IO real-time sync, and a comprehensive analytics dashboard.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Zustand",
      "React Hook Form",
      "Zod",
      "Radix UI",
      "shadcn/ui",
      "TanStack Table",
      "Recharts",
      "Socket.IO",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcryptjs",
      "Cloudinary",
      "Nodemailer",
      "OpenAI API (GPT-4o-mini)",
      "MUI X Date Pickers",
      "Axios",
      "Multer",
      "Moment.js"
    ],
    role: "Full-Stack Developer",
    responsibilities: [
      "Architected a dual-auth system with separate JWT cookie flows for patients (7-day httpOnly cookie) and admins (OTP-verified JWT with role claim)",
      "Built an AI symptom checker using GPT-4o-mini with structured JSON schema output returning urgency level, possible conditions, recommended specialist, and warning signs",
      "Implemented real-time appointment updates using Socket.IO — new bookings and admin schedule/cancel actions propagate instantly to all connected clients without page refresh",
      "Designed Socket.IO helper functions (emitAppointmentStats, emitWeeklyAppointments, emitPatientsByAgeGroup) that push live dashboard metrics on every appointment mutation",
      "Built automated email notifications via Nodemailer — admins receive new booking alerts with a dashboard deep link, patients receive schedule confirmation or cancellation emails",
      "Implemented Cloudinary integration for patient identification documents and doctor profile image uploads with delete-on-update logic",
      "Developed a multi-collection MongoDB aggregation pipeline for patient demographic analytics grouped by dynamic age brackets using $dateDiff and $switch",
      "Built a comprehensive admin dashboard with live stat cards, weekly appointment line charts, appointment status pie charts, and age group bar charts using Recharts",
      "Implemented TanStack Table for the admin appointments table with pagination, clickable rows for patient detail modals, and inline schedule/cancel dialogs",
      "Designed a comprehensive Zod validation layer with separate schemas for patient registration, appointment creation, scheduling, cancellation, and doctor registration"
    ],
    architectureImage: placeholder(1000, 400, 'Three-tier+Architecture'),
    challenges: [
      "Implementing two independent JWT authentication flows (user vs admin) within the same Express app using separate cookie names and middleware without collision",
      "Ensuring Socket.IO real-time events stay consistent with REST state — preventing duplicate appointment entries in Zustand by checking IDs before appending incoming socket events",
      "Designing the AI chatbot response with GPT-4o-mini's structured JSON schema output mode to guarantee type-safe, parseable responses across all medical analysis fields",
      "Building MongoDB aggregation pipelines that compute dynamic age groups from birthDate at query time using $dateDiff and $switch rather than storing precomputed values",
      "Handling multipart form data (Multer + Cloudinary) for both patient ID document uploads and doctor profile images, including old image cleanup on update",
      "Coordinating pre-selected doctor and date/time state from the appointment page across React Router navigation to the booking form using location.state",
      "Implementing inline profile field editing with per-field edit state, isolated useForm instances per field, and optimistic Zustand updates to avoid full page re-renders"
    ],
    codeSnippet: "// AI Symptom Checker — GPT-4o-mini with enforced JSON schema output\nexport const handleChatMessage = async (req, res) => {\n  const { message } = req.body;\n  const response = await client.chat.completions.create({\n    model: 'gpt-4o-mini',\n    messages: [{ role: 'user', content: `Analyze these symptoms: \"${message}\"` }],\n    response_format: {\n      type: 'json_schema',\n      json_schema: {\n        name: 'medical_analysis',\n        strict: true,\n        schema: {\n          type: 'object',\n          properties: {\n            possible_conditions: { type: 'array', items: { type: 'string' } },\n            recommended_speciality: { type: 'string' },\n            urgency_level: { type: 'string', enum: ['low', 'medium', 'high', 'emergency'] },\n            general_advice: { type: 'string' },\n            warning_signs: { type: 'array', items: { type: 'string' } },\n            disclaimer: { type: 'string' }\n          },\n          required: ['possible_conditions', 'recommended_speciality', 'urgency_level',\n                     'general_advice', 'warning_signs', 'disclaimer'],\n          additionalProperties: false\n        }\n      }\n    }\n  });\n  const parsed = JSON.parse(response.choices[0].message.content);\n  return res.status(200).json({ data: parsed });\n};",
    metrics: [
      "Deployed to production at easycare-c6rt.onrender.com serving real traffic",
      "6 API route domains with 20+ REST endpoints covering auth, patients, appointments, doctors, admin, and AI chatbot",
      "Real-time dashboard syncs across all connected admin clients via 5 distinct Socket.IO event types",
      "Automated dual-channel email system — admin alert on new booking, patient confirmation/cancellation email on admin action",
      "AI symptom checker returns structured analysis with 6 guaranteed fields enforced via GPT-4o-mini JSON schema mode",
      "15 pre-seeded doctors across 7 medical specializations with Cloudinary-hosted profile images",
      "MongoDB aggregation pipelines compute live patient demographic stats and weekly appointment trends at query time"
    ],
    github: "https://github.com/Mil9nn/easycare",
    demo: "https://easycare-c6rt.onrender.com",
    // online screenshots from public placeholder services (randomized)
    onlineScreenshots: [
      'https://picsum.photos/1200/700?random=101',
      'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1200&q=80'
    ],
    images: [
      'https://picsum.photos/1200/700?random=102',
      'https://picsum.photos/1200/700?random=103', 
    ],
  },
  {
    id: 3,
    name: "Table Tennis Tournament Manager",
    subtitle: "A full-stack sports management platform for tracking matches, tournaments, and player analytics in real time.",
    description: "Managing table tennis tournaments manually is error-prone and lacks meaningful performance insights. This platform solves that by providing a comprehensive system for organizing singles, doubles, and team matches across multiple tournament formats including knockout brackets and round-robin. It features real-time score updates, deep per-player analytics with shot placement visualization, and a leaderboard aggregating stats across all match contexts. Built as a production-grade web application with a modular architecture, it demonstrates end-to-end full-stack development from REST API design to interactive data visualization.",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "MongoDB",
      "Mongoose",
      "Socket.IO",
      "Recharts",
      "Tailwind CSS",
      "Node.js",
      "REST API"
    ],
    role: "Full-Stack Developer & Architect",
    responsibilities: [
      "Designed and implemented a RESTful API in Next.js API routes handling singles, doubles, mixed doubles, and team match formats",
      "Built dynamic knockout bracket generation with automated match progression and seeding logic",
      "Developed a real-time scoring system using Socket.IO for live match updates across connected clients",
      "Created interactive data visualization components (wagon wheel shot maps, serve/receive charts, game progression graphs) using Recharts",
      "Implemented a cross-context leaderboard aggregating player stats from individual and team match types",
      "Refactored monolithic React components into modular, reusable architecture to improve maintainability",
      "Designed MongoDB schema to support complex relational data between players, matches, sets, and tournaments",
      "Applied consistent design system across all pages using Tailwind CSS with responsive layouts"
    ],
    architectureImage: placeholder(1000, 400, 'Three-tier+Architecture'),
    challenges: [
      "Designing a flexible data model that cleanly handles multiple match formats (singles, doubles, team) without duplicating schema logic",
      "Implementing dynamic knockout bracket generation that correctly handles byes, seeds, and auto-advancing winners across rounds",
      "Aggregating player statistics consistently across heterogeneous match contexts (individual vs. team contributions) for the leaderboard",
      "Building accurate shot placement visualization (wagon wheel) with correct coordinate mapping to table zones",
      "Handling Socket.IO real-time events reliably while avoiding race conditions during concurrent score updates",
      "Managing CORS configuration for mobile testing environments against a Next.js backend",
      "Maintaining TypeScript type safety across complex nested API response shapes and Socket.IO event payloads"
    ],
    codeSnippet: "// Knockout bracket generation with automatic bye handling\nexport function generateKnockoutBracket(players: Player[]): Match[] {\n  const totalSlots = nextPowerOfTwo(players.length);\n  const byes = totalSlots - players.length;\n  const seeded = [...players, ...Array(byes).fill(null)];\n  const matches: Match[] = [];\n\n  for (let i = 0; i < totalSlots / 2; i++) {\n    matches.push({\n      player1: seeded[i],\n      player2: seeded[totalSlots - 1 - i],\n      round: 1,\n      matchNumber: i + 1,\n      status: seeded[totalSlots - 1 - i] === null ? 'bye' : 'pending',\n    });\n  }\n  return matches;\n}",
    metrics: [
      "Supports 4+ match formats: singles, doubles, mixed doubles, and multi-player team matches",
      "Real-time updates delivered via Socket.IO with sub-200ms latency on local network",
      "Leaderboard aggregates stats across unlimited match history with O(n) query performance via MongoDB aggregation pipelines",
      "Modular component refactor reduced average component size by ~60%, improving readability and reusability",
      "Tournament bracket engine handles up to 64-player fields with automatic bye and seeding logic",
      "6+ distinct chart types implemented for player performance analytics"
    ],
    github: "https://github.com/Mil9nn/table-tennis",
    demo: "[PASTE DEMO LINK HERE]",
    onlineScreenshots: [
      'https://picsum.photos/1200/700?random=201',
      'https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=1200&q=80'
    ],
    images: [
      'https://picsum.photos/1200/700?random=202',
      'https://picsum.photos/1200/700?random=203',
    ],
  },
];

export default projects;
