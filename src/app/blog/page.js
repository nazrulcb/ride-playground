"use client";
import Link from 'next/link';
import { useEffect, useLayoutEffect } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

function Blog() {

const pathname = usePathname();

  useLayoutEffect(() => {
    // Wait for DOM to render
    const id = requestAnimationFrame(() => {

      // Kill previous ScrollTrigger instances to avoid duplicates
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());

      // --- Blog Cards Animation ---
      const blogCards = document.querySelectorAll(".blog_page_main_single");
      if (blogCards.length) {
        gsap.from(blogCards, {
          x: 200,        // slide from right
          opacity: 0,    // fade in
          duration: 1.2,
          stagger: 0.25,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".blog_page_main_all",
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        });
      }

      // Refresh ScrollTrigger after setup
      ScrollTrigger.refresh();
    });

    return () => cancelAnimationFrame(id);

  }, [pathname]);






  return (
    <>
       <section className='blog_page_main_area'>
            <div className='blog_page_main_area_inner'>
                <h2>Latest Blog of this Week</h2>
                <div className='blog_page_main_all'>


                    <div className='blog_page_main_single'>
                        <img src='../images/blog1.png' alt='img' />
                        <div className='blog_heading'>
                            <h3>Achieving Peak Body Fitness with Purpose</h3>
                        </div>
                        <div className='blog_cret_date'>
                            <p><img src='../images/user.png' alt='img' /> By : Admin</p>
                            <p><img src='../images/calendar.png' alt='img' /> Sept 25, 2025</p>
                        </div>
                        <div className='blog_button'>
                            <Link href={'/blog/blog-details'}><img src='../images/rarw2.png' alt='img' /></Link>
                        </div>
                    </div>

                    <div className='blog_page_main_single'>
                        <img src='../images/blog2.png' alt='img' />
                        <div className='blog_heading'>
                            <h3>Achieving Peak Body Fitness with Purpose</h3>
                        </div>
                        <div className='blog_cret_date'>
                            <p><img src='../images/user.png' alt='img' /> By : Admin</p>
                            <p><img src='../images/calendar.png' alt='img' /> Sept 25, 2025</p>
                        </div>
                        <div className='blog_button'>
                            <Link href={'/blog/blog-details'}><img src='../images/rarw2.png' alt='img' /></Link>
                        </div>
                    </div>

                    <div className='blog_page_main_single'>
                        <img src='../images/blog3.png' alt='img' />
                        <div className='blog_heading'>
                            <h3>Achieving Peak Body Fitness with Purpose</h3>
                        </div>
                        <div className='blog_cret_date'>
                            <p><img src='../images/user.png' alt='img' /> By : Admin</p>
                            <p><img src='../images/calendar.png' alt='img' /> Sept 25, 2025</p>
                        </div>
                        <div className='blog_button'>
                            <Link href={'/blog/blog-details'}><img src='../images/rarw2.png' alt='img' /></Link>
                        </div>
                    </div>

                    <div className='blog_page_main_single'>
                        <img src='../images/blog4.png' alt='img' />
                        <div className='blog_heading'>
                            <h3>Achieving Peak Body Fitness with Purpose</h3>
                        </div>
                        <div className='blog_cret_date'>
                            <p><img src='../images/user.png' alt='img' /> By : Admin</p>
                            <p><img src='../images/calendar.png' alt='img' /> Sept 25, 2025</p>
                        </div>
                        <div className='blog_button'>
                            <Link href={'/blog/blog-details'}><img src='../images/rarw2.png' alt='img' /></Link>
                        </div>
                    </div>


                </div>
            </div>
            <img className='blog_detl_img' src='../images/bd_cyc.png' alt='img' />
       </section>
    </>
  )
}

export default Blog;
