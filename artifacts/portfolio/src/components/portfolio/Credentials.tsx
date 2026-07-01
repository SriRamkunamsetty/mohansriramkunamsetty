import { motion } from "framer-motion";
import { ShieldCheck, Award, BookOpen } from "lucide-react";

const certs = [
  "Certified LLM Security Professional (CLLMSP) — June 2026",
  "AI Engineer for Data Scientists Associate, DataCamp",
  "AI Engineer for Developers Associate, DataCamp",
  "Google AI Essentials & Prompting Essentials (9 courses)",
  "AMD AI Academy — 15+ courses (RAG, Triton, vLLM, etc.)",
  "AWS Fundamentals of Machine Learning and AI",
  "Deloitte Cyber Job Simulation (Forage)",
  "Anthropic — Introduction to Agent Skills"
];

export default function Credentials() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-12 border-l-2 border-primary pl-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight uppercase text-foreground">
            AGENT_CREDENTIALS
          </h2>
          <p className="text-primary font-mono mt-2">SYS.CERTIFICATIONS.VALIDATED</p>
        </div>
        <ShieldCheck className="text-primary w-12 h-12 opacity-50" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {certs.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.05 }}
            className="group p-4 border border-border bg-card/50 hover:bg-card hover:border-primary/50 transition-all flex flex-col items-center text-center gap-3 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            {idx === 0 || idx === 6 ? (
              <ShieldCheck className="w-8 h-8 text-secondary group-hover:text-primary transition-colors" />
            ) : idx === 1 || idx === 2 ? (
              <Award className="w-8 h-8 text-secondary group-hover:text-primary transition-colors" />
            ) : (
              <BookOpen className="w-8 h-8 text-secondary group-hover:text-primary transition-colors" />
            )}
            
            <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors">
              {cert}
            </span>
            
            <div className="w-full h-1 bg-border mt-auto group-hover:bg-primary/50 transition-colors" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
