import React from 'react'
import OurPrinciples from './OurPriciples'
import OurProcess from './Ourprocess'
import PhilosophySection from './PhilosophySection'
import Signup from '../common/Signup'
import Header from './Header'

const OurPhilosophy = () => {
  return (
    <div>
      <Header/>
      <OurProcess/>
      <OurPrinciples/>
      <PhilosophySection/>
      <Signup/>
    </div>
  )
}

export default OurPhilosophy
