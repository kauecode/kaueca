import { motion } from "motion/react"
import './App.css'
import klogo from '../public/k-logo.svg'
import { BiLogoTypescript } from 'react-icons/bi'
import { RiJavascriptFill, RiLinkedinFill } from "react-icons/ri"
import { FaBootstrap, FaCodepen, FaCss3, FaGithub, FaNode, FaReact, FaSass } from "react-icons/fa"
import { SiChakraui, SiNextdotjs, SiRadixui, SiTailwindcss, SiVite } from "react-icons/si"
import { IoLogoHtml5 } from "react-icons/io"
import { GiHammerNails } from "react-icons/gi"
import { trackGAEvent } from "./utils/ga"

function App() {
  
  const linkClickTracker = (label:string) => {
    trackGAEvent("click", { 
      category: "link",
      action: "click",
      label
    })
  }

  return (
    <>
      <img aria-hidden="true" className="k-logo" src={klogo} alt="" />
      <main>       

        <h1>Hi, I'm Kaue! <span className="emoji">👋</span></h1>

        <p>I'm a Toronto based <strong>software engineer</strong> who loves creating wonderful things with code — and sometimes wood.</p>  
        <p>Thanks for stopping by! I'm currently working on this website, but until it's done, you can learn more about me through the links below:</p>

        <div className="social-icons">
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
            <GiHammerNails size={45} aria-hidden="true"/>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
