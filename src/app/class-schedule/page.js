"use client";
import Link from 'next/link';
import { useEffect, useLayoutEffect } from "react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation"; // detect page change

gsap.registerPlugin(ScrollTrigger);

function page() {

const pathname = usePathname(); // triggers on page change

const scrollRef = useRef(null);

  const handleScrollTo = (e) => {
    const label = e.target; // clicked label element

    const fullText = e.currentTarget.innerText; 
    console.log("caldender",fullText);

    if (!scrollRef.current) return;

    const container = scrollRef.current;

    const labelLeft = label.offsetLeft;
    const labelWidth = label.offsetWidth;
    const containerWidth = container.offsetWidth;

    const scrollPosition = labelLeft - (containerWidth / 2 - labelWidth / 2);

    container.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  };


 useLayoutEffect(() => {
    // wait for DOM elements to exist
    const id = requestAnimationFrame(() => {

      // Kill previous triggers safely
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());

      // --- Home Class Cards ---
      const homeCards = document.querySelectorAll(".home_class_single");
      if (homeCards.length) {
        gsap.from(homeCards, {
          opacity: 0,
          y: 100,
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

      // --- Boxed ---
      const boxedItems = document.querySelectorAll(".boxed");
      if (boxedItems.length) {
        gsap.from(boxedItems, {
          opacity: 0,
          y: -130,
          duration: 1,
          stagger: 0.3,
          scrollTrigger: {
            trigger: ".boxed",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        });
      }

      // --- Schedule Left ---
      const schdLeft = document.querySelectorAll(".schd_lft_bgp");
      if (schdLeft.length) {
        gsap.from(schdLeft, {
          opacity: 0,
          x: -120,
          duration: 1.5,
          stagger: 0.3,
          scrollTrigger: {
            trigger: ".schd_lft_bgp",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        });
      }

      // --- Schedule Right ---
      const schdRight = document.querySelectorAll(".schd_rit_bgp");
      if (schdRight.length) {
        gsap.from(schdRight, {
          opacity: 0,
          x: 120,
          duration: 1.5,
          stagger: 0.3,
          scrollTrigger: {
            trigger: ".schd_rit_bgp",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        });
      }

      // Refresh ScrollTrigger after animations are set
      ScrollTrigger.refresh();
    });

    return () => cancelAnimationFrame(id);

  }, [pathname]);






  return (
    <>
       <section className='class_sehedule_banner_main'>
            <div className='class_sehedule_banner_inner'>
                <img src='../images/class_schedule.png' alt='Key' />
                <div className='innban_area'>
                    <h2>Class Schedule</h2>
                </div>
                {/* <div className='sched_over_img'>
                    <img src='../images/sched_ban_graphic.png' alt='Key' />
                </div> */}
            </div>
       </section>

       <section className='banner_botton_class_schedule'>
           <div className='banner_botton_class_schedule_inner'>
               <div className='schedule_calender_main'>
                    <img src='../images/sched_ban_graphic.png' alt='img' />
                    
                    <div className='date-scroll-wrapper'>
                        <div className='schedule_calender_area'>
                            <h2>studio <span>timetable</span></h2>
                            <div className='schedule_calender' ref={scrollRef}>
                                <form className="boxed">
                                    <input type="radio" id="one" name="skills" />
                                    <label htmlFor="one" onClick={handleScrollTo}>01<span>Sat, Nov</span></label>

                                    <input type="radio" id="two" name="skills" />
                                    <label htmlFor="two" onClick={handleScrollTo}>02<span>Sun, Nov</span></label>

                                    <input type="radio" id="three" name="skills" />
                                    <label htmlFor="three" onClick={handleScrollTo}>03<span>Mon, Nov</span></label>

                                    <input type="radio" id="four" name="skills" />
                                    <label htmlFor="four" onClick={handleScrollTo}>04<span>Tue, Nov</span></label>

                                    <input type="radio" id="five" name="skills" />
                                    <label htmlFor="five" onClick={handleScrollTo}>05<span>Tue, Nov</span></label>

                                    <input type="radio" id="six" name="skills" />
                                    <label htmlFor="six" onClick={handleScrollTo}>06<span>Wed, Nov</span></label>

                                    <input type="radio" id="seven" name="skills" />
                                    <label htmlFor="seven" onClick={handleScrollTo}>07<span>Thu, Nov</span></label>

                                    <input type="radio" id="eight" name="skills" />
                                    <label htmlFor="eight" onClick={handleScrollTo}>08<span>Fri, Nov</span></label>

                                    <input type="radio" id="nine" name="skills" />
                                    <label htmlFor="nine" onClick={handleScrollTo}>09<span>Sat, Nov</span></label>

                                    <input type="radio" id="ten" name="skills" />
                                    <label htmlFor="ten" onClick={handleScrollTo}>10<span>Sun, Nov</span></label>

                                    <input type="radio" id="eleval" name="skills" />
                                    <label htmlFor="eleval" onClick={handleScrollTo}>11<span>Mon, Nov</span></label>

                                    <input type="radio" id="twelve" name="skills" />
                                    <label htmlFor="twelve" onClick={handleScrollTo}>12<span>Tue, Nov</span></label>

                                    <input type="radio" id="thiteen" name="skills" />
                                    <label htmlFor="thiteen" onClick={handleScrollTo}>13<span>Wed, Nov</span></label>

                                    <input type="radio" id="forteen" name="skills" />
                                    <label htmlFor="forteen" onClick={handleScrollTo}>14<span>Thu, Nov</span></label>

                                    <input type="radio" id="fifteen" name="skills" />
                                    <label htmlFor="fifteen" onClick={handleScrollTo}>15<span>Fri, Nov</span></label>

                                    <input type="radio" id="sixteen" name="skills" />
                                    <label htmlFor="sixteen" onClick={handleScrollTo}>16<span>Sat, Nov</span></label>

                                    <input type="radio" id="seventeen" name="skills" />
                                    <label htmlFor="seventeen" onClick={handleScrollTo}>17<span>Sun, Nov</span></label>

                                    <input type="radio" id="eighteen" name="skills" />
                                    <label htmlFor="eighteen" onClick={handleScrollTo}>18<span>Mon, Nov</span></label>

                                    <input type="radio" id="nineteen" name="skills" />
                                    <label htmlFor="nineteen" onClick={handleScrollTo}>19<span>Tue, Nov</span></label>

                                    <input type="radio" id="twenty" name="skills" />
                                    <label htmlFor="twenty" onClick={handleScrollTo}>20<span>Wed, Nov</span></label>

                                    <input type="radio" id="twentyone" name="skills" />
                                    <label htmlFor="twentyone" onClick={handleScrollTo}>21<span>Thu, Nov</span></label>

                                    <input type="radio" id="twentytwo" name="skills" />
                                    <label htmlFor="twentytwo" onClick={handleScrollTo}>22<span>Fri, Nov</span></label>

                                    <input type="radio" id="twentythree" name="skills" />
                                    <label htmlFor="twentythree" onClick={handleScrollTo}>23<span>Sat, Nov</span></label>

                                    <input type="radio" id="twentyfour" name="skills" />
                                    <label htmlFor="twentyfour" onClick={handleScrollTo}>24<span>Sun, Nov</span></label>

                                    <input type="radio" id="twentyfive" name="skills" />
                                    <label htmlFor="twentyfive" onClick={handleScrollTo}>25<span>Mon, Nov</span></label>

                                    <input type="radio" id="twentysix" name="skills" />
                                    <label htmlFor="twentysix" onClick={handleScrollTo}>26<span>Tue, Nov</span></label>

                                    <input type="radio" id="twentyseven" name="skills" />
                                    <label htmlFor="twentyseven" onClick={handleScrollTo}>27<span>Wed, Nov</span></label>

                                    <input type="radio" id="twentyeight" name="skills" />
                                    <label htmlFor="twentyeight" onClick={handleScrollTo}>28<span>Mon, Nov</span></label>

                                    <input type="radio" id="twentynine" name="skills" />
                                    <label htmlFor="twentynine" onClick={handleScrollTo}>29<span>Tue, Nov</span></label>

                                    <input type="radio" id="thirty" name="skills" />
                                    <label htmlFor="thirty" onClick={handleScrollTo}>30<span>Wed, Nov</span></label>

                                </form>
                            </div>
                        </div>
                    </div>
               </div>

               <div className='schedule_calendr_main_area'>
                    <img className='schd_lft_bgp' src='../images/left_cycle.png' alt='img' />
                    <img className='schd_rit_bgp' src='../images/right_cycle.png' alt='img' />
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
                          <Link href={'/class-schedule/book-schedule'}>Book Now <img src='../images/rarw2.png' alt='img' /></Link>
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
                          <Link href={'/class-schedule/book-schedule'}>Book Now <img src='../images/rarw2.png' alt='img' /></Link>
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
                          <Link href={'/class-schedule/book-schedule'}>Book Now <img src='../images/rarw2.png' alt='img' /></Link>
                         </div>
                     </div>
                  </div>


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
                          <Link href={'/class-schedule/book-schedule'}>Book Now <img src='../images/rarw2.png' alt='img' /></Link>
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
                          <Link href={'/class-schedule/book-schedule'}>Book Now <img src='../images/rarw2.png' alt='img' /></Link>
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
                          <Link href={'/class-schedule/book-schedule'}>Book Now <img src='../images/rarw2.png' alt='img' /></Link>
                         </div>
                     </div>
                  </div>


              </div>
               </div>
           </div>
       </section>
    </>
  )
}

export default page;
