import { useState, useEffect } from "react";
import LoadingScreen from "@/components/portfolio/LoadingScreen";
import Hero from "@/components/portfolio/Hero";
import Capabilities from "@/components/portfolio/Capabilities";
import MissionLog from "@/components/portfolio/MissionLog";
import Recognitions from "@/components/portfolio/Recognitions";
import DeploymentLog from "@/components/portfolio/DeploymentLog";
import Credentials from "@/components/portfolio/Credentials";
import Connect from "@/components/portfolio/Connect";
import Navigation from "@/components/portfolio/Navigation";
import MagneticCursor from "@/components/portfolio/MagneticCursor";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Add dark mode by default
    document.documentElement.classList.add("dark");
  }, []);

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="relative min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 selection:text-primary overflow-x-hidden">
      <MagneticCursor />
      <Navigation />
      
      <main className="flex flex-col gap-24 pb-24 relative z-10">
        <section id="hero">
          <Hero />
        </section>

        <section id="capabilities" className="scroll-mt-20">
          <Capabilities />
        </section>

        <section id="missions" className="scroll-mt-20">
          <MissionLog />
        </section>

        <section id="recognitions" className="scroll-mt-20">
          <Recognitions />
        </section>

        <section id="deployment" className="scroll-mt-20">
          <DeploymentLog />
        </section>

        <section id="credentials" className="scroll-mt-20">
          <Credentials />
        </section>

        <section id="connect" className="scroll-mt-20">
          <Connect />
        </section>
      </main>
    </div>
  );
}
