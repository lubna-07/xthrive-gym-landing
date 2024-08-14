import React from 'react';
import Cta from './Cta';
import Process from './Process';
import WhatIsOpex from './WhatIsOpex';
import Signup from '../common/Signup';
import Philosophy from './Philosophy';
import Testimonials from './Testimonials';
import Header from './Header';

function Landing() {
  return (
    <div>
      <div class="main-container">
        <Header/>
        <WhatIsOpex />
        <Process />
        <Testimonials />
        <Cta />
        <Philosophy />
        <Signup />
      </div>
    </div>

  );
}

export default Landing;
