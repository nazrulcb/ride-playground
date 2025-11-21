"use client";
import { useEffect, useLayoutEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);


function Subscription() {

const pathname = usePathname();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {

      // Batch animation for subscription cards
      ScrollTrigger.batch(".subscription_single", {
        onEnter: batch => {
          gsap.fromTo(
            batch,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.25, duration: 1.2, ease: "power3.out" }
          );
        },
        start: "top 90%",
        end: "bottom 30%",
        toggleActions: "play reverse play reverse",
      });

    });

    return () => {
      // Cleanup GSAP animations & ScrollTriggers
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, [pathname]);


  return (
    <>
       <section className='subscription_main_page_area'>
            <div className='subscription_main_page_inner'>
                <div className='subscription_heading'>
                    <h2>Subscription</h2>
                    <p>Rides Packages Pricing Table</p>
                </div>
                <div className='subscription_main_slider'>
                    <div className='subscription_single'>
                        <div className='subscription_single_left'>
                          <h4>Single <span>Class</span></h4>
                        </div>
                        <div className='subscription_single_right'>
                           <div className='subscrip_price'>
                              <h3><span>$</span>36</h3>
                           </div>
                           <div className='subscrip_body'>
                              <ul>
                                <li><img src="/images/rarw.png" alt="icon" /> 1 Class</li>
                                <li><img src="/images/rarw.png" alt="icon" /> $36 per class cost</li>
                                <li><img src="/images/rarw.png" alt="icon" /> Valid to book ride + reformfit</li>
                                <li><img src="/images/rarw.png" alt="icon" /> Cannot be shared</li>
                              </ul>
                              <div className='subscrip_btn'> 
                                <button>BUY NOW <span><img src="/images/rarw.png" alt="icon" /></span></button>
                              </div>
                           </div>
                        </div>
                    </div>

                    <div className='subscription_single'>
                        <div className='subscription_single_left'>
                          <h4>5 Class <span>Credits</span></h4>
                        </div>
                        <div className='subscription_single_right'>
                           <div className='subscrip_price'>
                              <h3><span>$</span>150</h3>
                           </div>
                           <div className='subscrip_body'>
                              <ul>
                                <li><img src="/images/rarw.png" alt="icon" /> 5 Class</li>
                                <li><img src="/images/rarw.png" alt="icon" /> $30 per class cost</li>
                                <li><img src="/images/rarw.png" alt="icon" /> Valid to book ride + reformfit</li>
                                <li><img src="/images/rarw.png" alt="icon" /> Cannot be shared</li>
                              </ul>
                              <div className='subscrip_btn'> 
                                <button>BUY NOW <span><img src="/images/rarw.png" alt="icon" /></span></button>
                              </div>
                           </div>
                        </div>
                    </div>

                    <div className='subscription_single'>
                        <div className='subscription_single_left'>
                          <h4>10 Class <span>Credits</span></h4>
                        </div>
                        <div className='subscription_single_right'>
                           <div className='subscrip_price'>
                              <h3><span>$</span>260</h3>
                           </div>
                           <div className='subscrip_body'>
                              <ul>
                                <li><img src="/images/rarw.png" alt="icon" /> 10 Class</li>
                                <li><img src="/images/rarw.png" alt="icon" /> $26 per class cost</li>
                                <li><img src="/images/rarw.png" alt="icon" /> Valid to book ride + reformfit</li>
                                <li><img src="/images/rarw.png" alt="icon" /> Cannot be shared</li>
                              </ul>
                              <div className='subscrip_btn'> 
                                <button>BUY NOW <span><img src="/images/rarw.png" alt="icon" /></span></button>
                              </div>
                           </div>
                        </div>
                    </div>

                    <div className='subscription_single'>
                        <div className='subscription_single_left'>
                          <h4>15 Class <span>Credits</span></h4>
                        </div>
                        <div className='subscription_single_right'>
                           <div className='subscrip_price'>
                              <h3><span>$</span>320</h3>
                           </div>
                           <div className='subscrip_body'>
                              <ul>
                                <li><img src="/images/rarw.png" alt="icon" /> 20 Class</li>
                                <li><img src="/images/rarw.png" alt="icon" /> $23 per class cost</li>
                                <li><img src="/images/rarw.png" alt="icon" /> Valid to book ride + reformfit</li>
                                <li><img src="/images/rarw.png" alt="icon" /> Cannot be shared</li>
                              </ul>
                              <div className='subscrip_btn'> 
                                <button>BUY NOW <span><img src="/images/rarw.png" alt="icon" /></span></button>
                              </div>
                           </div>
                        </div>
                    </div>


                    <div className='subscription_single'>
                        <div className='subscription_single_left'>
                          <h4>20 Class <span>Credits</span></h4>
                        </div>
                        <div className='subscription_single_right'>
                           <div className='subscrip_price'>
                              <h3><span>$</span>400</h3>
                           </div>
                           <div className='subscrip_body'>
                              <ul>
                                <li><img src="/images/rarw.png" alt="icon" /> 20 Class</li>
                                <li><img src="/images/rarw.png" alt="icon" /> $23 per class cost</li>
                                <li><img src="/images/rarw.png" alt="icon" /> Valid to book ride + reformfit</li>
                                <li><img src="/images/rarw.png" alt="icon" /> Cannot be shared</li>
                              </ul>
                              <div className='subscrip_btn'> 
                                <button>BUY NOW <span><img src="/images/rarw.png" alt="icon" /></span></button>
                              </div>
                           </div>
                        </div>
                    </div>


                    <div className='subscription_single'>
                        <div className='subscription_single_left'>
                          <h4>30 Class <span>Credits</span></h4>
                        </div>
                        <div className='subscription_single_right'>
                           <div className='subscrip_price'>
                              <h3><span>$</span>500</h3>
                           </div>
                           <div className='subscrip_body'>
                              <ul>
                                <li><img src="/images/rarw.png" alt="icon" /> 20 Class</li>
                                <li><img src="/images/rarw.png" alt="icon" /> $23 per class cost</li>
                                <li><img src="/images/rarw.png" alt="icon" /> Valid to book ride + reformfit</li>
                                <li><img src="/images/rarw.png" alt="icon" /> Cannot be shared</li>
                              </ul>
                              <div className='subscrip_btn'> 
                                <button>BUY NOW <span><img src="/images/rarw.png" alt="icon" /></span></button>
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

export default Subscription;
