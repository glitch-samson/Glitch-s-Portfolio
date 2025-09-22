export const portfolioData = {
  personal: {
    name: "John Doe",
    title: "Full Stack Developer",
    email: "john.doe@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    website: "https://johndoe.dev",
    linkedin: "https://linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
    bio: "Passionate full-stack developer with 5+ years of experience building scalable web applications. Specialized in React, Node.js, and cloud technologies with a focus on creating exceptional user experiences."
  },
  skills: {
    technical: [
      { name: "JavaScript", level: 95, category: "Frontend" },
      { name: "TypeScript", level: 90, category: "Frontend" },
      { name: "React", level: 95, category: "Frontend" },
      { name: "Vue.js", level: 85, category: "Frontend" },
      { name: "Node.js", level: 90, category: "Backend" },
      { name: "Python", level: 85, category: "Backend" },
      { name: "PostgreSQL", level: 88, category: "Database" },
      { name: "MongoDB", level: 82, category: "Database" },
      { name: "AWS", level: 85, category: "Cloud" },
      { name: "Docker", level: 80, category: "DevOps" }
    ],
    soft: [
      "Leadership & Team Management",
      "Problem Solving & Critical Thinking",
      "Communication & Presentation",
      "Project Management",
      "Agile & Scrum Methodologies",
      "Client Relations & Consultation"
    ]
  },
  experience: [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "Jan 2022 - Present",
      description: "Lead development of enterprise web applications serving 100k+ users. Architected microservices infrastructure reducing response times by 40%. Mentored junior developers and established coding standards.",
      technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"]
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "Remote",
      period: "Jun 2020 - Dec 2021",
      description: "Built complete e-commerce platform from ground up. Implemented real-time features using WebSocket technology. Optimized database queries improving performance by 60%.",
      technologies: ["Vue.js", "Express.js", "MongoDB", "Redis", "Stripe API"]
    },
    {
      title: "Frontend Developer",
      company: "DesignStudio Inc",
      location: "San Francisco, CA",
      period: "Aug 2019 - May 2020",
      description: "Developed responsive web applications with focus on UX/UI. Collaborated with design teams to implement pixel-perfect interfaces. Improved website loading speed by 50%.",
      technologies: ["React", "SCSS", "JavaScript", "Figma", "Adobe Creative Suite"]
    }
  ],
  education: [
    {
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      period: "2017 - 2019",
      gpa: "3.8/4.0",
      achievements: [
        "Thesis: 'Scalable Web Architecture Patterns'",
        "Teaching Assistant for Web Development Course",
        "Dean's List (4 semesters)"
      ]
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "UC Berkeley",
      location: "Berkeley, CA",
      period: "2013 - 2017",
      gpa: "3.6/4.0",
      achievements: [
        "Summa Cum Laude",
        "Computer Science Honor Society",
        "Hackathon Winner (2 times)"
      ]
    }
  ],
  projects: [
    {
      title: "E-Commerce Platform",
      description: "Full-featured online marketplace with advanced search, real-time chat, and payment processing. Built with modern web technologies and cloud infrastructure.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      features: [
        "Real-time inventory management",
        "Advanced search and filtering",
        "Secure payment processing",
        "Admin dashboard with analytics"
      ],
      github: "https://github.com/johndoe/ecommerce-platform",
      demo: "https://demo-ecommerce.johndoe.dev",
      status: "Completed"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, file sharing, and team communication features. Designed for remote teams and agile workflows.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Vue.js", "Express.js", "PostgreSQL", "Socket.io"],
      features: [
        "Real-time collaboration",
        "Kanban board interface",
        "File sharing and comments",
        "Time tracking and reporting"
      ],
      github: "https://github.com/johndoe/task-manager",
      demo: "https://tasks.johndoe.dev",
      status: "Completed"
    },
    {
      title: "AI Chat Application",
      description: "Intelligent chatbot application with natural language processing and machine learning capabilities. Integrates with multiple AI services for enhanced user experience.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Python", "OpenAI API", "FastAPI", "WebSocket"],
      features: [
        "Natural language processing",
        "Context-aware responses",
        "Multi-language support",
        "Custom AI model training"
      ],
      github: "https://github.com/johndoe/ai-chat-app",
      demo: "https://chat.johndoe.dev",
      status: "In Development"
    }
  ]
};