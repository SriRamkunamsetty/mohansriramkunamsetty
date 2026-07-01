import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Terminal } from "lucide-react";
import * as THREE from "three";

function OrbitalRings3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const w = container.clientWidth;
    const h = container.clientHeight;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" });
    } catch {
      return;
    }
    if (!renderer.getContext()) { renderer.dispose(); return; }
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 1000);
    camera.position.z = 18;

    const group = new THREE.Group();
    scene.add(group);

    const ringConfigs = [
      { radius: 3, color: 0x00ffff, tilt: 0 },
      { radius: 4.5, color: 0x8b5cf6, tilt: Math.PI / 4 },
      { radius: 6, color: 0x00ffff, tilt: Math.PI / 2.5 },
      { radius: 7.5, color: 0x8b5cf6, tilt: -Math.PI / 6 },
    ];

    ringConfigs.forEach(({ radius, color, tilt }) => {
      const geometry = new THREE.TorusGeometry(radius, 0.06, 16, 100);
      const material = new THREE.MeshStandardMaterial({
        color,
        emissive: new THREE.Color(color),
        emissiveIntensity: 0.7,
      });
      const ring = new THREE.Mesh(geometry, material);
      ring.rotation.x = tilt;
      ring.rotation.z = tilt * 0.5;
      group.add(ring);
    });

    // Add a glowing core sphere
    const coreGeo = new THREE.SphereGeometry(0.4, 32, 32);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x00ffff,
      emissive: new THREE.Color(0x00ffff),
      emissiveIntensity: 2,
    });
    group.add(new THREE.Mesh(coreGeo, coreMat));

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);
    const pLight1 = new THREE.PointLight(0x00ffff, 2, 50);
    pLight1.position.set(5, 5, 5);
    scene.add(pLight1);
    const pLight2 = new THREE.PointLight(0x8b5cf6, 2, 50);
    pLight2.position.set(-5, -5, -5);
    scene.add(pLight2);

    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      group.rotation.x += 0.005;
      group.rotation.y += 0.003;
      group.rotation.z += 0.001;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const nw = container.clientWidth;
      const nh = container.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
}

export default function Connect() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 relative" id="connect">
      <div className="mb-12 inline-block border-b-2 border-primary pb-2 relative z-10 w-full text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight uppercase text-foreground">
          INTERFACE_WITH_AGENT
        </h2>
        <p className="text-primary font-mono mt-2">OPEN_COMMUNICATION_CHANNELS</p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border p-1 rounded-sm text-left w-full md:w-1/2 shadow-2xl relative overflow-hidden group z-10"
        >
          <div className="bg-muted px-4 py-2 flex items-center gap-2 border-b border-border">
            <Terminal className="w-4 h-4 text-muted-foreground" />
            <span className="text-xs font-mono text-muted-foreground">msk_agent_connect.sh</span>
          </div>

          <div className="p-6 font-mono text-sm md:text-base leading-relaxed">
            <div className="text-primary mb-4">$ ping ms_kunamsetty</div>
            <div className="text-muted-foreground mb-6">Pinging 127.0.0.1... Connection established.</div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 hover:bg-white/5 p-2 transition-colors rounded">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <button
                  data-testid="button-copy-email"
                  onClick={() => handleCopy("mohansriramkunamsetty@gmail.com")}
                  className="text-foreground hover:text-primary transition-colors cursor-copy text-left break-all"
                >
                  mohansriramkunamsetty@gmail.com
                </button>
              </div>

              <div className="flex items-center gap-4 hover:bg-white/5 p-2 transition-colors rounded">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <button
                  data-testid="button-copy-phone"
                  onClick={() => handleCopy("+91 6302342821")}
                  className="text-foreground hover:text-primary transition-colors cursor-copy text-left"
                >
                  +91 6302342821
                </button>
              </div>

              <div className="flex items-center gap-4 hover:bg-white/5 p-2 transition-colors rounded">
                <Linkedin className="w-5 h-5 text-secondary flex-shrink-0" />
                <a
                  href="https://www.linkedin.com/in/mohan-sriram-kunamsetty-28a3b336a/"
                  target="_blank"
                  rel="noreferrer"
                  data-testid="link-linkedin"
                  className="text-foreground hover:text-primary transition-colors hover:underline break-all"
                >
                  linkedin.com/in/mohan-sriram-kunamsetty
                </a>
              </div>

              <div className="flex items-center gap-4 hover:bg-white/5 p-2 transition-colors rounded">
                <Github className="w-5 h-5 text-secondary flex-shrink-0" />
                <a
                  href="https://github.com/SriRamkunamsetty"
                  target="_blank"
                  rel="noreferrer"
                  data-testid="link-github"
                  className="text-foreground hover:text-primary transition-colors hover:underline break-all"
                >
                  github.com/SriRamkunamsetty
                </a>
              </div>
            </div>

            <div className="mt-8 text-primary flex items-center gap-2">
              ${" "}
              {copied ? (
                <span className="text-secondary">Address copied to clipboard!</span>
              ) : (
                <span className="animate-pulse">_</span>
              )}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 h-96 relative opacity-80"
        >
          <OrbitalRings3D />
        </motion.div>
      </div>
    </div>
  );
}
