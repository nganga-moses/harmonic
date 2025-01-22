"use client";

import React from "react";

export function Layout3() {
  return (
    <section id="relume" className="px-[5%] py-8 md:py-12 lg:py-12">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="rb-5 mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
              Our Journey: Crafting the Future with our Autonomous AI Engineer, Leo
            </h1>
            <p className="md:text-md">
              At Harmonic Labs, our mission began with a vision to revolutionize
              technology through AI. The journey to create Leo, our autonomous
              AI Engineer, has been marked by innovation, dedication, and a
              commitment to pushing the boundaries of what is possible.
            </p>
          </div>
          <div>
            <img
              src="/sde.jpg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
