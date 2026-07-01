import { motion } from "framer-motion";
import { Cpu, Code2, BrainCircuit, Database, Server, Smartphone, ShieldAlert, GitBranch } from "lucide-react";

const categories = [
  {
    title: "Languages",
    icon: <Code2 className="w-5 h-5" />,
    skills: ["Python", "TypeScript", "JavaScript", "Kotlin", "Dart", "SQL"]
  },
  {
    title: "AI / Agentic",
    icon: <BrainCircuit className="w-5 h-5" />,
    skills: ["Gemini API", "Google GenAI SDK", "Multi-agent Orchestration", "Prompt Engineering", "RAG", "LLM Optimization", "RL with LLMs"]
  },
  {
    title: "Computer Vision",
    icon: <Cpu className="w-5 h-5" />,
    skills: ["YOLOv8", "ByteTrack", "EasyOCR", "Real-time Video Analytics"]
  },
  {
    title: "Backend",
    icon: <Server className="w-5 h-5" />,
    skills: ["FastAPI", "Flask", "Express", "Docker", "Redis Streams"]
  },
  {
    title: "Frontend",
    icon: <Cpu className="w-5 h-5" />,
    skills: ["React", "Vite", "Tailwind CSS", "Recharts"]
  },
  {
    title: "Cloud / Data",
    icon: <Database className="w-5 h-5" />,
    skills: ["Firebase", "Supabase", "PostgreSQL", "MongoDB", "AWS", "Google Cloud"]
  },
  {
    title: "Mobile / IoT",
    icon: <Smartphone className="w-5 h-5" />,
    skills: ["Kotlin/Android", "Flutter/Dart", "ESP32 IoT"]
  },
  {
    title: "Security",
    icon: <ShieldAlert className="w-5 h-5" />,
    skills: ["Kali Linux", "Penetration Testing", "LLM Security", "APK Reverse Engineering"]
  },
  {
    title: "DevOps",
    icon: <GitBranch className="w-5 h-5" />,
    skills: ["GitHub Actions", "Terraform", "Ansible", "Kubernetes", "CI/CD"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Capabilities() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-12 border-l-2 border-primary pl-4">
        <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight uppercase text-foreground">
          AGENT_SKILL_REGISTRY
        </h2>
        <p className="text-primary font-mono mt-2">SYS.MODULES.LOADED</p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {categories.map((cat, idx) => (
          <motion.div 
            key={idx}
            variants={itemVariants}
            className="group relative bg-card border border-border p-6 hover:border-primary/50 transition-colors overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="flex items-center gap-3 mb-4 text-primary relative z-10">
              {cat.icon}
              <h3 className="font-mono font-bold tracking-wide">{cat.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2 relative z-10">
              {cat.skills.map((skill, sIdx) => (
                <span 
                  key={sIdx}
                  className="px-2 py-1 text-xs font-mono border border-border bg-background text-muted-foreground group-hover:border-primary/30 group-hover:text-foreground transition-colors cursor-default"
                  title={`Execute Tool: ${skill}`}
                >
                  {skill}
                </span>
              ))}
            </div>
            
            {/* Corner tech accents */}
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
