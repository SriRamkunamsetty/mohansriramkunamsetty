import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TerminalSquare, ChevronRight, X } from "lucide-react";

const missions = [
  {
    id: "M01",
    title: "SITA 2.0 — AI Civic Traffic Intelligence",
    status: "PATENT PENDING | IEEE PUBLISHED",
    tech: "YOLOv8, ByteTrack, EasyOCR, Docker, React",
    description: "Real-time traffic intelligence platform. Dockerized event-driven backend with a React dashboard. Co-authored IEEE publication. Patent currently under review with the Indian Patent Office."
  },
  {
    id: "M02",
    title: "PromptIQ — LLM Token & Cost Optimization",
    status: "DEPLOYED",
    tech: "TypeScript, React, Google GenAI",
    description: "Production tool for prompt compression, redundant-context removal, and token analytics. Integrates with Google GenAI workflows. Scaled to a 233-file production frontend."
  },
  {
    id: "M03",
    title: "RAKSHAK v4 — Cyber Defense Platform",
    status: "ET AI HACKATHON 2026",
    tech: "MITRE ATT&CK, UEBA, SOAR, AWS S3, GCP",
    description: "Behavioral analytics and SOAR-style playbooks mapped to the MITRE ATT&CK engine. Qualified for Round 2 of ET AI Hackathon 2026."
  },
  {
    id: "M04",
    title: "Samvaad AI — Gemini Sales Intelligence",
    status: "COMPLETED",
    tech: "Gemini API, Firebase, Supabase",
    description: "Sales intelligence agent featuring adaptive persuasion scoring. Over 120+ source files in the production repository."
  },
  {
    id: "M05",
    title: "Vana AI — Offline Survival Intelligence",
    status: "MOBILE DEPLOYED",
    tech: "Android/Kotlin, Gemma Local",
    description: "Offline-first survival intelligence app using on-device Gemma reasoning. Sensor-aware operation without internet dependency."
  },
  {
    id: "M06",
    title: "JusticeTrack — Court Action Plan",
    status: "KARNATAKA GOV HACKATHON",
    tech: "React, TypeScript",
    description: "Role-based workflows to streamline court-to-government action plans. Developed during the Karnataka Government Hackathon 2026."
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
