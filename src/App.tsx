import { motion } from "motion/react"
import './App.scss'
import klogo from '../public/k-logo.svg'
import { BiLogoTypescript } from 'react-icons/bi'
import { RiJavascriptFill, RiLinkedinFill } from "react-icons/ri"
import { FaBootstrap, FaCodepen, FaCss3, FaGithub, FaNode, FaReact, FaSass } from "react-icons/fa"
import { SiChakraui, SiNextdotjs, SiRadixui, SiTailwindcss, SiVite } from "react-icons/si"
import { IoLogoHtml5 } from "react-icons/io"
import { GiHammerNails } from "react-icons/gi"
import { trackGAEvent } from "./utils/ga"
import { useCallback, useRef } from "react"
import { useTheme } from "./hooks/useTheme"
import { LuLightbulb, LuLightbulbOff } from "react-icons/lu"

function App() {

  const {theme, toggleTheme} = useTheme();

  console.log(theme);

  // GA Tracking
  const linkClickTracker = (label:string) => {
    trackGAEvent("click", { category: "link", action: "click", label })
  }  

  // Refs
  const targetRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  
  // To move the K logo around
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      if (!targetRef.current || !imgRef.current) return;
      const targetRect = targetRef.current.getBoundingClientRect();
      // Find center of the target container
      const centerX = targetRect.left + targetRect.width / 2;  
      // Pointer position
      const mouseX = e.clientX;
      // Calculate how much to move
      const moveX = Math.round((mouseX - centerX)) / 5;  
      // Update Image, using ref to avoid re-render
      imgRef.current.style.transform = `translate3d(${moveX}px, 0, 0)`;
    },
    []
  );

  return (
    <>
      <main>       
        <h1>Hi, I'm Kaue! <span className="emoji">👋</span></h1>

        <p>I'm a Toronto based <strong>software engineer</strong> who loves creating wonderful things with code — and sometimes wood.</p>  
        <p>Thanks for stopping by! I'm currently working on this website, but until it's done, you can learn more about me through the links below:</p>

        <div className="social-icons"
          ref={targetRef}
          onMouseLeave={() => { if(imgRef.current) imgRef.current.style.transform = "translate3d(0, 0, 0)"} }
          onMouseMove={e => handleMouseMove(e)}        
        >
          <motion.a 
            onClick={() => linkClickTracker("LinkedIn")}            
            whileHover={{ scale: 1.15 }} 
            whileTap={{ scale: 0.95 }} 
            href="https://www.linkedin.com/in/kauecorrea/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Visit my LinkedIn profile"
          >
            <RiLinkedinFill size={40} />
          </motion.a>

          <motion.a 
            onClick={() => linkClickTracker("GitHub")}
            whileHover={{ scale: 1.15 }} 
            whileTap={{ scale: 0.95 }} 
            href="https://github.com/KaueCode" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Visit my GitHub profile"
          >
            <FaGithub size={40} />
          </motion.a>

          <motion.a 
            onClick={() => linkClickTracker("CodePen")}             
            whileHover={{ scale: 1.15 }} 
            whileTap={{ scale: 0.95 }} 
            href="https://codepen.io/KaueCode" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Visit my CodePen profile"
          >
            <FaCodepen size={40} />
          </motion.a>
        </div>

        <p className="greyed">
          "Things" I specialize in:
        </p>

        <div className="marquee" role="presentation">
          <div className="marquee-content">
            <RiJavascriptFill size={60} aria-hidden="true"/>
            <BiLogoTypescript size={60} aria-hidden="true"/>
            <FaReact size={50} aria-hidden="true"/>
            <SiNextdotjs size={50} aria-hidden="true"/>
            <FaNode size={70} aria-hidden="true"/>
            <IoLogoHtml5 size={50} aria-hidden="true"/>
            <FaCss3 size={45} aria-hidden="true"/>
            <FaSass size={50} aria-hidden="true"/>            
            <SiTailwindcss size={50} aria-hidden="true"/>
            <FaBootstrap size={50} aria-hidden="true"/>
            <SiChakraui size={45} aria-hidden="true"/>
            <SiRadixui size={45} aria-hidden="true"/>
            <SiVite size={45} aria-hidden="true"/>
            <GiHammerNails size={45} aria-hidden="true"/>

            <RiJavascriptFill size={60} aria-hidden="true"/>
            <BiLogoTypescript size={60} aria-hidden="true"/>
            <FaReact size={50} aria-hidden="true"/>
            <SiNextdotjs size={50} aria-hidden="true"/>
            <FaNode size={70} aria-hidden="true"/>
            <IoLogoHtml5 size={50} aria-hidden="true"/>
            <FaCss3 size={45} aria-hidden="true"/>
            <FaSass size={50} aria-hidden="true"/>            
            <SiTailwindcss size={50} aria-hidden="true"/>
            <FaBootstrap size={50} aria-hidden="true"/>
            <SiChakraui size={45} aria-hidden="true"/>
            <SiRadixui size={45} aria-hidden="true"/>
            <SiVite size={45} aria-hidden="true"/>
            <GiHammerNails size={45} aria-hidden="true" title="Hammer and Nails"/>
          </div>
        </div>
      </main>
      <button 
        aria-label="Enable Light Mode" 
        aria-pressed={theme === "dark" ? false : true}
        className="toggle-theme" 
        onClick={toggleTheme}>
        {theme === "dark" 
          ? <LuLightbulbOff size={20} aria-hidden="true" />
          : <LuLightbulb size={20} aria-hidden="true" />}
      </button>
      <img ref={imgRef} aria-hidden="true" className="k-logo" src={klogo} alt="" />      
    </>
  )
}

export default App
