"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";




function TestimonialsSlider() {
   var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    className: "myCustomCarousel"
  };





  return (
    <>
    <Slider {...settings}>
        <div className="testimonials_main_body">
            <div className="testi_imagebox">
                <div className="testi_image">
                    <img src="/images/testi_img1.png" alt="icon" />
                </div>
                <div className="testi_info">
                    <h4>Jhon Deo</h4>
                    <h5>Web Developer</h5>
                </div>
            </div>
            <div className="testi_content">
            <p>Semper nisi. Aenean vulputate eleifend tellus consequat vitae, eleifend  ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,  tellus. Phasellus viverra nulla ut metus varius laoreet..</p>
            </div>
        </div>

        <div className="testimonials_main_body">
            <div className="testi_imagebox">
                <div className="testi_image">
                    <img src="/images/testi_img1.png" alt="icon" />
                </div>
                <div className="testi_info">
                    <h4>Jhon Deo</h4>
                    <h5>Web Developer</h5>
                </div>
            </div>
            <div className="testi_content">
            <p>Semper nisi. Aenean vulputate eleifend tellus consequat vitae, eleifend  ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,  tellus. Phasellus viverra nulla ut metus varius laoreet..</p>
            </div>
        </div>

        <div className="testimonials_main_body">
            <div className="testi_imagebox">
                <div className="testi_image">
                    <img src="/images/testi_img1.png" alt="icon" />
                </div>
                <div className="testi_info">
                    <h4>Jhon Deo</h4>
                    <h5>Web Developer</h5>
                </div>
            </div>
            <div className="testi_content">
            <p>Semper nisi. Aenean vulputate eleifend tellus consequat vitae, eleifend  ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,  tellus. Phasellus viverra nulla ut metus varius laoreet..</p>
            </div>
        </div>

    </Slider>

    </>
  )
}

export default TestimonialsSlider
