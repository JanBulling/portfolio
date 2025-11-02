"use client";

import * as React from "react";

export default function Particles() {
  React.useEffect(() => {
    const particlesMedium = generateParticles(250);
    const particlesLarge = generateParticles(150);
    const particles1 = document.getElementById("particles1");
    const particles2 = document.getElementById("particles2");

    if (particles1) {
      particles1.style.cssText = `
      width: 1.5px;
      height: 1.5px;
      border-radius: 50%;
      box-shadow: ${particlesMedium};
      animation: animateParticle 100s linear infinite;
      `;
    }

    if (particles2) {
      particles2.style.cssText = `
      width: 2px;
      height: 2px;
      border-radius: 50%;
      box-shadow: ${particlesLarge};
      animation: animateParticle 120s linear infinite;
      `;
    }

    const starsSmall = generateStars(100);
    const starsMedium = generateStars(100);
    const starsLarge = generateStars(50);
    const stars1 = document.getElementById("stars1");
    const stars2 = document.getElementById("stars2");
    const stars3 = document.getElementById("stars3");

    if (stars1) {
      stars1.style.cssText = `
      width: 2px;
      height: 2px;
      border-radius: 50%;
      box-shadow: ${starsSmall};
      `;
    }

    if (stars2) {
      stars2.style.cssText = `
      width: 3px;
      height: 3px;
      border-radius: 50%;
      box-shadow: ${starsMedium};
      `;
    }

    if (stars3) {
      stars3.style.cssText = `
      width: 4px;
      height: 4px;
      border-radius: 50%;
      box-shadow: ${starsLarge};
      `;
    }
  }, []);

  function generateStars(n: number) {
    let value = `${getRandom(2560)}px ${getRandom(2560)}px #fff`;
    for (let i = 2; i <= n; i++) {
      value += `, ${getRandom(2560)}px ${getRandom(2560)}px #fff`;
    }
    return value;
  }

  function generateParticles(n: number) {
    let value = `${getRandom(2560)}px ${getRandom(2560)}px #000`;
    for (let i = 2; i <= n; i++) {
      value += `, ${getRandom(2560)}px ${getRandom(2560)}px #000`;
    }
    return value;
  }

  function getRandom(max: number) {
    return Math.floor(Math.random() * max);
  }

  return (
    <>
      {/* Light Theme: Particles */}
      <div className="absolute inset-0 -z-10 block h-[50vh] overflow-hidden dark:hidden">
        <div id="particles1"></div>
        <div id="particles2"></div>
      </div>

      {/* Dark Theme: Stars */}
      <div className="absolute inset-0 -z-10 hidden h-[50vh] overflow-hidden dark:block">
        <div id="stars1"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
    </>
  );
}
