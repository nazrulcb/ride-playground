"use client";
import { useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";
import gsap from "gsap";

function HomeSlider() {

  const boxRef1 = useRef(null);
  const boxRef2 = useRef(null);
  const boxRef3 = useRef(null);

  const refs = [boxRef1, boxRef2, boxRef3];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    className: "myCustomCarousel",
      beforeChange: (oldIndex, newIndex) => {
      const el = refs[newIndex].current;
      if (el) {
         gsap.fromTo(
            el.children,
            { y: 40, opacity: 0 },
            {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            stagger: 0.15,   // Animate one by one
            }
         );
      }
      }
  };

  useEffect(() => {
    // Animate the first slide on load
    gsap.fromTo(
      boxRef1.current,
      { y: 250, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="home_main_slider">
      <Slider {...settings}>
        {/* SLIDE 1 */}
        <div className="single_slider">
          <img src="../images/slider1.png" alt="img" />
          <div className="baner_content" ref={boxRef1}>
            <h2>Ultimate</h2>
            <h3><span>Body</span> Workout</h3>
            <p>Yoga, pilates , ride and strength</p>
            <Link href="">
              15% off memberships ongoing{" "}
              <span><img src="../images/rarw2.png" alt="img" /></span>
            </Link>
          </div>
        </div>

        {/* SLIDE 2 */}
        <div className="single_slider">
          <img src="../images/slider2.png" alt="img" />
          <div className="baner_content" ref={boxRef2}>
            <h2>Ultimate</h2>
            <h3><span>Body</span> Workout</h3>
            <p>Yoga, pilates , ride and strength</p>
            <Link href="">
              15% off memberships ongoing{" "}
              <span><img src="../images/rarw2.png" alt="img" /></span>
            </Link>
          </div>
        </div>

        {/* SLIDE 3 */}
        <div className="single_slider">
          <img src="../images/slider3.png" alt="img" />
          <div className="baner_content" ref={boxRef3}>
            <h2>Ultimate</h2>
            <h3><span>Body</span> Workout</h3>
            <p>Yoga, pilates , ride and strength</p>
            <Link href="">
              15% off memberships ongoing{" "}
              <span><img src="../images/rarw2.png" alt="img" /></span>
            </Link>
          </div>
        </div>
      </Slider>

      <div className="main_marqee_area">
        <marquee>
          <h3>
            MUSIC <span>MOVEMENT</span> MOTIVATION <span>MEDITATION</span> MUSIC{" "}
            <span>MOVEMENT</span> MOTIVATION <span>MEDITATION</span>
          </h3>
        </marquee>
      </div>
    </section>
  );
}

export default HomeSlider;
