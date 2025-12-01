"use client";
import { useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";
import gsap from "gsap";

function HomeSlider() {
  const slidesRefs = useRef([]);
  slidesRefs.current = [];

  const addToRefs = (el) => {
    if (el && !slidesRefs.current.includes(el)) {
      slidesRefs.current.push(el);
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    beforeChange: (oldIndex, newIndex) => {
      const el = slidesRefs.current[newIndex];
      if (el) animateSlide(el);
    },
  };

  const animateSlide = (el) => {
    const image = el.querySelector("img");
    const texts = el.querySelectorAll(".baner_content > *");

    gsap.fromTo(
      image,
      { scale: 1.4, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" }
    );

    gsap.fromTo(
      texts,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: .5,
        ease: "power3.out",
        stagger: 0.2,
      }
    );
  };

  useEffect(() => {
    // Animate first slide on load
    if (slidesRefs.current[0]) {
      animateSlide(slidesRefs.current[0]);
    }
  }, []);

  const slideData = [
    {
      img: "../images/slider1.png",
      title: "Ultimate",
      subtitle: "Body Workout",
      desc: "Yoga, pilates, ride and strength",
    },
    {
      img: "../images/slider2.png",
      title: "Powerful",
      subtitle: "Fitness Session",
      desc: "Strength, endurance, and balance",
    },
    {
      img: "../images/slider3.png",
      title: "Dynamic",
      subtitle: "Wellness Program",
      desc: "Movement, meditation, and motivation",
    },
  ];

  return (
    <section className="home_main_slider">
      <Slider {...settings}>
        {slideData.map((slide, index) => (
          <div className="single_slider" key={index} ref={addToRefs}>
            
              <img src={slide.img} alt={`Slide ${index + 1}`} />
            <div className="baner_content">
              <h2>{slide.title}</h2>
              <h3>
                <span>{slide.subtitle.split(" ")[0]}</span> {slide.subtitle.split(" ")[1]}
              </h3>
              <p>{slide.desc}</p>
              <Link href="">
                15% off memberships ongoing{" "}
                <span>
                  <img src="../images/rarw2.png" alt="arrow" />
                </span>
              </Link>
            </div>
          </div>
        ))}
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
