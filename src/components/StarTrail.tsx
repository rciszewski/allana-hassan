"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { LucideIcon, Stars } from "lucide-react";

interface Star {
  id: number;
  x: number;
  y: number;
  life: number;
  size: number;
  twinkleSpeed: number;
  icon: LucideIcon;
}

export function StarTrail() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Only create a star 25% of the time
      if (Math.random() > 0.25) return;

      setStars((prevStars) => {
        // Check if there are any nearby stars
        const tooClose = prevStars.some((star) => {
          const distance = Math.sqrt(
            Math.pow(star.x - e.clientX, 2) + Math.pow(star.y - e.clientY, 2)
          );
          return distance < 20; // Minimum distance in pixels
        });

        if (tooClose) return prevStars;

        const newStar: Star = {
          id: Math.random() * 32,
          x: e.clientX + 5,
          y: e.clientY + 18,
          life: 1,
          size: Math.random() * 2 + 1.5,
          twinkleSpeed: Math.random() * 0.1 + 0.05,
          icon: Stars,
        };

        return [...prevStars, newStar];
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animationFrame = setInterval(() => {
      setStars((prevStars) =>
        prevStars
          .map((star) => ({
            ...star,
            life: star.life - 0.01,
            x: star.x + Math.sin(Date.now() * star.twinkleSpeed) * 0.5,
            y: star.y + Math.cos(Date.now() * star.twinkleSpeed) * 0.5,
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
          className="absolute w-8 h-8"
          style={{
            left: star.x + 5,
            top: star.y + 10,
            transform: `translate(-50%, -50%) scale(${star.size * 0.5})`,
          }}
        >
          <Image
            src="/Star_white.png"
            width={100}
            height={100}
            alt="twinkle star"
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  );
}
