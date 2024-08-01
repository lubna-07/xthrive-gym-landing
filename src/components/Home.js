import React from 'react';
import TitleBlock from './TitleBlock';
import WhatIsOpex from './WhatIsOpex';
import NavBar from './NavBar';
import Video from './Video';
import Process from './Process';
import Testimonials from './Testimonials';
import Cta from './Cta';
import Signup from './Signup';
import Philosophy from './Philosophy';
import Newfoot from './Newfoot';
// import Blog from './Blog';
// import Newsletter from './Newsletter';
import Footer from './Footer';

function Home() {
  return (
    <div>
      <NavBar />
       
      <div class="main-container">
        {/* <!-- Title Block --> */}
        <TitleBlock />
        {/* <!-- What is OPEX Block --> */}
        <WhatIsOpex />
        {/* <!-- Process Block --> */}
        <Process />
        {/* <!-- Testimonials Block --> */}
        <Testimonials />
        {/* <!-- CTA Block --> */}
        <Cta />
        <Philosophy />
        <Signup />
        {/* <Newfoot/> */}
        {/* <!-- Philosophy Block --> */}
        {/* <!-- Blog Block --> */}
        {/* <Blog /> */}

        {/* <!-- Newsletter Sign up --> */}
        {/* <Newsletter/> */}

        <Footer/>
      </div>
    </div>

  );
}

export default Home;
