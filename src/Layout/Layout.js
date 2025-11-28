import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../App.css";

export default function Layout({ children }) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const hasHover = window.matchMedia('(hover: hover)').matches;
      const isLargeScreen = window.innerWidth >= 1024;
      setIsDesktop(hasHover && isLargeScreen);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const cursor = document.querySelector(".cursor");
    if (!cursor) return;
    
    const handleMouseMove = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    const handleMouseDown = () => {
      cursor.style.height = "30px";
      cursor.style.width = "30px";
    };

    const handleMouseUp = () => {
      cursor.style.height = "20px";
      cursor.style.width = "20px";
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDesktop]);

  useEffect(() => {
    Aos.init({ 
      duration: 800,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <div className="min-h-screen gradient-bg bg-grid relative overflow-x-hidden">
      <div className="floating-shapes" />
      <div className="relative z-10">
        {children}
      </div>
      {isDesktop && <div className="cursor" />}
    </div>
  );
}
