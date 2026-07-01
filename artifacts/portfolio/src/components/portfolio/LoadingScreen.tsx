import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

const lines = [
  "INITIALIZING MOHAN_SRIRAM_AI_v2.0...",
  "LOADING NEURAL MODULES... 87%",
  "MOUNTING AGENTIC SYSTEMS...",
  "READY."
];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    let currentLine = 0;
    
    const interval = setInterval(() => {
      if (currentLine < lines.length) {
        setDisplayedLines(prev => [...prev, lines[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsFading(true);
          setTimeout(onComplete, 500);
        }, 800);
      }
    }, 600);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black font-mono text-primary p-6"
        >
          <div className="w-full max-w-2xl">
            {displayedLines.map((line, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-2 text-sm sm:text-base md:text-lg"
              >
                {"> "}
                <span className="typing-effect">{line}</span>
              </motion.div>
            ))}
            <motion.div
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-3 h-5 bg-primary ml-2 mt-1 align-middle"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
