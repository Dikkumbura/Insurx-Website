import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const LoadingIndicator = () => {
  const loaderRef = useRef(null);
  
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    
    // Animate the loading bar
    tl.fromTo(loaderRef.current, 
      { scaleX: 0, opacity: 0 },
      { scaleX: 1, opacity: 1, duration: 0.6, ease: "power2.inOut" }
    )
    .to(loaderRef.current, { scaleX: 0, opacity: 0, duration: 0.6, ease: "power2.inOut" });
    
    return () => {
      tl.kill();
    };
  }, []);
  
  return <div ref={loaderRef} className="loading-indicator gsap-animated"></div>;
};

export default LoadingIndicator;