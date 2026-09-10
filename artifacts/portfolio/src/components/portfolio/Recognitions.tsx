import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import ieeeImg from "@assets/ieee_summer_of_code_rank1_1789022952971.jpg";
import amdImg from "@assets/bytexl__qiscollege__amd__aiacademy__aiengage__art_1782913771955.jpg";
import scalerImg from "@assets/ChatGPT_Image_Jul_1,_2026,_12_52_34_PM_1782913771954.png";
import promptwarsGlobalImg from "@assets/promptwars_global_top100_card.jpg";
import jntukImg from "@assets/jntuk_young_entrepreneur_award.jpg";

const recognitions = [
  {
    title: "RANK #1",
    subtitle: "IEEE Summer of Code 2026",
    img: ieeeImg,
    badge: "RANK #1 NATIONAL",
    org: "IEEE National Open-Source Fellowship",
    stat: "Final Round · 1,000+ Devs · 100+ Projects",
    accent: "rgba(234,179,8,1)",
    accentLight: "rgba(234,179,8,0.15)",
    glow: "rgba(234,179,8,0.5)",
  },
  {
    title: "AIR #13",
    subtitle: "AMD AI Engage India",
    img: amdImg,
    badge: "AIR #13 INDIA",
    org: "AMD × ByteXL × QISCET",
    stat: "Top 100 · National Recognition",
    accent: "rgba(0,255,255,1)",
    accentLight: "rgba(0,255,255,0.12)",
    glow: "rgba(0,255,255,0.5)",
  },
  {
    title: "TOP 6",
    subtitle: "Scaler / Google ASCENT PromptWars",
    img: scalerImg,
    badge: "TOP 6 INDIA",
    org: "Scaler + Google",
    stat: "Thousands of Participants · National",
    accent: "rgba(139,92,246,1)",
    accentLight: "rgba(139,92,246,0.12)",
    glow: "rgba(139,92,246,0.5)",
  },
  {
    title: "TOP 100",
    subtitle: "PromptWars Virtual — Google for Devs",
    img: promptwarsGlobalImg,
    badge: "TOP 100 GLOBAL",
    org: "Google for Developers × Hack2Skill",
    stat: "Challenge 3 · 46,000+ Global Participants",
    accent: "rgba(59,130,246,1)",
    accentLight: "rgba(59,130,246,0.12)",
    glow: "rgba(59,130,246,0.5)",
  },
  {
    title: "AWARD",
    subtitle: "Young Entrepreneur Award",
    img: jntukImg,
    badge: "JNTUK RECOGNIZED",
    org: "Jawaharlal Nehru Technological Univ.",
    stat: "Innovation · Leadership · Entrepreneurship",
    accent: "rgba(234,179,8,1)",
    accentLight: "rgba(234,179,8,0.12)",
    glow: "rgba(234,179,8,0.4)",
  },
];

// Duplicate cards for seamless infinite loop
const loopedCards = [...recognitions, ...recognitions, ...recognitions];

