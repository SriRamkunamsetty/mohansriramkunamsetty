import { motion } from "framer-motion";

const timeline = [
  {
    role: "GeeksforGeeks Campus Mantri",
    period: "June 2026 – Present",
    desc: "Official liaison between GeeksforGeeks and the student community; organize technical events and drive platform engagement campus-wide at QISCET."
  },
  {
    role: "HackerRank Campus Crew Member",
    period: "Aug 2026 – Present",
    desc: "Selected after a competitive interview round to lead coding-community initiatives and spread HackerRank's mission across QISCET campus."
  },
  {
    role: "Google Student Ambassador",
    period: "QIS College",
    desc: "Facilitating Google developer programs on campus, producing outreach content and driving student participation in Google learning initiatives."
  },
  {
    role: "Co-Founder — SITA 2.0 & PetPulse SmartCare",
    period: "MeitY GENESIS PILOT Incubated",
    desc: "Co-founded two government-incubated AI ventures: SITA 2.0 (patent-filed AI traffic surveillance) and PetPulse SmartCare (AI-powered IoT smart pet feeder), under MeitY Startup Hub GENESIS PILOT."
  },
  {
    role: "Infosys Springboard Virtual Internship 7.0",
    period: "May 2026 – Present",
    desc: "Selected for prestigious technical development program; ongoing structured curriculum."
  },
  {
    role: "EduSkills / AICTE — Ethical Hacking",
    period: "Jun – Aug 2026 (Completed)",
    desc: "8-week cybersecurity program covering Kali Linux, penetration testing methodology, social engineering defense, malware analysis, and web vulnerability assessment."
  },
  {
    role: "EduSkills / AICTE — DevOps & Cloud Automation",
    period: "Apr – Jun 2026 (Completed)",
    desc: "10-week curriculum: Docker, Kubernetes, Terraform, Ansible, CI/CD with GitHub Actions, culminating in a capstone microservice deployment."
  },
  {
    role: "SkillDzire / AICTE — Web Development & Cloud",
    period: "May – Jun 2026 (Completed)",
    desc: "AICTE-affiliated internship covering web development and cloud integration fundamentals."
  },
  {
    role: "VedUpskilling — AI with Python",
    period: "Dec 2025 – Feb 2026",
    desc: "AI/Python training and internship with hands-on project work; Letter of Recommendation received."
  }
];

export default function DeploymentLog() {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="mb-12 border-l-2 border-primary pl-4 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight uppercase text-foreground">
          DEPLOYMENT_LOG
        </h2>
        <p className="text-primary font-mono mt-2">EXPERIENCE_AND_LEADERSHIP_HISTORY</p>
      </div>

      <div className="relative border-l-2 border-border/50 ml-4 md:ml-0">
        {timeline.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: idx * 0.1 }}
            className="mb-10 pl-8 relative group"
          >
            {/* Timeline dot */}
            <div className="absolute w-4 h-4 bg-background border-2 border-primary rounded-full -left-[9px] top-1 group-hover:bg-primary transition-colors group-hover:shadow-[0_0_10px_rgba(0,255,255,0.8)]" />
            
            {/* Scanline hover effect */}
            <div className="absolute inset-0 bg-primary/5 w-full h-[2px] -z-10 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 mt-2" />

            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors font-sans">
                {item.role}
              </h3>
              <span className="text-sm font-mono text-muted-foreground mt-1 md:mt-0 bg-primary/10 px-2 py-1 border border-primary/20 inline-block w-max">
                {item.period}
              </span>
            </div>
            
            <p className="text-muted-foreground font-mono text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
