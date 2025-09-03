export type Project = {
  title: string;
  tech: string;
  desc: string;
  year: string;
  link?: string;
};

export type Certificate = {
  name: string;
  issuer: string;
  year: string;
  link?: string;
};

export const skills: string[] = [
  "Python", "JavaScript", "Java", "C", "HTML", "CSS",
  "React.js", "Node.js", "Express.js", "Spring Boot",
  "OpenCV", "TensorFlow", "Scikit-learn", "Keras", "NumPy",
  "Matplotlib", "MySQL", "MongoDB", "RESTful APIs", "Git",
  "Docker", "Postman", "VS Code",
];

export const projects: Project[] = [
  {
    title: "AI-Powered Note-Taking Application",
    tech: "Python, OCR, OpenAI API",
    desc: "Designed an AI-assisted tool that scans images/screenshots, extracts and structures text via OCR, and generates refined PDF notes using natural language processing APIs.",
    year: "2025",
    link: "#", // Replace with repo link
  },
  {
    title: "Web Application for Assisted Package Quota Estimation",
    tech: "MERN stack, Postman",
    desc: "Developed a user-friendly web app to generate pricing estimates for media service packages based on client input and preferences.",
    year: "2025",
    link: "#",
  },
  {
    title: "Fish Tracking and Distance Analysis System",
    tech: "Python, OpenCV, NumPy, Matplotlib, Multiprocessing",
    desc: "Built tool to analyze fish tank footage by tracking centroid movements, generating heatmaps, calculating distances traveled, and batch-processing videos.",
    year: "2025",
    link: "#",
  },
  {
    title: "Camera Shop & Rental Management System",
    tech: "Spring Boot, MySQL, RESTful APIs, Postman",
    desc: "Full-stack web app for camera sales and rentals with secure user authentication, real-time inventory, and an admin dashboard.",
    year: "2025",
    link: "#",
  },
  {
    title: "Long-Term Efficiency Prediction of Solar Panels Using Machine Learning",
    tech: "Python, Pandas, Scikit-learn, TensorFlow, Keras",
    desc: "Built RNN and LSTM models using NASA POWER data to forecast efficiency of solar panels, aiding sustainable energy planning.",
    year: "2025",
    link: "#",
  },
  {
    title: "Selective File Copying Application for Photo Editors",
    tech: "Python",
    desc: "Automated selective photocopying; streamlined editors' bulk requests and reduced manual effort.",
    year: "2025",
    link: "#",
  },
  {
    title: "Web Application & Resource Management (perabeats Media Society)",
    tech: "MERN Stack, Postman",
    desc: "Digitized event coordination and equipment booking, replacing sluggish manual workflows with an efficient platform.",
    year: "2024",
    link: "#",
  },
];

export const certificates = [
  {
    title: "Docker - Level 1",
    recipient: "Dilshan Pathirana",
    course: "Docker - Level 1",
    completion: "August 4, 2025 – August 27, 2025",
    certificateId: "381e61eb-Ca67-4fe1-B0d2-3f14907865c5",
    signedBy: "Mumshad Mannambeth, Founder & Trainer, KodeKloud",
  },
  {
    title: "Linux - Level 1",
    recipient: "Dilshan Pathirana",
    course: "Linux - Level 1",
    completion: "August 4, 2025 – August 23, 2025",
    certificateId: "375b94d1-4e49-46cb-Ae7f-99ff9adfe208",
    signedBy: "Mumshad Mannambeth, Founder & Trainer, KodeKloud",
  },
  {
    title: "Git - Level 1",
    recipient: "Dilshan Pathirana",
    course: "Git - Level 1",
    completion: "August 23, 2025 – September 2, 2025",
    certificateId: "7732e6c0-De49-4f0d-88de-B6ffbfb86336",
    signedBy: "Mumshad Mannambeth, Founder & Trainer, KodeKloud",
  },
];


export const awards: string[] = [
  "Member of the Year – Videography, Perabeats Media Society, 2024",
];

export const extracurriculars: string[] = [
  "Editorial Panel Member, Robarosiya Society, 2023–2024",
  "Member, Perabeats Media Society, 2023–2024",
  "Executive Committee Member, Perabeats Media Society, 2024–2025",
];
