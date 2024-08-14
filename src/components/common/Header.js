import React from 'react';
import { Link } from 'react-router-dom';
import SiteBlockCover from './SiteBlockCover';

function Header() {
  return (
    // <div>
    //   <div className="bg-black text-white d-flex justify-content-center align-items-center ">
    //     <p className="mt-2 color-white uppercase">Get started today with a 4 week trial</p>
    //     <p><a href="" className="mt-4 ml-4">Learn More</a></p>
    //   </div>

    //   <div className="site-mobile-menu">
    //     <div className="site-mobile-menu-header">
    //       <div className="site-mobile-menu-close mt-3">
    //         <span className="icon-close2 js-menu-toggle"></span>
    //       </div>
    //     </div>
    //     <div className="site-mobile-menu-body"></div>
    //   </div>

    //   <header className="site-navbar" role="banner">
    //     <div className="container">
    //       <div className="row align-items-center">
    //         <div className="col-11 col-xl-4">
    //           <h1 className="mb-0 site-logo">
    //             <Link to="/" className="text-white mb-0">PhysicalTherapy<span className="text-primary">.</span></Link>
    //           </h1>
    //         </div>
    //         <div className="col-12 col-md-8 d-none d-xl-block">
    //           <nav className="site-navigation position-relative text-right" role="navigation">
    //             <ul className="site-menu js-clone-nav mr-auto d-none d-lg-block">
    //               <li className="active"><Link to="/"><span>Home</span></Link></li>
    //               <li className="has-children">
    //                 <Link to="/services"><span>Services</span></Link>
    //                 <ul className="dropdown arrow-top">
    //                   <li><Link to="/services/physical-therapy">Physical Therapy</Link></li>
    //                   <li><Link to="/services/massage-therapy">Massage Therapy</Link></li>
    //                   <li><Link to="/services/chiropractic-therapy">Chiropractic Therapy</Link></li>
    //                   <li className="has-children">
    //                     <Link to="#"><span>Dropdown</span></Link>
    //                     <ul className="dropdown">
    //                       <li><Link to="/services/physical-therapy">Physical Therapy</Link></li>
    //                       <li><Link to="/services/massage-therapy">Massage Therapy</Link></li>
    //                       <li><Link to="/services/chiropractic-therapy">Chiropractic Therapy</Link></li>
    //                     </ul>
    //                   </li>
    //                 </ul>
    //               </li>
    //               <li><Link to="/about"><span>About</span></Link></li>
    //               <li><Link to="/blog"><span>Blog</span></Link></li>
    //               <li><Link to="/contact"><span>Contact</span></Link></li>
    //             </ul>
    //           </nav>
    //         </div>
    //         <div className="d-inline-block d-xl-none ml-md-0 mr-auto py-3">
    //           <Link to="#" className="site-menu-toggle js-menu-toggle text-white"><span className="icon-menu h3"></span></Link>
    //         </div>
    //       </div>
    //     </div>
    //   </header>
    //   <SiteBlockCover />
    //   {/* <QuickInfo /> */}
    // </div>
    <h1>This is Header</h1>
  );
}

export default Header;
