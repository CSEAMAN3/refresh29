'use client'

import { headerNav } from "@/lib/navigations"
import {motion} from "framer-motion"
import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"


export default function Burger() {

  const [toggleNav, setToggleNav] = useState(false)
  const [navWidth, setNavWidth] = useState("100vw")

  const pathname = usePathname()

  useEffect(() => {
   const updateNavWidth = () => {
     if(window.innerWidth < 640){
      setNavWidth("100vw")
    } else if(window.innerWidth < 900){
      setNavWidth("60vw")
    } else if(window.innerWidth < 1100){
      setNavWidth("50vw")
    } else if(window.innerWidth < 1300){
      setNavWidth("40vw")
    } else {
      setNavWidth("30vw")
    }
   }

   updateNavWidth()

   window.addEventListener("resize", updateNavWidth)
   return () => window.removeEventListener("resize", updateNavWidth)
  }, [])

  return (
    <div>
      {/* navigation menu */}
      <motion.div className="" animate={toggleNav ? "open" : "close"}>
        <motion.div
          className={`bg-pitch-mid h-screen fixed top-0 right-0 ${toggleNav ? "border-l-4" : "border-l-0"} border-grassroots overflow-y-scroll`}
          style={{
            width: "0vw"
          }}
          variants={{
            open: {
              width: navWidth
            },
            close: {
              width: "0vw"
            }
          }}
        >
          <nav className="mt-32 px-8">
            <ul>
              {headerNav.map(link => {
                const isActive = pathname === link.href
                return (
                  <li key={link.href} className="mb-8">
                    <Link 
                      href={link.href} 
                      className={`font-bold text-4xl ${isActive ? "text-primary-accent hover:text-primary-accent" : "text-off-white hover:text-primary-accent"} capitalize`}
                      onClick={() => setToggleNav(!toggleNav)}  
                    >{link.title}</Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </motion.div>
      </motion.div>
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
