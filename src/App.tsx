import { motion } from "motion/react"
import './App.scss'
import klogo from './assets/k-logo.svg'
import { RiLinkedinFill } from "react-icons/ri"
import { FaCodepen, FaGithub } from "react-icons/fa"
import { trackGAEvent } from "./utils/ga"
import { useCallback, useRef } from "react"
import { useTheme } from "./hooks/useTheme"
import { LuLightbulb, LuLightbulbOff } from "react-icons/lu"
import Marquee from "./components/marquee/Marquee"


function App() {

  const {theme, toggleTheme} = useTheme();

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
      const moveX = Math.round((mouseX - centerX)) / 3;  
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
        <p>Thanks for stopping by! I'm currently working on this website, but until it's done, you can learn more about my work in the links below:</p>

        <div className="social-icons"
          ref={targetRef}
          onMouseLeave={() => { if(imgRef.current) imgRef.current.style.transform = "translate3d(0, 0, 0)"} }
          onMouseMove={e => handleMouseMove(e)}        
        >
          <motion.a 
            onClick={() => linkClickTracker("LinkedIn")}            
            whileHover={{ scale: 1.15 }} 
            whileTap={{ scale: 0.9 }} 
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
            whileTap={{ scale: 0.9 }} 
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

        <Marquee />

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
