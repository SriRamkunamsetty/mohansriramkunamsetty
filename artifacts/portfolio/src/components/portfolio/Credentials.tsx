import { motion } from "framer-motion";
import { ShieldCheck, Award, BookOpen } from "lucide-react";

const certs = [
  "Oracle Certified Agentic AI Foundations Associate — Oracle University (Jul 2026)",
  "Certified LLM Security Professional (CLLMSP) — Red Team Leaders (Jun 2026)",
  "Google Cloud Gen AI Academy APAC 2026 — Google Cloud × Hack2Skill (Jul 2026)",
  "AI Engineer for Developers Associate — DataCamp (Jun 2026)",
  "AI Engineer for Data Scientists Associate — DataCamp (May 2026)",
  "Google AI Essentials & Prompting Essentials — 9 courses, Coursera (May 2026)",
  "AMD AI Academy — 15+ courses: RAG, Triton, vLLM/MI300X, Kubernetes on AMD GPUs",
  "AWS Fundamentals of Machine Learning and AI — Amazon (Nov 2025)",
  "Career Essentials in GitHub Professional Certificate — LinkedIn/GitHub (Nov 2025)",
  "Deloitte Cyber Job Simulation — Forage (Oct 2025)",
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
          <p className="text-primary font-mono mt-2">SYS.CERTIFICATIONS.VALIDATED — 50+ TOTAL</p>
        </div>
        <ShieldCheck className="text-primary w-12 h-12 opacity-50" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
            
            {idx === 0 ? (
              <Award className="w-8 h-8 text-yellow-400 group-hover:text-primary transition-colors" />
            ) : idx === 1 || idx === 7 ? (
              <ShieldCheck className="w-8 h-8 text-secondary group-hover:text-primary transition-colors" />
            ) : idx === 2 ? (
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
