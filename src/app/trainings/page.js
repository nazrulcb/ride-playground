"use client";
import React, { useEffect, useRef } from "react";

export default function Trainings() {
  const wrapperRef = useRef(null);
  const itemsRef = useRef([]);
  const rafRef = useRef(null);

  // Mutable state stored in refs so values persist across renders
  const progressRef = useRef(50); // 0 - 100
  const startXRef = useRef(0);
  const draggingRef = useRef(false);
  const activeIndexRef = useRef(0);
  const enabledRef = useRef(false); // enabled when IntersectionObserver says carousel is active

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

  const speedWheel = 0.02;
  const speedDrag = -0.15;

  const getZindex = (array, index) =>
    array.map((_, i) =>
      index === i ? array.length : array.length - Math.abs(index - i)
    );

  const displayItems = (item, index, active) => {
    const array = itemsRef.current;
    if (!item) return;
    const zIndex = getZindex([...array], active)[index];

    item.style.setProperty("--zIndex", zIndex);
    item.style.setProperty("--active", (index - active) / array.length);

    if (index === active) item.classList.add("active-slide");
    else item.classList.remove("active-slide");
  };

  // Render/update visuals on next animation frame
  const animate = () => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const items = itemsRef.current.filter(Boolean);
      progressRef.current = Math.max(0, Math.min(100, progressRef.current));
      activeIndexRef.current = Math.floor(
        (progressRef.current / 100) * (items.length - 1)
      );
      items.forEach((item, index) =>
        displayItems(item, index, activeIndexRef.current)
      );
    });
  };

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    // IntersectionObserver to enable wheel handling only when carousel is sufficiently visible
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Consider active when at least 55% of carousel visible in viewport
          enabledRef.current = entry.intersectionRatio >= 0.55;
        });
      },
      { threshold: [0, 0.25, 0.55, 0.75, 1] }
    );
    io.observe(wrapper);

    // Wheel handler attached to the wrapper (so we don't block whole document)
    const onWheel = (e) => {
      if (!enabledRef.current) return; // let page scroll normally

      // compute prospective progress
      const delta = e.deltaY;
      const nextProgress = progressRef.current + delta * speedWheel;

      // if nextProgress would go beyond bounds, allow page scroll (don't preventDefault)
      if (nextProgress <= 0 || nextProgress >= 100) {
        // if it's going out-of-bounds but current progress is strictly inside bounds,
        // clamp and animate a little then let page scroll on the next wheel events
        if (nextProgress <= 0) progressRef.current = 0;
        if (nextProgress >= 100) progressRef.current = 100;
        animate();
        return;
      }

      // otherwise prevent page scroll and move carousel
      e.preventDefault();
      progressRef.current = nextProgress;
      animate();
    };

    // Pointer drag handlers (works for mouse and touch)
    const onPointerDown = (e) => {
      if (!enabledRef.current) return;
      wrapper.setPointerCapture?.(e.pointerId);
      draggingRef.current = true;
      startXRef.current = e.clientX ?? (e.touches && e.touches[0]?.clientX) ?? 0;
    };

    const onPointerMove = (e) => {
      if (!draggingRef.current || !enabledRef.current) return;
      const x = e.clientX ?? (e.touches && e.touches[0]?.clientX) ?? 0;
      const deltaX = x - startXRef.current;
      startXRef.current = x;
      progressRef.current += deltaX * speedDrag;
      animate();
    };

    const onPointerUp = (e) => {
      draggingRef.current = false;
      try {
        wrapper.releasePointerCapture?.(e.pointerId);
      } catch (err) {
        // ignore if no pointer capture available
      }
    };

    // Add / remove listeners on the wrapper
    wrapper.addEventListener("wheel", onWheel, { passive: false });
    wrapper.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });

    // initial render
    animate();

    return () => {
      io.disconnect();
      wrapper.removeEventListener("wheel", onWheel, { passive: false });
      wrapper.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // render jsx
  return (
    <div
      ref={wrapperRef}
      className="carousel-wrapper"
      style={{
        touchAction: "pan-y", // allow vertical scrolling but let pointer events handle horizontal drag
      }}
    >
      <div className="carousel">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="carousel-item"
            ref={(el) => (itemsRef.current[idx] = el)}
            style={{
              backgroundImage: `url(${img})`,
              // ensure CSS custom props exist so displayItems can set them
              // you probably have CSS that uses --zIndex and --active
            }}
          >
            <div className="single_tranning_video">
              <h2>{idx + 1}</h2>
              <div className="play_btn">
                <img src="../images/play.png" alt="play" />
              </div>
              <div className="tranin_overlay" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
