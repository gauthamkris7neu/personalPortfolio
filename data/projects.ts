import type { Project } from "@/types"

export const projects: Project[] = [
  {
    title: "Smart Expense",
    description:
      "A full-stack expense tracking application with microservices architecture using Spring Boot and React. Features AI-powered financial insights engine with interactive visualizations, robust security, and Plaid API integration for automatic transaction categorization.",
    image: "/images/SmartExpense.png",
    link: "https://github.com/CSYE-SOFTWARE-ENGINEERING/SmartExpense_Backend",
    technologies: ["React", "Spring Boot", "Microservices", "Plaid API", "OpenAI API"],
  },
  {
    title: "PrepGenius",
    description:
      "A personalized interview preparation system using Vue.js and FastAPI with DeepSeek R1 LLM integration. Features dynamic role-specific technical questions, real-time response analysis, and an adaptive algorithm that adjusts question difficulty based on performance.",
    image: "/images/PrepGenius.png",
    link: "#",
    technologies: ["Vue.js", "FastAPI", "DeepSeek R1 LLM", "Adaptive Learning"],
  },
  {
    title: "Cloud-Based VM Cluster",
    description:
      "A private cloud infrastructure as a service (IAAS) using OpenStack, providing scalable computing resources with a Message Passing Interface (MPI) Cluster for efficient parallel computing with performance evaluation.",
    image: "/images/Cluster.png",
    link: "#",
    technologies: ["OpenStack", "MPI", "Cloud Infrastructure", "Parallel Computing"],
  },
  {
    title: "Distributed Attendance System",
    description:
      "A comprehensive attendance tracking solution with React.js web interface for teachers and Swift-based iOS app for students. Implemented TensorFlow-based facial recognition with 3D depth mapping and liveness detection to prevent spoofing, alongside secure QR code generation with time-based expiration.",
    image: "/images/DAS.png",
    link: "https://github.com/gauthamvenkat/DASreact",
    technologies: ["React.js", "Swift", "TensorFlow", "Biometric Authentication", "QR Code Encryption"],
  },
];