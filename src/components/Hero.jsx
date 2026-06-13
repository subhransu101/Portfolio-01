import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-hero-pattern bg-cover bg-no-repeat bg-center overflow-hidden">
      
      {/* 1. BACKGROUND DESIGN ARCHITECTURE (Fills the blank space with ambient depth) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        
        {/* Deep Abstract Radial Glow - Right Side */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-[10%] right-[-10%] md:right-[-5%] w-[450px] md:w-[650px] h-[450px] md:h-[650px] rounded-full bg-[#915EFF]/10 blur-[120px] md:blur-[150px]" 
        />
        
        {/* Secondary Secondary Cool-Tone Balance Glow - Lower Right Field */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.5, duration: 1.2 }}
          className="absolute bottom-[15%] right-[10%] md:right-[20%] w-[300px] md:w-[450px] h-[300px] md:h-[450px] rounded-full bg-blue-500/5 blur-[90px] md:blur-[120px]" 
        />

        {/* Technical Vector Grid Overlay (Subtle structural texture across the canvas) */}
        <div 
          className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      {/* 2. FOREGROUND TYPOGRAPHY CANVAS */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10`}
      >
        {/* Left Side: Visual Accent Line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Main Left-Aligned Text Engine */}
        <div className="flex flex-col justify-center mt-5 w-full">
          {/* Main Headline Block */}
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`${styles.heroHeadText} text-white`}
          >
            Hi, I'm{" "}
            <span className="text-[#915EFF] block sm:inline xl:whitespace-nowrap tracking-tight">
              Sudhansu Sekhar Choudhury
            </span>
          </motion.h1>
          
          {/* Subtext Paragraph */}
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className={`${styles.heroSubText} mt-4 text-white-100 max-w-xl leading-relaxed`}
          >
            I bridge the gap between business strategy, engineering, and design
            to ship high-impact digital products.
          </motion.p>
          
          {/* Main CTA Anchor */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="mt-8 flex flex-row flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="inline-block bg-[#915EFF] text-white font-bold py-3.5 px-8 rounded-xl hover:bg-opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-[#915EFF]/10 pointer-events-auto text-center"
            >
              View Case Studies
            </a>
            <a
              href="https://drive.google.com/drive/u/0/folders/1iTt0aa7nmQ3qo8qCpTrpTcMKfVb4BEjU"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-transparent border-2 border-[#915EFF] text-white font-bold py-3.5 px-8 rounded-xl hover:bg-[#915EFF]/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 pointer-events-auto text-center"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>

      {/* Edge Bleed Dark Gradient Mask */}
      <div className="absolute inset-0 z-[-1] bg-gradient-to-b from-transparent via-primary/50 to-primary" />

      {/* Scroll Indicator */}
      <div className="absolute xs:bottom-10 bottom-24 sm:bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 hover:border-[#915EFF] transition-colors duration-300">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;