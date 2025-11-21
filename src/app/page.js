
"use client";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import React from "react";
import HomeSlider from "./component/homeSlider";
import Link from "next/link";
import TestimonialsSlider from "./component/testimonialsSlider";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation"; // detect page change

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

const pathname = usePathname(); // triggers on page change


  const [activeIndex, setActiveIndex] = useState(0); // default first active

  const team = [
    { img: "/images/team1.jpg", name: "Dani" },
    { img: "/images/team2.jpg", name: "Angelina" },
    { img: "/images/team3.jpg", name: "Emily" },
  ];


 useLayoutEffect(() => {
    // Wait for DOM to render
    const id = requestAnimationFrame(() => {

      // Kill previous triggers to avoid duplicates
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());

      // --- Home Class Cards ---
      const homeCards = document.querySelectorAll(".home_class_single");
      if (homeCards.length) {
        gsap.from(homeCards, {
          opacity: 0,
          y: 80,
          duration: 1.5,
          stagger: 0.3,
          scrollTrigger: {
            trigger: ".all_home_class",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        });
      }

      // --- Class Background ---
      const classBg = document.querySelectorAll(".clas_bg_main");
      if (classBg.length) {
        gsap.from(classBg, {
          opacity: 0,
          x: -120,
          duration: 1.5,
          stagger: 0.3,
          scrollTrigger: {
            trigger: ".all_home_class",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        });
      }

      // --- About Options Right ---
      const aboutOpts = document.querySelectorAll(".single_aboutopt");
      if (aboutOpts.length) {
        gsap.from(aboutOpts, {
          opacity: 0,
          y: 80,
          duration: 1.5,
          stagger: 0.3,
          scrollTrigger: {
            trigger: ".about_area_main_right",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        });
      }

      // --- About Left ---
      const aboutLeft = document.querySelectorAll(".about_area_main_left");
      if (aboutLeft.length) {
        gsap.from(aboutLeft, {
          opacity: 0,
          x: -120,
          duration: 1.5,
          stagger: 0.3,
          scrollTrigger: {
            trigger: ".about_area_main_right",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        });
      }

      // --- Team Instructor ---
      const teamCards = document.querySelectorAll(".team_instrat_all");
      if (teamCards.length) {
        gsap.from(teamCards, {
          x: 200,
          opacity: 0,
          duration: 1.2,
          stagger: 0.25,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".team_instrat_all",
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        });
      }

      // --- Testimonials Zoom-In ---
      const testimonials = document.querySelectorAll(".testimonials_main_section");
      if (testimonials.length) {
        gsap.from(testimonials, {
          scale: 2,
          opacity: 0,
          duration: 1.5,
          transformOrigin: "center center",
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".testimonials_main_section",
            start: "top 80%",
            end: "top 40%",
            toggleActions: "play none none reverse",
            once: false,
          },
        });
      }

      // --- Services Zoom-In ---
      const services = gsap.utils.toArray(".service_provide_area_single");
      if (services.length) {
        gsap.from(services, {
          scale: 0.3,
          opacity: 0,
          duration: 1.2,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".service_provide_area_all",
            start: "top 70%",
            toggleActions: "play reverse play reverse",
          },
        });
      }

      // Refresh ScrollTrigger positions
      ScrollTrigger.refresh();
    });

    return () => cancelAnimationFrame(id);
  }, [pathname]);

  //return null; // This component handles only animations








  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  return (
    <>
       <HomeSlider />
       <section className="homeclass_area_main">
        <img className="clas_bg_main" src='../images/home_graphic.png' alt='img' />
          <div className="homeclass_area_inner">
              <div className="all_home_class">

               <div className="home_class_single">
                  <img className="clas_bg" src='../images/class_brap.png' alt='img' />
                  <img className="staff_img" src='../images/staff.png' alt='img' />
                  <div className="single_class">
                     <h2>TECHNO THURSDAY</h2>
                     <h3><img src='../images/trainer.png' alt='img' /> Instructor : <span>Tyson</span></h3>
                     <div className="mid_cont">
                     <p><img src='../images/calendar.png' alt='img' /> Thu 31st October 2025</p>
                     <p><img src='../images/clock.png' alt='img' /> 7:00 AM (45mins)</p>
                     </div>
                     <h4><img src='../images/map.png' alt='img' /> Melbourns CBD Ride Chamber</h4>
                     <div className="book_btn">
                     <Link href={'/class-schedule'}>Book Now <img src='../images/rarw2.png' alt='img' /></Link>
                     </div>
                  </div>
               </div>

               <div className="home_class_single">
                  <img className="clas_bg" src='../images/class_brap.png' alt='img' />
                  <img className="staff_img" src='../images/staff2.png' alt='img' />
                  <div className="single_class">
                     <h2>TECHNO THURSDAY</h2>
                     <h3><img src='../images/trainer.png' alt='img' /> Instructor : <span>Tyson</span></h3>
                     <div className="mid_cont">
                     <p><img src='../images/calendar.png' alt='img' /> Thu 31st October 2025</p>
                     <p><img src='../images/clock.png' alt='img' /> 7:00 AM (45mins)</p>
                     </div>
                     <h4><img src='../images/map.png' alt='img' /> Melbourns CBD Ride Chamber</h4>
                     <div className="book_btn">
                     <Link href={'/class-schedule'}>Book Now <img src='../images/rarw2.png' alt='img' /></Link>
                     </div>
                  </div>
               </div>

               <div className="home_class_single">
                  <img className="clas_bg" src='../images/class_brap.png' alt='img' />
                  <img className="staff_img" src='../images/staff3.png' alt='img' />
                  <div className="single_class">
                     <h2>TECHNO THURSDAY</h2>
                     <h3><img src='../images/trainer.png' alt='img' /> Instructor : <span>Tyson</span></h3>
                     <div className="mid_cont">
                     <p><img src='../images/calendar.png' alt='img' /> Thu 31st October 2025</p>
                     <p><img src='../images/clock.png' alt='img' /> 7:00 AM (45mins)</p>
                     </div>
                     <h4><img src='../images/map.png' alt='img' /> Melbourns CBD Ride Chamber</h4>
                     <div className="book_btn">
                     <Link href={'/class-schedule'}>Book Now <img src='../images/rarw2.png' alt='img' /></Link>
                     </div>
                  </div>
               </div>

               </div>

          </div>
       </section>

       {/* ================= About Section Start ================= */}

        <section className="about_area_main">
            <img className="about_bg_upl_img" src='../images/shape-right.png' alt='img' />
            <img className="about_bg_upr_img" src='../images/shape-left.png' alt='img' />
            <div className="about_area_main_inner">
                <div className="about_area_main_left">
                    <img src='../images/about_img.png' alt='img' />
                </div>
                <div className="about_area_main_right">
                  <h5>Welcome</h5>
                  <h2>Rhythm <span>Ride</span></h2>
                  <h4>Ride Regularly <span>Stay Healthy</span></h4>

                  <div className="single_aboutopt">
                     <div className="single_aboutopt_left">
                        <img src='../images/abtg2.png' alt='img' />
                     </div>
                     <div className="single_aboutopt_right">
                        <h3>Increase Energy Levels</h3>
                        <p>Semper nisi. Aenean vulputate eleifend tellus consequat vitae, eleifend  ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,  tellus. Phasellus viverra nulla ut metus varius laoreet..</p>
                     </div>
                  </div>

                  <div className="single_aboutopt">
                     <div className="single_aboutopt_left">
                        <img src='../images/abtg3.png' alt='img' />
                     </div>
                     <div className="single_aboutopt_right">
                        <h3>Reduce Risk of Chronic Diseases</h3>
                        <p>Semper nisi. Aenean vulputate eleifend tellus consequat vitae, eleifend  ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,  tellus. Phasellus viverra nulla ut metus varius laoreet..</p>
                     </div>
                  </div>

                  <div className="single_aboutopt">
                     <div className="single_aboutopt_left">
                        <img src='../images/abtg4.png' alt='img' />
                     </div>
                     <div className="single_aboutopt_right">
                        <h3>Relax & Sleep Better</h3>
                        <p>Semper nisi. Aenean vulputate eleifend tellus consequat vitae, eleifend  ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,  tellus. Phasellus viverra nulla ut metus varius laoreet..</p>
                     </div>
                  </div>


                </div>
            </div>
        </section>

       {/* ================= About Section End ================= */}

       {/* ================= Team Instractor Area Start ================== */}

         <section className="team_area_main_section">
            <img className="rid_plgnd" src="/images/RidePlayground.png" alt="icon" />
            <div className="team_area_main_section_inner">
               <div className="team_area_main_section_left">
                  <h4>Our Team</h4>
                  <h2>Instructor</h2>
                  <p>Semper nisi. Aenean vulputate eleifend tellus consequat vitae, eleifend  ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,  tellus. Phasellus viverra nulla ut metus varius laoreet..</p>
               </div>
               <div className="team_area_main_section_right">
                  <div className="team_instrat_all">

                      {team.map((item, index) => (
                        <div
                           key={index}
                           className={`single_instractor ${activeIndex === index ? "active_team" : ""}`}
                           onMouseEnter={() => setActiveIndex(index)} // change active on hover
                        >
                           <img src={item.img} alt="img" />
                           <h2>{item.name}</h2>

                           <Link href="">
                              <img src="/images/rarw2.png" alt="icon" />
                           </Link>

                           <div className="team_layout"></div>
                        </div>
                        ))}

                  </div>
               </div>
            </div>
         </section>

       {/* ================= Team Instractor Area End ================== */}


       {/* ================= Testimonials Section Area Start ================== */}
         
         <section className="testimonials_main_section">
            <div className="testimonials_main_section_inner">
               <div className="testimonials_main_all">
                  <div className="testimonials_main_top">
                     <h3>Testimonials</h3>
                     <h2>What’s Our Client Say</h2>
                  </div>

                  <div className="testimonials_main_body_main">
                     <TestimonialsSlider />
                  </div>

               </div>
            </div>
         </section>

       {/* ================= Testimonials Section Area End ================== */}


       {/* ================= Service Provide Area Start ================== */}

         <section className="service_provide_area_main">
             <div className="service_provide_area_inner">
               <div className="service_provide_area_head">
                  <h2>Service we Provide</h2>
               </div>
               <div className="service_provide_area_all">

                  <div className="service_provide_area_single">
                     <img src="/images/srv1.png" alt="img" />
                     <div className="srv_hovr_teat">
                        <h3>Yoga</h3>
                     </div>
                     <div className="srv_button">
                        <Link href={'/trainings'}>Explore Training <span><img src="/images/rarw2.png" alt="img" /></span></Link>
                     </div>
                  </div>

                  <div className="service_provide_area_single">
                     <img src="/images/srv2.png" alt="img" />
                     <div className="srv_hovr_teat">
                        <h3>Pilates</h3>
                     </div>
                     <div className="srv_button">
                        <Link href={'/trainings'}>Explore Training <span><img src="/images/rarw2.png" alt="img" /></span></Link>
                     </div>
                  </div>

                  <div className="service_provide_area_single">
                     <img src="/images/srv3.png" alt="img" />
                     <div className="srv_hovr_teat">
                        <h3>Ride</h3>
                     </div>
                     <div className="srv_button">
                        <Link href={'/trainings'}>Explore Training <span><img src="/images/rarw2.png" alt="img" /></span></Link>
                     </div>
                  </div>

                  <div className="service_provide_area_single">
                     <img src="/images/srv4.png" alt="img" />
                     <div className="srv_hovr_teat">
                        <h3>Strength</h3>
                     </div>
                     <div className="srv_button">
                        <Link href={'/trainings'}>Explore Training <span><img src="/images/rarw2.png" alt="img" /></span></Link>
                     </div>
                  </div>

               </div>
             </div>        
         </section>

       {/* ================= Service Provide Area Start ================== */}

        
    </>
  );
}
