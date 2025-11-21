"use client";
import { useEffect, useRef } from "react";
import React from "react";

function Trainings() {
  const itemsRef = useRef([]);
  const cursorsRef = useRef([]);

  const images = [
    "../images/team1.jpg",
    "../images/team2.jpg",
    "../images/team3.jpg",
    "../images/team1.jpg",
    "../images/team2.jpg",
    "../images/team3.jpg",
    "../images/team1.jpg",
    "../images/team2.jpg",
    "../images/team3.jpg",
    "../images/team2.jpg",
  ];

  // Vars
  let progress = 50;
  let startX = 0;
  let active = 0;
  let isDown = false;

  const speedWheel = 0.02;
  const speedDrag = -0.1;

  const getZindex = (array, index) =>
    array.map((_, i) =>
      index === i ? array.length : array.length - Math.abs(index - i)
    );

  // ⭐ Apply active class + zIndex
  const displayItems = (item, index, active) => {
    const array = itemsRef.current;
    const zIndex = getZindex([...array], active)[index];

    item.style.setProperty("--zIndex", zIndex);
    item.style.setProperty("--active", (index - active) / array.length);

    if (index === active) item.classList.add("active-slide");
    else item.classList.remove("active-slide");
  };

  // ⭐ Recalculate active item
  const animate = () => {
    const items = itemsRef.current;
    progress = Math.max(0, Math.min(progress, 100));
    active = Math.floor((progress / 100) * (items.length - 1));

    items.forEach((item, index) => displayItems(item, index, active));
  };

  useEffect(() => {
    const items = itemsRef.current;

    // ⭐ CLICK → activate correct item
    items.forEach((item, i) => {
      item.addEventListener("click", () => {
        progress = (i / (items.length - 1)) * 100;
        animate();
      });
    });

    // ⭐ FIXED: Wheel working properly
    const handleWheel = (e) => {
      progress += e.deltaY * speedWheel;
      animate();
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;

      const x = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const mouseProgress = (x - startX) * speedDrag;

      progress += mouseProgress;
      startX = x;

      animate();
    };

    const handleMouseDown = (e) => {
      isDown = true;
      startX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    };

    const handleMouseUp = () => {
      isDown = false;
    };

    document.addEventListener("wheel", handleWheel);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchstart", handleMouseDown);
    document.addEventListener("touchmove", handleMouseMove);
    document.addEventListener("touchend", handleMouseUp);

    animate();

    return () => {
      document.removeEventListener("wheel", handleWheel);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchstart", handleMouseDown);
      document.removeEventListener("touchmove", handleMouseMove);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  return (
    <>
      <div className="carousel-wrapper">
        <div className="carousel">
          {images.map((img, idx) => (
            <>
            <div
              key={idx}
              className="carousel-item"
              ref={(el) => (itemsRef.current[idx] = el)}
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="single_tranning_video">
                <h2>{idx + 1}</h2>
                <div className="play_btn">
                   <img src='../images/play.png' alt='img' />
                </div>
                <div className="tranin_overlay"></div>
              </div>
            </div>
            {/* <div className="videofile_main">
                <video
                  className="custom-video"
                  src={src}
                  poster={poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                ></video>
            </div> */}
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Trainings;
