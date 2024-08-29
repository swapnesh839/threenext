import React from 'react'
import { motion } from "framer-motion";
import Sparklescomponent from '../StyledComponent/Sparklescomponent'

const Herosection = () => {
  return (
    <motion.div className='custom-container sectionpadding'>
      <div>
        <div>
          <Sparklescomponent text='Three js Portfolio ' />
        </div>
      </div>
    </motion.div>
  )
}

export default Herosection