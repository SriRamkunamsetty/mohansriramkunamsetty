import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Terminal } from "lucide-react";

export default function Connect() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 text-center">
      <div className="mb-12 inline-block border-b-2 border-primary pb-2">
        <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight uppercase text-foreground text-center">
          INTERFACE_WITH_AGENT
        </h2>
        <p className="text-primary font-mono mt-2">OPEN_COMMUNICATION_CHANNELS</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-card border border-border p-1 rounded-sm text-left max-w-2xl mx-auto shadow-2xl relative overflow-hidden group"
      >
        {/* Terminal Header */}
        <div className="bg-muted px-4 py-2 flex items-center gap-2 border-b border-border">
          <Terminal className="w-4 h-4 text-muted-foreground" />
          <span className="text-xs font-mono text-muted-foreground">msk_agent_connect.sh</span>
        </div>

        {/* Terminal Body */}
        <div className="p-6 font-mono text-sm md:text-base leading-relaxed">
          <div className="text-primary mb-4">$ ping ms_kunamsetty</div>
          <div className="text-muted-foreground mb-6">Pinging 127.0.0.1... Connection established.</div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 hover:bg-white/5 p-2 transition-colors rounded">
              <Mail className="w-5 h-5 text-secondary" />
              <button 
                onClick={() => handleCopy("mohansriramkunamsetty@gmail.com")}
                className="text-foreground hover:text-primary transition-colors cursor-copy text-left break-all"
              >
                mohansriramkunamsetty@gmail.com
              </button>
            </div>
            
            <div className="flex items-center gap-4 hover:bg-white/5 p-2 transition-colors rounded">
              <Phone className="w-5 h-5 text-secondary" />
              <button 
                onClick={() => handleCopy("+91 6302342821")}
                className="text-foreground hover:text-primary transition-colors cursor-copy text-left"
              >
                +91 6302342821
              </button>
            </div>
            
            <div className="flex items-center gap-4 hover:bg-white/5 p-2 transition-colors rounded">
              <Linkedin className="w-5 h-5 text-secondary" />
              <a 
                href="https://www.linkedin.com/in/mohan-sriram-kunamsetty-28a3b336a/"
                target="_blank"
                rel="noreferrer"
                className="text-foreground hover:text-primary transition-colors hover:underline break-all"
              >
                linkedin.com/in/mohan-sriram-kunamsetty
              </a>
            </div>
            
            <div className="flex items-center gap-4 hover:bg-white/5 p-2 transition-colors rounded">
              <Github className="w-5 h-5 text-secondary" />
              <a 
                href="https://github.com/SriRamkunamsetty"
                target="_blank"
                rel="noreferrer"
                className="text-foreground hover:text-primary transition-colors hover:underline break-all"
              >
                github.com/SriRamkunamsetty
              </a>
            </div>
          </div>

          <div className="mt-8 text-primary flex items-center gap-2">
            $ {copied ? <span className="text-secondary">Address copied to clipboard!</span> : <span className="animate-pulse">_</span>}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
