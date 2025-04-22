import React, { useState, useEffect } from 'react';
import '../assets/js/main.js'
//import React, { createContext, ReactNode, useContext, useState } from 'react';

import logo from './logo.svg';
//import { Suspense, lazy, useEffect } from "react";

//import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

//import darklogo from "./assets/images/logo/light-logo.png";
import lightlogo from "../assets/images/logo/light-logo.png";    

import shapeanimation from "../assets/images/shape-animation/video-shape-1.png";
import skillvideo from "../assets/images/video/skill-video.jpg";
import homeoneabout1 from "../assets/images/about/home-one-about/home_agency_about_1.jpg";
import homeoneabout2 from "../assets/images/about/home-one-about/home_agency_about_2.jpg";
import shapeanimation2 from "../assets/images/shape-animation/about-shape-1.png";
import about5 from "../assets/images/about/about-5.jpg";
import about6 from "../assets/images/about/about-6.jpg";
import blog1 from "../assets/images/blog/370/blog-1.jpg";
import blog2 from "../assets/images/blog/370/blog-2.jpg";
import blog3 from "../assets/images/blog/370/blog-3.jpg";
import lineabasic from "../assets/images/svg/linea/linea-basic-map.svg";
import lineabasicmessage from "../assets/images/svg/linea/linea-basic-message-txt.svg";
import lineabasicmail from "../assets/images/svg/linea/linea-basic-mail-open-text.svg";
import contactshape from "../assets/images/shape-animation/contact-shape.png";                       


//import arrowupright from "./assets/images/icons/arrow-up-right.svg";
import type { FC } from "react";
import { Link } from 'react-router-dom';

