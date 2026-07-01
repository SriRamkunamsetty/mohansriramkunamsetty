import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import portraitImg from "@assets/IMG_20260615_211732_1782913779035.png";
import { Terminal } from "lucide-react";

const stats = [
  { value: 6, suffix: "+", label: "Projects Filed for Patent" },
  { value: 2, suffix: "", label: "Incubated Startups" },
  { value: 13, prefix: "AIR ", label: "India AMD AI Engage" },
  { value: 6, prefix: "Top ", label: "India Scaler/Google ASCENT" },
];

function AnimatedCounter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [statusIdx, setStatusIdx] = useState(0);
  const statuses = ["THINKING...", "PLANNING...", "EXECUTING...", "DEPLOYING..."];

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIdx((prev) => (prev + 1) % statuses.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    const nodes = Array.from({ length: 50 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(0, 255, 255, 0.5)"; // cyan
      ctx.strokeStyle = "rgba(0, 255, 255, 0.1)";

      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      nodes.forEach((nodeA, i) => {
        nodes.slice(i + 1).forEach((nodeB) => {
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-40 mix-blend-screen" />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-primary/50 bg-primary/10 text-primary font-mono text-xs rounded-full"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            AGENT STATUS: ONLINE [{statuses[statusIdx]}]
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold font-sans tracking-tight mb-4 text-foreground glitch-text relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            MOHAN SRIRAM
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              KUNAMSETTY
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground font-mono mb-8 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Agentic AI Engineer · AI Full-Stack Developer · Autonomous Systems Builder
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a href="#missions" className="px-6 py-3 bg-primary text-primary-foreground font-bold font-mono hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(0,255,255,0.4)] flex items-center gap-2 group">
              <Terminal className="w-4 h-4 group-hover:rotate-90 transition-transform" />
              VIEW_MISSIONS
            </a>
            <a href="#connect" className="px-6 py-3 border border-primary text-primary font-bold font-mono hover:bg-primary/10 transition-all flex items-center gap-2">
              INTERFACE_CONNECT
            </a>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-border pt-8">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + idx * 0.1 }}
              >
                <div className="text-2xl md:text-3xl font-bold text-primary font-mono mb-1">
                  <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="relative w-64 h-64 md:w-96 md:h-96"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", duration: 1 }}
        >
          <div className="absolute inset-0 border-2 border-primary rounded-full animate-[spin_10s_linear_infinite] border-t-transparent opacity-50" />
          <div className="absolute inset-2 border border-secondary rounded-full animate-[spin_15s_linear_infinite_reverse] border-b-transparent opacity-30" />
          <div className="absolute inset-4 overflow-hidden rounded-full border-4 border-background bg-card shadow-[0_0_30px_rgba(0,255,255,0.2)]">
            <img src={portraitImg} alt="Mohan Sriram Kunamsetty" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
