export interface Tech {
  name: string
  category: string
  description: string
  slug: string
  color: string
}

export const technologies: Tech[] = [
  {
    name: "React",
    category: "Frontend",
    description: "Component-based UI library",
    slug: "react",
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    category: "Framework",
    description: "React framework for production",
    slug: "nextjs",
    color: "#000000",
  },
  {
    name: "TypeScript",
    category: "Language",
    description: "Typed JavaScript superset",
    slug: "typescript",
    color: "#3178C6",
  },
  {
    name: "Node.js",
    category: "Backend",
    description: "JavaScript runtime environment",
    slug: "nodejs",
    color: "#339933",
  },
  {
    name: "Python",
    category: "Language",
    description: "Versatile programming language",
    slug: "python",
    color: "#3776AB",
  },
  {
    name: "Flutter",
    category: "Mobile",
    description: "Cross-platform UI framework",
    slug: "flutter",
    color: "#02569B",
  },
  {
    name: "OpenAI",
    category: "AI",
    description: "Advanced AI and LLM platform",
    slug: "openai",
    color: "#412991",
  },
  {
    name: "Docker",
    category: "DevOps",
    description: "Containerization platform",
    slug: "docker",
    color: "#2496ED",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    description: "Advanced relational database",
    slug: "postgresql",
    color: "#4169E1",
  },
  {
    name: "AWS",
    category: "Cloud",
    description: "Cloud infrastructure services",
    slug: "aws",
    color: "#FF9900",
  },
  {
    name: "Vercel",
    category: "Platform",
    description: "Frontend deployment platform",
    slug: "vercel",
    color: "#000000",
  },
  {
    name: "GraphQL",
    category: "API",
    description: "API query language",
    slug: "graphql",
    color: "#E10098",
  },
  {
    name: "Redis",
    category: "Cache",
    description: "In-memory data store",
    slug: "redis",
    color: "#DC382D",
  },
  {
    name: "Kubernetes",
    category: "Orchestration",
    description: "Container orchestration",
    slug: "kubernetes",
    color: "#326CE5",
  },
]
