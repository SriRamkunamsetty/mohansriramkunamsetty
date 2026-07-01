import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Terminal } from "lucide-react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "About", href: "#hero" },
    { name: "Skills", href: "#capabilities" },
    { name: "Projects", href: "#missions" },
    { name: "Achievements", href: "#recognitions" },
    { name: "Experience", href: "#deployment" },
    { name: "Contact", href: "#connect" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 text-primary font-mono font-bold tracking-tighter">
          <Terminal className="w-5 h-5" />
          <span>MSK_AGENT</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors hover:glow-text"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#"
            className="px-4 py-2 text-sm font-mono border border-primary text-primary hover:bg-primary hover:text-background transition-all"
          >
            [ DOWNLOAD_RESUME ]
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
