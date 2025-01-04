"use client";

import { useEffect, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  life: number;
}

export function StarTrail() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newStar: Star = {
        id: Math.random()*32,
        x: e.clientX,
        y: e.clientY,
        life: 1,
      };
      setStars((prevStars) => [...prevStars, newStar]);
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animationFrame = setInterval(() => {
      setStars((prevStars) =>
        prevStars
          .map((star) => ({
            ...star,
            life: star.life - 0.02,
          }))
          .filter((star) => star.life > 0)
      );
    }, 10);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(animationFrame);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute w-2 h-2 rotate-45 bg-white"
          style={{
            left: star.x+15,
            top: star.y+15,
            opacity: star.life,
            transform: `translate(-50%, -50%) rotate(45deg)`,
            boxShadow: '0 0 4px #FFFF00, 0 0 8px #FFFF00',
          }}
        />
      ))}
    </div>
  );
} 