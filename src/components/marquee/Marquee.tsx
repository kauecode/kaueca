import { BiLogoTypescript } from 'react-icons/bi'
import { RiJavascriptFill } from "react-icons/ri"
import { FaBootstrap, FaCss3, FaNode, FaReact, FaSass } from "react-icons/fa"
import { SiChakraui, SiNextdotjs, SiRadixui, SiTailwindcss, SiVite } from "react-icons/si"
import { IoLogoHtml5 } from "react-icons/io"
import { GiHammerNails } from "react-icons/gi"
import { Tooltip } from 'react-tooltip'
import styles from './marquee.module.scss'
import { FaPersonFalling } from 'react-icons/fa6'
import { SiRedux } from "react-icons/si";
import { SiMui } from "react-icons/si";



const Marquee = () => {

  const listOfTechs = [
    { comp: RiJavascriptFill, size: 47, desc: "JavaScript" },
    { comp: BiLogoTypescript, size: 47, desc: "TypeScript" },
    { comp: FaReact, size: 47, desc: "React" },
    { comp: SiRedux, size: 47, desc: "Redux" },
    { comp: SiNextdotjs, size: 47, desc: "Next.js" },    
    { comp: FaNode, size: 67, desc: "Node.js" },
    { comp: FaPersonFalling, size: 42, desc: "Humans!" },        
    { comp: IoLogoHtml5, size: 47, desc: "HTML5" },
    { comp: FaCss3, size: 42, desc: "CSS 3" },
    { comp: FaSass, size: 47, desc: "Scss" },
    { comp: SiTailwindcss, size: 47, desc: "Tailwind CSS" },
    { comp: FaBootstrap, size: 47, desc: "Bootstrap" },
    { comp: SiMui, size: 47, desc: "Material UI" },        
    { comp: SiChakraui, size: 42, desc: "Chakra UI" },
    { comp: SiRadixui, size: 42, desc: "Radix UI" },
    { comp: SiVite, size: 42, desc: "Vite" },    
    { comp: GiHammerNails, size: 42, desc: "Wood Working :)" }
  ];

  return (
    <div className={styles.marqueeWrapper}>
      <p>"Things" I enjoy working with:</p>    

      {listOfTechs.map((_, idx) => 
        <Tooltip className={styles.reactTooltip} key={idx} place="bottom" id={`tooltip-${idx}`} />
      )}
    
      <div className={styles.marquee} role="presentation">
        <div className={styles.marqueeContent}>
          {/* Need to run this 2x so the CSS animation looks good, visuals only. */}
          {Array.from("12",
            () => listOfTechs.map((item, idx) => 
              <item.comp 
                key={idx}
                size={item.size}
                data-tooltip-id={`tooltip-${idx}`}
                data-tooltip-content={item.desc} 
                title={item.desc}
              />
            )
          )}
        </div>
      </div>    
    </div>
  )
}

export default Marquee