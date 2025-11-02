"use client";

import * as React from "react";

export default function MeteorShower() {
  React.useEffect(() => {
    const meteors = setInterval(createMeteor, 750);

    return () => {
      clearInterval(meteors);
    };
  }, []);

  function createMeteor() {
    console.log("HELLO");
    let meteor = document.createElement("div");
    meteor.setAttribute("class", "meteor");
    meteor.style.left = Math.round(Math.random() * window.innerWidth) + "px";
    meteor.style.top = Math.round(Math.random() * window.innerHeight) + "px";

    // append the meteor to a random meteor shower (direction)
    const showers = document.querySelectorAll(".shower");
    if (showers.length > 0) {
      const random = Math.floor(Math.random() * showers.length);
      const shower = showers[random];
      shower.append(meteor);
    }

    // remove the meteor after the animation duration
    setTimeout(() => {
      meteor.remove();
    }, 3000);
  }

  return (
    <div className="theme-container absolute inset-0 -z-10 h-[50vh] overflow-hidden">
      <div id="meteors" className="">
        <div className="shower ur"></div>
        <div className="shower dr"></div>
        <div className="shower dl"></div>
        <div className="shower ul"></div>
      </div>
    </div>
  );
}
