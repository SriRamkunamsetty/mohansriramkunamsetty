import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Cpu, Code2, BrainCircuit, Database, Server, Smartphone, ShieldAlert, GitBranch } from "lucide-react";
import * as THREE from "three";

const categories = [
  {
    title: "Languages",
    icon: <Code2 className="w-5 h-5" />,
    skills: ["Python", "TypeScript", "JavaScript", "Kotlin", "Dart", "SQL"],
  },
  {
    title: "AI / Agentic",
    icon: <BrainCircuit className="w-5 h-5" />,
    skills: ["Gemini API", "Google GenAI SDK", "Multi-agent Orchestration", "Prompt Engineering", "RAG", "LLM Optimization", "RL with LLMs"],
  },
  {
    title: "Computer Vision",
    icon: <Cpu className="w-5 h-5" />,
    skills: ["YOLOv8", "ByteTrack", "EasyOCR", "Real-time Video Analytics"],
  },
  {
    title: "Backend",
    icon: <Server className="w-5 h-5" />,
    skills: ["FastAPI", "Flask", "Express", "Docker", "Redis Streams"],
  },
  {
    title: "Frontend",
    icon: <Cpu className="w-5 h-5" />,
    skills: ["React", "Vite", "Tailwind CSS", "Recharts"],
  },
  {
    title: "Cloud / Data",
    icon: <Database className="w-5 h-5" />,
    skills: ["Firebase", "Supabase", "PostgreSQL", "MongoDB", "AWS", "Google Cloud"],
  },
  {
    title: "Mobile / IoT",
    icon: <Smartphone className="w-5 h-5" />,
    skills: ["Kotlin/Android", "Flutter/Dart", "ESP32 IoT"],
  },
  {
    title: "Security",
    icon: <ShieldAlert className="w-5 h-5" />,
    skills: ["Kali Linux", "Penetration Testing", "LLM Security", "APK Reverse Engineering"],
  },
  {
    title: "DevOps",
    icon: <GitBranch className="w-5 h-5" />,
    skills: ["GitHub Actions", "Terraform", "Ansible", "Kubernetes", "CI/CD"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function ParticleBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const w = container.clientWidth;
    const h = container.clientHeight;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: "low-power" });
    } catch {
      return;
    }
    if (!renderer.getContext()) { renderer.dispose(); return; }
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 1000);
    camera.position.z = 20;

    const count = 600;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      const isCyan = Math.random() > 0.4;
      colors[i * 3] = isCyan ? 0 : 0.55;
      colors[i * 3 + 1] = isCyan ? 1 : 0.36;
      colors[i * 3 + 2] = isCyan ? 1 : 0.97;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      points.rotation.y += 0.0008;
      points.rotation.x += 0.0003;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const nw = container.clientWidth;
      const nh = container.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 w-full h-full" />;
}

export default function Capabilities() {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-6 py-12">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-35 overflow-hidden">
        <ParticleBackground />
      </div>

      <div className="relative z-10">
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
              className="group relative bg-card/80 backdrop-blur-sm border border-border p-6 hover:border-primary/50 transition-colors overflow-hidden"
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

              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
