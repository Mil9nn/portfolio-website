import React from 'react'
import { motion } from "motion/react"

const SkillDropItem = ({ children, delay }) => {
  return (
    <motion.div
        initial={{y: -100, opacity: 0 }}
        whileInView={{y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }} // triggers only when 30% of the component is in view
        transition={{
            type: "spring",
            damping: 20,
            stiffness: 120,
            duration: 0.6,
            delay: delay,
        }}
    >
        {children}
    </motion.div>
  )
}

export default SkillDropItem