<a href="https://api.whatsapp.com/send?phone=1234567890" target='_blank'>Contact Us on WhatsApp</a>
function Home() {

 
   // useExternalScript('public/assets/js/main2.js');
    
const LoadExternalScript = () => {
      const externalScript = document.createElement("script");
     // externalScript.onerror = loadError;
      externalScript.id = "external";
      externalScript.async = true;
      externalScript.type = "text/javascript";
      externalScript.setAttribute("crossorigin", "anonymous");
      document.body.appendChild(externalScript);
      externalScript.src = '../assets/js/main.js';
};
    LoadExternalScript();












  return (





<>
    
    
 
  <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
    <div className="hero-container" data-aos="fade-in">
      <h1>Elisha Akan</h1>
      <p>I'm <span className="typed" data-typed-items=" Full Stack Developer, UI/UX Developer, Graphic Designer,Database Administrator"></span></p>
    </div>
  </section>

  <main id="main">

   
    <section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <h2>About</h2>
        
		
		</div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src="assets/img/profile-img.jpg" width="240" height="240" className="img-fluid" alt=""></img>
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3> Full Stack Developer</h3>
            
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>https://dev.bvcpartners.com.ng</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>08169692053</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Address:</strong> <span>4 Joe Onabanjo Clues, Ire,Akari Ested,Isolo
lagos State</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  {/* <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>33</span></li> */}
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Btech & AZ-104: Azure administrators
</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>elisha.officially@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </section>

    

   
 

  
   
  
    <section id="portfolio" className="portfolio section-bg">
      
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>
		  Diligent software engineer with 8+ years experience in commercial application development. Eager to join Cyclone Inc. to build innovative and cutting edge business solutions for the impressive suite of clients within its global reach. In previous roles, slashed downtime by 25% and ensured 98% on-time project completion. Also identified and dealt with a significant process bottleneck that boosted coding efficiency by 35% when resolved.
		  
		  
		  .</p>
        </div>

        <div className="row" data-aos="fade-up">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
             
              
              <li data-filter=".filter-web">Web App</li>
                <li data-filter=".filter-mobile">Mobile App</li>
			   <li data-filter=".filter-Graphic">Graphic</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

          








		  
		  
		  
		  
		  
		  
		  
		   <div className="col-lg-12 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/3.png" className="img-fluid" alt=""></img>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/3.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
		  
		  
		  <div className="col-lg-12 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/4.png" className="img-fluid" alt=""></img>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/4.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
		  
		  <div className="col-lg-12 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/5.png" className="img-fluid" alt=""></img>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/5.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
      <div className="col-lg-12 col-md-6 portfolio-item filter-mobile">
        <div className="portfolio-wrap">
          <img src="assets/img/portfolio/2Untitled.png" className="img-fluid" alt=""></img>
          <div className="portfolio-links">
            <a href="assets/img/portfolio/2Untitled.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i
                className="bx bx-plus"></i></a>
            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
          </div>
        </div>
      </div>
		  
		  <div className="col-lg-12 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/6.png" className="img-fluid" alt=""></img>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/6.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
		  
		  <div className="col-lg-12 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/7.png" className="img-fluid" alt=""></img>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/7.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
		  
		  
		  <div className="col-lg-12 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/8.png" className="img-fluid" alt=""></img>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/8.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
		  
		  
		  
		  <div className="col-lg-12 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/9.png" className="img-fluid" alt=""></img>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
		  
		  
		  <div className="col-lg-12 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/10.png" className="img-fluid" alt=""></img>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/10.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
		  <div className="col-lg-12 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/11.png" className="img-fluid" alt=""></img>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/11.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
		  
		  <div className="col-lg-12 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/12.png" className="img-fluid" alt=""></img>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/12.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
		  
		  <div className="col-lg-12 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/13.png" className="img-fluid" alt=""></img>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/13.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
		  
		  <div className="col-lg-12 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/14.png" className="img-fluid" alt=""></img>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/14.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
		  
		  <div className="col-lg-12 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/15.png" className="img-fluid" alt=""></img>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/15.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
		  
		  
		  
		  
		  
		    
		   <div className="col-lg-12 col-md-6 portfolio-item filter-Graphic">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/01.jpg" className="img-fluid" alt=""></img>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/01.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Graphic 3"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
		  
    <div className="col-lg-12 col-md-6 portfolio-item filter-mobile">
      <div className="portfolio-wrap">
        <img src="assets/img/portfolio/1Untitled.png" className="img-fluid" alt=""></img>
        <div className="portfolio-links">
          <a href="assets/img/portfolio/1Untitled.png" data-gallery="portfolioGallery" className="portfolio-lightbox"
            title="Web 3"><i className="bx bx-plus"></i></a>
          <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
        </div>
      </div>
    </div>
<div className="col-lg-12 col-md-6 portfolio-item filter-mobile">
  <div className="portfolio-wrap">
    <img src="assets/img/portfolio/4Untitled.png" className="img-fluid" alt=""></img>
    <div className="portfolio-links">
      <a href="assets/img/portfolio/4Untitled.png" data-gallery="portfolioGallery" className="portfolio-lightbox"
        title="Web 3"><i className="bx bx-plus"></i></a>
      <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
    </div>
  </div>
</div>
<div className="col-lg-12 col-md-6 portfolio-item filter-mobile">
  <div className="portfolio-wrap">
    <img src="assets/img/portfolio/0Untitled.png" className="img-fluid" alt=""></img>
    <div className="portfolio-links">
      <a href="assets/img/portfolio/0Untitled.png" data-gallery="portfolioGallery" className="portfolio-lightbox"
        title="Web 3"><i className="bx bx-plus"></i></a>
      <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
    </div>
  </div>
</div>
<div className="col-lg-12 col-md-6 portfolio-item filter-mobile">
  <div className="portfolio-wrap">
    <img src="assets/img/portfolio/9Untitled.png" className="img-fluid" alt=""></img>
    <div className="portfolio-links">
      <a href="assets/img/portfolio/9Untitled.png" data-gallery="portfolioGallery" className="portfolio-lightbox"
        title="Web 3"><i className="bx bx-plus"></i></a>
      <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
    </div>
  </div>
</div>
<div className="col-lg-12 col-md-6 portfolio-item filter-mobile">
  <div className="portfolio-wrap">
    <img src="assets/img/portfolio/8Untitled.png" className="img-fluid" alt=""></img>
    <div className="portfolio-links">
      <a href="assets/img/portfolio/8Untitled.png" data-gallery="portfolioGallery" className="portfolio-lightbox"
        title="Web 3"><i className="bx bx-plus"></i></a>
      <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
    </div>
  </div>
</div>
<div className="col-lg-12 col-md-6 portfolio-item filter-mobile">
  <div className="portfolio-wrap">
    <img src="assets/img/portfolio/7Untitled.png" className="img-fluid" alt=""></img>
    <div className="portfolio-links">
      <a href="assets/img/portfolio/7Untitled.png" data-gallery="portfolioGallery" className="portfolio-lightbox"
        title="Web 3"><i className="bx bx-plus"></i></a>
      <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
    </div>
  </div>
</div>
<div className="col-lg-12 col-md-6 portfolio-item filter-mobile">
  <div className="portfolio-wrap">
    <img src="assets/img/portfolio/6Untitled.png" className="img-fluid" alt=""></img>
    <div className="portfolio-links">
      <a href="assets/img/portfolio/6Untitled.png" data-gallery="portfolioGallery" className="portfolio-lightbox"
        title="Web 3"><i className="bx bx-plus"></i></a>
      <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
    </div>
  </div>
</div>
<div className="col-lg-12 col-md-6 portfolio-item filter-mobile">
  <div className="portfolio-wrap">
    <img src="assets/img/portfolio/5Untitled.png" className="img-fluid" alt=""></img>
    <div className="portfolio-links">
      <a href="assets/img/portfolio/5Untitled.png" data-gallery="portfolioGallery" className="portfolio-lightbox"
        title="Web 3"><i className="bx bx-plus"></i></a>
      <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
    </div>
  </div>
</div>
<div className="col-lg-12 col-md-6 portfolio-item filter-mobile">
  <div className="portfolio-wrap">
    <img src="assets/img/portfolio/3Untitled.png" className="img-fluid" alt=""></img>
    <div className="portfolio-links">
      <a href="assets/img/portfolio/3Untitled.png" data-gallery="portfolioGallery" className="portfolio-lightbox"
        title="Web 3"><i className="bx bx-plus"></i></a>
      <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
    </div>
  </div>
</div>



          <div className="col-lg-12 col-md-6 portfolio-item filter-mobile">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/3Untitled.png" className="img-fluid" alt=""></img>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/2Untitled.png" data-gallery="portfolioGallery" className="portfolio-lightbox"
                  title="Web 3"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>











		 <div className="col-lg-12 col-md-6 portfolio-item filter-Graphic">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/02.jpg" className="img-fluid" alt=""></img>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/02.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Graphic 3"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div><div className="col-lg-12 col-md-6 portfolio-item filter-Graphic">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/03.jpg" className="img-fluid" alt=""></img>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/03.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Graphic 3"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div><div className="col-lg-12 col-md-6 portfolio-item filter-Graphic">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/04.jpg" className="img-fluid" alt=""></img>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/04.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Graphic 3"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div><div className="col-lg-12 col-md-6 portfolio-item filter-Graphic">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/05.jpg" className="img-fluid" alt=""></img>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/05.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Graphic 3"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
         
		 
		  
		  

        </div>

      </div>
    </section>

    
    <section id="services" className="services">
      <div className="container">

        <div className="section-title">
         
		  <h2>Website Services</h2>
		  
          
		</div>

        <div className="row">
		
		
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                       <h4 className="title"><a href="">Web Application / Business Software</a></h4>
         
          
		  </div>
		  
		  
		  
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                       <h4 className="title"><a href="">Mobile Application / iPhone App</a></h4></div>
					   
					     
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                       <h4 className="title"><a href="">Business Directory / Listings</a></h4></div>
					   
					   			     
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                       <h4 className="title"><a href="">Shopping Cart / Online Ordering System / Online Payments</a></h4></div>
					   
					   			     
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                       <h4 className="title"><a href="">Content Management System</a></h4></div>
					   
					   
					   			     
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                       <h4 className="title"><a href="">Event Booking System </a></h4></div>
					   
					   
		
					   
					   
					   			     
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                       <h4 className="title"><a href="">Social Media Integration — Facebook, Twitter, Youtube, Google+, etc.</a></h4></div>
					   
					   
					   			     
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                       <h4 className="title"><a href="">Email Newsletter</a></h4></div>
					   
					   
					   <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                       <h4 className="title"><a href="">Mobile-Optimised Website	</a></h4></div>
					   
					   
					   
					   
				  </div>	   	     
          
		  
          <div className="container">

        <div className="section-title">
          <h2>Custom Software Development With Industry-Specific Services  </h2>
        
        </div>
		<div className="row">
		
						<div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                       <h4 className="title"><a href="">Custom Web Development</a></h4></div>
					    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                       <h4 className="title"><a href="">Implementation & Deployment</a></h4></div>
					   <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                       <h4 className="title"><a href="">API Development</a></h4></div>
					    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                       <h4 className="title"><a href="">System Integrations</a></h4></div>
					   <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                       <h4 className="title"><a href="">Custom Application Development</a></h4></div>
					   
					    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                       <h4 className="title"><a href="">Application Maintenance</a></h4></div>
					   <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                       <h4 className="title"><a href="">API Integrations</a></h4></div>
					    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                       <h4 className="title"><a href="">UX/UI Design</a></h4></div>
					   
					   
					   <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                       <h4 className="title"><a href="">Service Level Agreements (SLA) </a></h4></div>
					   <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                       <h4 className="title"><a href="">Quality Assurance (QA) Testing</a></h4></div>
					    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                       <h4 className="title"><a href="">Data Migrations & Upgrades</a></h4></div>
					   <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                       <h4 className="title"><a href="">IT Security Services</a></h4></div>
					   <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                       <h4 className="title"><a href="">Data Backup & Disaster Recovery</a></h4></div>
					   
					    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                       <h4 className="title"><a href="">Infrastructure Support Services</a></h4></div>
					   
					    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                       <h4 className="title"><a href="">Real-Time Communication</a></h4></div>
        
      </div>
		  
        </div>
		
		
		
		
		 
          <div className="container">

        <div className="section-title">
          <h2>Creative Solutions  </h2>
        
        </div>
		<div className="row">
		
						<div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                       <h4 className="title"><a href="">Logo Design • Business Cards • Stationery • Branding Packages</a></h4></div>
					    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                       <h4 className="title"><a href="">Web Ads • Facebook Timelime Cover Photos</a></h4></div>
					   <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                       <h4 className="title"><a href="">Brochures • Flyers • Posters • Signs • Postcards •
Custom Invitations • Labels & Packaging • Gift Cards</a></h4></div>
					    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                       <h4 className="title"><a href="">Menus & Takeout Menus • Table Tents • Appetizer Cards • Lunch Cards
Comment Cards • Door Hangers • Coasters • Stickers & Labels</a></h4></div>
					   <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                       <h4 className="title"><a href="">Tee Shirts • Pens • Pencils • Coffee Cups & More</a></h4></div>
					   
					    
        
      </div>
		  
        </div>

      </div>
    </section>
   
   
  </main>

  
  <footer id="footer">
    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong><span>Elisha Akan</span></strong>
      </div>
      <div className="credits">
        
        Designed by <a href="">Elisha Akan</a>
      </div>
    </div>
  </footer>

  <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

      </>


    
  );
}

export default Home;





















