function HoloCard3D({ rec }: { rec: typeof recognitions[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [shine, setShine] = useState({ x: 50, y: 50 });
  const [hovering, setHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ x: -dy * 20, y: dx * 20 });
    setShine({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => {
        setTilt({ x: 0, y: 0 });
        setShine({ x: 50, y: 50 });
        setHovering(false);
      }}
      style={{ perspective: "1200px", minWidth: "300px", width: "300px" }}
      className="relative group cursor-pointer shrink-0 py-6"
    >
      {/* Badge */}
      <div
        className="absolute top-2 left-1/2 -translate-x-1/2 z-30 px-4 py-1.5 font-mono font-bold text-xs tracking-widest whitespace-nowrap"
        style={{
          background: "rgba(0,0,0,0.9)",
          border: `1.5px solid ${rec.accent}`,
          color: rec.accent,
          boxShadow: `0 0 18px ${rec.glow}`,
        }}
      >
        {rec.badge}
      </div>

      {/* Main 3D card */}
      <div
        style={{
          transform: hovering
            ? `translateZ(30px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.04)`
            : "rotateX(0deg) rotateY(0deg) scale(1)",
          transition: hovering
            ? "transform 0.06s ease-out"
            : "transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)",
          transformStyle: "preserve-3d",
          boxShadow: hovering
            ? `0 30px 80px rgba(0,0,0,0.7), 0 0 40px ${rec.glow}`
            : `0 10px 40px rgba(0,0,0,0.5), 0 0 10px ${rec.accentLight}`,
        }}
        className="relative overflow-hidden bg-black"
        // 3:4 aspect ratio → 300px wide → 400px tall
        // Using fixed height for consistency
      >
        {/* Image */}
        <div className="relative w-full" style={{ height: "400px" }}>
          <img
            src={rec.img}
            alt={rec.title}
            className="w-full h-full object-cover"
            style={{
              filter: hovering ? "brightness(1.1) saturate(1.2)" : "brightness(0.85) saturate(0.9)",
              transition: "filter 0.4s",
            }}
          />

          {/* Holographic rainbow sweep */}
          <div
            style={{
              background:
                "linear-gradient(105deg, transparent 35%, rgba(255,100,255,0.25) 42%, rgba(100,255,255,0.35) 50%, rgba(255,255,100,0.25) 58%, transparent 65%)",
              backgroundPosition: `${shine.x}% ${shine.y}%`,
              backgroundSize: "300% 300%",
              opacity: hovering ? 1 : 0,
              transition: "opacity 0.3s",
            }}
            className="absolute inset-0 pointer-events-none mix-blend-screen"
          />

          {/* Radial glow follows cursor */}
          <div
            style={{
              background: `radial-gradient(ellipse at ${shine.x}% ${shine.y}%, ${rec.accentLight.replace("0.12", "0.25")} 0%, transparent 65%)`,
              opacity: hovering ? 1 : 0,
              transition: "opacity 0.3s",
            }}
            className="absolute inset-0 pointer-events-none"
          />

          {/* Scanline */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              className="absolute left-0 right-0 h-[2px] opacity-60"
              style={{
                background: rec.accent,
                animation: "scanline 3s linear infinite",
                boxShadow: `0 0 8px ${rec.glow}`,
              }}
            />
          </div>

          {/* Corner brackets */}
          {[
            "top-3 left-3 border-t-2 border-l-2",
            "top-3 right-3 border-t-2 border-r-2",
            "bottom-3 left-3 border-b-2 border-l-2",
            "bottom-3 right-3 border-b-2 border-r-2",
          ].map((pos, i) => (
            <div
              key={i}
              className={`absolute w-6 h-6 ${pos}`}
              style={{ borderColor: rec.accent, opacity: hovering ? 1 : 0.5, transition: "opacity 0.3s" }}
            />
          ))}

          {/* Bottom gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          {/* Info block */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            {/* Title big accent */}
            <div
              className="font-black font-mono text-3xl leading-none mb-1"
              style={{ color: rec.accent, textShadow: `0 0 20px ${rec.glow}` }}
            >
              {rec.title}
            </div>
            <div className="text-white font-bold text-base leading-tight mb-1">{rec.subtitle}</div>
            <div
              className="font-mono text-[11px] tracking-wide mb-2"
              style={{ color: rec.accent, opacity: 0.75 }}
            >
              {rec.org}
            </div>
            <div className="font-mono text-[10px] text-white/50">{rec.stat}</div>
          </div>

          {/* 3D depth bottom edge */}
          <div
            style={{
              background: `linear-gradient(to top, ${rec.accentLight} 0%, transparent 100%)`,
              height: "4px",
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
            }}
          />
        </div>
      </div>

      {/* Ground reflection */}
      <div
        style={{
          background: `linear-gradient(to bottom, ${rec.accentLight}, transparent)`,
          height: "40px",
          opacity: hovering ? 0.6 : 0.2,
          transition: "opacity 0.4s",
          transform: "scaleY(-1)",
          filter: "blur(6px)",
          marginTop: "-2px",
        }}
      />
    </div>
  );
}

export default function Recognitions() {
  const [paused, setPaused] = useState(false);

  return (
    <div className="py-12 overflow-hidden">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="border-l-2 border-primary pl-4">
          <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight uppercase text-foreground">
            AGENT_ACHIEVEMENTS
          </h2>
          <p className="text-primary font-mono mt-2">SYS.RECOGNITION.VERIFIED</p>
        </div>
      </div>

      {/* IEEE #1 Hero Banner */}
      <div className="max-w-7xl mx-auto px-6 mb-14">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden border-2 border-yellow-400/60 bg-gradient-to-r from-yellow-900/20 via-yellow-800/10 to-black p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 shadow-[0_0_50px_rgba(234,179,8,0.25)]"
        >
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="scan-line absolute left-0 right-0 h-px bg-yellow-400/40" style={{ animation: "scanline 4s linear infinite" }} />
          </div>
          <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-yellow-400/70" />
          <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-yellow-400/70" />
          <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-yellow-400/70" />
          <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-yellow-400/70" />
          <div className="text-7xl md:text-9xl font-black font-mono text-yellow-400 leading-none drop-shadow-[0_0_30px_rgba(234,179,8,0.9)] shrink-0">
            #1
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="text-yellow-400 font-mono text-xs tracking-widest mb-1 uppercase">
              IEEE National Open-Source Fellowship
            </div>
            <div className="text-white font-bold text-2xl md:text-4xl mb-2">IEEE Summer of Code 2026</div>
            <div className="text-yellow-300/80 font-mono text-sm mb-4">
              RANK #1 · SELECTED IN FINAL ROUND · NATIONAL
            </div>
            <div className="flex flex-wrap gap-6 justify-center md:justify-start text-sm font-mono text-yellow-400/80">
              <span>🏆 100+ PROJECTS</span>
              <span>👥 1,000+ DEVELOPERS</span>
              <span>⏱ 12 WEEKS OF IMPACT</span>
              <span>🌍 REAL-WORLD CONTRIBUTION</span>
            </div>
          </div>
          <div className="text-right shrink-0">
            <div className="font-mono text-xs text-yellow-400/60 mb-1">SILENT WORK.</div>
            <div className="font-bold text-yellow-400 text-xl">GLOBAL RECOGNITION.</div>
          </div>
        </motion.div>
      </div>

      {/* ── Infinite Marquee ── */}
      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Left fade mask */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />
        {/* Right fade mask */}
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />

        <div
          className="flex gap-8 px-8"
          style={{
            animation: `marquee-rtl 30s linear infinite`,
            animationPlayState: paused ? "paused" : "running",
            width: "max-content",
          }}
        >
          {loopedCards.map((rec, idx) => (
            <HoloCard3D key={idx} rec={rec} />
          ))}
        </div>
      </div>

      {/* Marquee keyframe injected inline */}
      <style>{`
        @keyframes marquee-rtl {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-300px * ${recognitions.length} - ${recognitions.length * 32}px)); }
        }
      `}</style>
    </div>
  );
}
