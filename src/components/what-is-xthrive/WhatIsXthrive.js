import React from 'react'
import OurMethod from './OurMethod'
import OurCoaches from './OurCoaches'
import OurPeople from './OurPeople'
import OurGym from './OurGym'
import HowItWorks from './HowItWorks'
import Signup from '../common/Signup'
import Header from './Header'

const WhatIsXthrive = () => {
  return (
    <div>
      <Header/>
      <OurMethod/>
      <OurCoaches/>
      <OurPeople/>
      <OurGym/>
      <HowItWorks/>
      <Signup/>
    </div>
  )
}

export default WhatIsXthrive
