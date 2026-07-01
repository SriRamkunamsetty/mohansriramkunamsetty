import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import amdImg from "@assets/bytexl__qiscollege__amd__aiacademy__aiengage__art_1782913771955.jpg";
import scalerImg from "@assets/ChatGPT_Image_Jul_1,_2026,_12_52_34_PM_1782913771954.png";
import gfgImg from "@assets/ChatGPT_Image_Jul_1,_2026,_12_39_49_PM_1782913771956.png";

const recognitions = [
  { title: "AIR #13", subtitle: "AMD AI Engage India", img: amdImg, badge: "AIR #13 INDIA", org: "AMD x ByteXL x QISCET", stat: "Top 100 | National Recognition" },
  { title: "TOP 6", subtitle: "Scaler/Google ASCENT PromptWars", img: scalerImg, badge: "TOP 6 INDIA", org: "Scaler + Google", stat: "Thousands of Participants | Tier 1,2,3" },
  { title: "CAMPUS MANTRI", subtitle: "Official GFG Representative", img: gfgImg, badge: "CAMPUS MANTRI", org: "GeeksforGeeks", stat: "QISCET | June 2026" },
];

function HoloCard({ rec, idx }: { rec: typeof recognitions[0]; idx: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [shine, setShine] = useState({ x: 50, y: 50 });
  const [hovering, setHovering] = useState(false);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ x: -dy * 15, y: dx * 15 });
    setShine({ x: ((e.clientX - rect.left) / rect.width) * 100, y: ((e.clientY - rect.top) / rect.height) * 100 });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60, rotateX: -20 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ delay: idx * 0.2, duration: 0.8, type: "spring" }}
      style={{ perspective: "1000px" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setShine({ x: 50, y: 50 }); setHovering(false); }}
      className="relative group cursor-pointer"
    >
      <div
        style={{
          transform: hovering ? `translateZ(20px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` : "rotateX(0deg) rotateY(0deg)",
          transition: hovering ? "transform 0.05s ease-out" : "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
          transformStyle: "preserve-3d",
        }}
        className="relative aspect-[3/4] overflow-hidden border border-cyan-500/30 bg-black"
      >
        {/* Main image */}
        <img src={rec.img} alt={rec.title} className="w-full h-full object-cover" />
        
        {/* Holographic iridescent overlay */}
        <div
          style={{
            background: "linear-gradient(105deg, transparent 40%, rgba(255,100,255,0.2) 45%, rgba(100,255,255,0.3) 50%, rgba(255,255,100,0.2) 55%, transparent 60%)",
            backgroundPosition: `${shine.x}% ${shine.y}%`,
            backgroundSize: "200% 200%",
            opacity: hovering ? 1 : 0,
            transition: "opacity 0.3s",
          }}
          className="absolute inset-0 pointer-events-none mix-blend-screen"
        />
        
        {/* Radial light follow */}
        <div
          style={{
            background: `radial-gradient(circle at ${shine.x}% ${shine.y}%, rgba(0,255,255,0.15) 0%, transparent 60%)`,
            opacity: hovering ? 1 : 0,
            transition: "opacity 0.3s",
          }}
          className="absolute inset-0 pointer-events-none"
        />
        
        {/* Scan line */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="scan-line absolute left-0 right-0 h-px bg-cyan-400/60" style={{ animation: "scanline 3s linear infinite", animationDelay: `${idx*1.2}s` }} />
        </div>
        
        {/* Corner brackets */}
        <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-cyan-400 opacity-60" />
        <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-cyan-400 opacity-60" />
        <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-cyan-400 opacity-60" />
        <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-cyan-400 opacity-60" />
        
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        
        {/* Bottom text */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="text-cyan-400 font-mono text-xs mb-1 tracking-widest">{rec.org}</div>
          <div className="text-white font-bold text-xl mb-1">{rec.subtitle}</div>
          <div className="text-cyan-300/70 font-mono text-xs">{rec.stat}</div>
        </div>
      </div>
      
      {/* Badge floating above */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
        <div className="px-4 py-1 bg-black border border-cyan-400 text-cyan-400 font-mono font-bold text-xs tracking-widest whitespace-nowrap shadow-[0_0_20px_rgba(0,255,255,0.5)]">
          {rec.badge}
        </div>
      </div>
    </motion.div>
  );
}

export default function Recognitions() {
  const ref = useRef(null);
  return (
    <div className="max-w-7xl mx-auto px-6 py-12" ref={ref}>
      <div className="mb-20 border-l-2 border-primary pl-4">
        <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight uppercase">AGENT_ACHIEVEMENTS</h2>
        <p className="text-primary font-mono mt-2">SYS.RECOGNITION.VERIFIED</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {recognitions.map((rec, idx) => <HoloCard key={idx} rec={rec} idx={idx} />)}
      </div>
    </div>
  );
}
