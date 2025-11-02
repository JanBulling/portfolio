"use client";

import * as React from "react";

export default function Particles() {
  function generateStars(n) {
    let value = `${getRandom(2560)}px ${getRandom(2560)}px #fff`;
    for (let i = 2; i <= n; i++) {
      value += `, ${getRandom(2560)}px ${getRandom(2560)}px #fff`;
    }
    return value;
  }

  function getRandom(max: number) {
    return Math.floor(Math.random() * max);
  }

  <div className="absolute inset-0 hidden dark:block">
    <div id="stars1" className="fixed inset-0"></div>
    <div id="stars2" className="fixed inset-0"></div>
    <div id="stars3" className="fixed inset-0"></div>
  </div>;
}
