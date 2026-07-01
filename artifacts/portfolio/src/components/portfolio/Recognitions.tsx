import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import amdImg from "@assets/bytexl__qiscollege__amd__aiacademy__aiengage__art_1782913771955.jpg";
import scalerImg from "@assets/ChatGPT_Image_Jul_1,_2026,_12_52_34_PM_1782913771954.png";
import gfgImg from "@assets/ChatGPT_Image_Jul_1,_2026,_12_39_49_PM_1782913771956.png";

const recognitions = [
  {
    title: "AIR 13 - India AMD AI Engage",
    img: amdImg,
    description: "Secured All India Rank 13 in the AMD AI Engage initiative. Recognized for exceptional AI capabilities."
  },
  {
    title: "Top 6 - Scaler/Google ASCENT",
    img: scalerImg,
    description: "Ranked among the Top 6 in India in the Google ASCENT program by Scaler."
  },
  {
    title: "Campus Mantri - GeeksforGeeks",
    img: gfgImg,
    description: "Selected as GeeksforGeeks Campus Mantri, leading technical communities and events."
  }
];

export default function Recognitions() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12" ref={containerRef}>
      <div className="mb-16 border-l-2 border-primary pl-4">
        <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight uppercase text-foreground">
          AGENT_ACHIEVEMENTS
        </h2>
        <p className="text-primary font-mono mt-2">SYS.RECOGNITION.VERIFIED</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {recognitions.map((rec, idx) => (
          <motion.div
            key={idx}
            style={{ y: idx % 2 === 0 ? y1 : y2 }}
            className="group relative aspect-[3/4] bg-card border border-border overflow-hidden"
          >
            <img 
              src={rec.img} 
              alt={rec.title} 
              className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="w-8 h-1 bg-primary mb-4" />
              <h3 className="text-xl font-bold font-sans text-foreground mb-2 group-hover:text-primary transition-colors">
                {rec.title}
              </h3>
              <p className="text-sm font-mono text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {rec.description}
              </p>
            </div>
            
            {/* Glowing border effect */}
            <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 transition-colors duration-500 pointer-events-none shadow-[inset_0_0_20px_rgba(0,255,255,0)] group-hover:shadow-[inset_0_0_20px_rgba(0,255,255,0.2)]" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
