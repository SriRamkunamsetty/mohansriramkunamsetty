import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TerminalSquare, ChevronRight, X } from "lucide-react";

const missions = [
  {
    id: "M01",
    title: "SITA 2.0 — AI Civic Traffic Intelligence",
    status: "PATENT FILED | IEEE PUBLISHED",
    tech: "YOLOv8, ByteTrack, EasyOCR, Docker, React",
    description: "Real-time traffic-intelligence platform with YOLOv8 detection, ByteTrack multi-object tracking, and EasyOCR license-plate recognition across Dockerized event-driven microservices with a live React dashboard. 5-phase security audit conducted. Indian patent filed, IEEE publication co-authored. MeitY GENESIS PILOT-incubated."
  },
  {
    id: "M02",
    title: "RAKSHAK v6 — AI Cybersecurity Intelligence",
    status: "INDIA AI IMPACT FESTIVAL 2026",
    tech: "MITRE ATT&CK, GNN/PyTorch, UEBA, RAG, SOAR, NVD CVE",
    description: "Defense-oriented SOC platform with MITRE ATT&CK mapping (700+ techniques), GNN threat graphs (PyTorch), UEBA behavioral analytics, RAG-based threat intel, SOAR playbooks, and a SHA-256 hash-chained audit ledger. Live NVD CVE feed, IsolationForest/FFT beaconing detection, and 5-agent SOC orchestration. Submitted to India AI Impact Festival 2026 & ET AI Hackathon 2026."
  },
  {
    id: "M03",
    title: "CampusOS — Multi-Agent Campus Operations",
    status: "byteXL AGENT FORGE | AMD MI300X TRACK",
    tech: "Ollama Llama 3.1:8B, LangChain RAG, SQLite WAL, APScheduler, pytest",
    description: "Four-agent autonomous backend (canteen, timetable, hostel grievance, security/curfew) with Ollama Llama 3.1:8B, LangChain RAG, SQLite WAL for high concurrency, APScheduler SLA escalation. Backed by a 51-test pytest suite and CI pipeline. Submitted to byteXL Agent Forge Hackathon, AMD MI300X Track."
  },
  {
    id: "M04",
    title: "PromptIQ — LLM Token & Cost Optimization",
    status: "DEPLOYED | 230+ SOURCE FILES",
    tech: "TypeScript, React, Google GenAI SDK",
    description: "Production tool for prompt compression, redundant-context removal, and token analytics integrated with Google GenAI SDK. Scaled to a 230+ file production frontend with Radix UI and Tailwind CSS."
  },
  {
    id: "M05",
    title: "PetPulse SmartCare — AI IoT Smart Pet Feeder",
    status: "PROVISIONAL PATENT FILED | MeitY INCUBATED",
    tech: "ESP32, Flutter, Firebase, FastAPI, Next.js, React Three Fiber",
    description: "IoT smart-feeding system with real-time telemetry, QR device pairing, biometric access lock, and a full Next.js/React Three Fiber marketing site. Provisional patent filed. MeitY GENESIS PILOT-incubated venture."
  },
  {
    id: "M06",
    title: "LEXGUARD — AI Contract & Legal Risk System",
    status: "CLOUD RUN DEPLOYED",
    tech: "Gemini API, Cloud Run, Multi-Agent, Google Cloud",
    description: "Adversarial multi-agent system analyzing contracts and policy documents to surface exploitative clauses and legal risk. Deployed on Cloud Run with Gemini-based agent reasoning."
  },
  {
    id: "M07",
    title: "Samvaad AI — Gemini Sales Intelligence",
    status: "500+ PROMPT GENERATIONS | <2s LATENCY",
    tech: "Gemini API, Firebase, Supabase, React",
    description: "AI sales platform supporting 500+ prompt generations with sub-2-second response latency using the Gemini API for personalized, explainable persuasion-driven messaging. 120+ source files."
  },
  {
    id: "M08",
    title: "Vana AI — Offline Survival Intelligence",
    status: "MOBILE DEPLOYED",
    tech: "Android/Kotlin, Gemma Local, Jetpack",
    description: "Offline-first survival intelligence app using on-device Gemma reasoning. Sensor-aware operation without internet dependency. 36 source files with dedicated test coverage."
  }
];

export default function MissionLog() {
  const [selectedMission, setSelectedMission] = useState<string | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-12 border-l-2 border-primary pl-4">
        <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight uppercase text-foreground">
          FLAGSHIP_MISSIONS
        </h2>
        <p className="text-primary font-mono mt-2">AGENT.TASKS.DISPATCHED</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {missions.map((mission, idx) => (
          <motion.div
            key={mission.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ scale: 1.02, rotate: 1 }}
            onClick={() => setSelectedMission(mission.id)}
            className="cursor-pointer bg-card border border-border p-6 relative overflow-hidden group shadow-lg"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-primary transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
            
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2 text-muted-foreground font-mono text-sm">
                <TerminalSquare className="w-4 h-4" />
                MISSION_ID: {mission.id}
              </div>
              <div className="text-[10px] font-mono px-2 py-1 bg-primary/10 text-primary border border-primary/30 uppercase">
                {mission.status}
              </div>
            </div>
            
            <h3 className="text-xl font-bold font-sans text-foreground mb-2 group-hover:text-primary transition-colors">
              {mission.title}
            </h3>
            
            <p className="text-sm font-mono text-muted-foreground truncate mb-4">
              TECH: {mission.tech}
            </p>
            
            <div className="flex items-center text-primary font-mono text-xs font-bold gap-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
              EXPAND_DETAILS <ChevronRight className="w-3 h-3" />
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedMission && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedMission(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border-2 border-primary max-w-2xl w-full p-6 md:p-8 relative shadow-[0_0_50px_rgba(0,255,255,0.15)]"
            >
              <button 
                onClick={() => setSelectedMission(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-primary transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              {missions.filter(m => m.id === selectedMission).map(mission => (
                <div key={mission.id}>
                  <div className="text-primary font-mono mb-2">MISSION_DETAILS // {mission.id}</div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{mission.title}</h3>
                  <div className="inline-block px-3 py-1 bg-primary/20 text-primary font-mono text-sm border border-primary/50 mb-6">
                    STATUS: {mission.status}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6 font-mono">
                    {mission.description}
                  </p>
                  <div className="border-t border-border pt-4">
                    <span className="text-xs text-muted-foreground font-mono block mb-2">TECHNOLOGY_STACK:</span>
                    <span className="text-foreground font-mono">{mission.tech}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
