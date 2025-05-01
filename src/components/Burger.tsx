'use client'

import {motion} from "framer-motion"
import { useState } from "react"


export default function Burger() {

  const [toggleNav, setToggleNav] = useState(false)

  return (
    <div>
      {/* burger bars */}
      <motion.div 
        className={`w-8 h-8 ${toggleNav ? "fixed" : "absolute"} top-7 right-8 cursor-pointer`} 
        animate={toggleNav ? "open" : "close"}
        onClick={() => setToggleNav(!toggleNav)}
        initial={false}
      >
        {/* top bar */}
        <motion.div 
          className="w-full h-[6px] bg-primary-accent absolute"
          style={{
            top: "0%",
            y: "0%",
            rotate: "0deg"
          }}
          variants={{
            open: {
              top: ["0%", "50%", "50%"],
              y: ["0%", "-50%", "-50%"],
              rotate: ["0deg", "0deg", "45deg"]
            }, 
            close: {
              top: ["50%", "50%", "0%"],
              y: ["-50%", "-50%", "0%"],
              rotate: ["45deg", "0deg", "0deg"]
            }
          }}
        />
        <motion.div 
          className="w-full h-[6px] bg-primary-accent absolute"
          style={{
            top: "50%",
            y: "-50%",
            rotate: "0deg"
          }}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"]
            },
            close: {
              rotate: ["45deg", "0deg", "0deg"]
            }
          }}
        />
        <motion.div 
          className="w-full h-[6px] bg-primary-accent absolute"
          style={{
            top: "100%",
            y: "-100%",
            rotate: "0deg"
          }}
          variants={{
            open: {
              top: ["100%", "50%", "50%"],
              y: ["-100%", "-50%", "-50%"],
              rotate: ["0deg", "0deg", "-45deg"]
            },
            close: {
              top: ["50%", "50%", "100%"],
              y: ["-50%", "-50%", "-100%"],
              rotate: ["-45deg", "0deg", "0deg"]
            }
          }}
        />
      </motion.div>
    </div>
  )
}
