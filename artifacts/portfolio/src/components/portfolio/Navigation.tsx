import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logoImg from "@assets/portrait_logo_1789025194371.jpg";

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
        {/* Logo: portrait photo + name */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 shrink-0">
            {/* Animated cyan ring */}
            <div className="absolute inset-0 rounded-full border-2 border-primary animate-[spin_6s_linear_infinite] border-t-transparent opacity-70" />
            <div className="absolute inset-[3px] rounded-full overflow-hidden border border-primary/40 shadow-[0_0_12px_rgba(0,255,255,0.4)]">
              <img
                src={logoImg}
                alt="Mohan Sriram Kunamsetty"
                className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-mono font-bold text-primary text-sm tracking-tight">MSK_AGENT</span>
            <span className="font-mono text-[10px] text-muted-foreground tracking-widest">MOHAN SRIRAM</span>
          </div>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
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
